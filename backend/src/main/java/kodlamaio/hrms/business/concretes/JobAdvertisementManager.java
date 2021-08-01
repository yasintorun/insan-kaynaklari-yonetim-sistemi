package kodlamaio.hrms.business.concretes;

import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import kodlamaio.hrms.business.abstracts.JobAdvertisementService;
import kodlamaio.hrms.core.utilities.converters.JobAdvertisementConverter;
import kodlamaio.hrms.core.utilities.helpers.FormatHelper;
import kodlamaio.hrms.core.utilities.helpers.JobAdvertFilterOption;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.JobAdvertisementDao;
import kodlamaio.hrms.entities.concretes.JobAdvertisement;
import kodlamaio.hrms.entities.dtos.display.JobAdvertisementDisplayDto;
import kodlamaio.hrms.entities.dtos.input.JobAdvertisementInputDto;
import net.bytebuddy.asm.Advice.This;

@Service
public class JobAdvertisementManager implements JobAdvertisementService{

	private JobAdvertisementDao jobAdvertisementDao;
	
	@Autowired
	public JobAdvertisementManager(JobAdvertisementDao jobAdvertisementDao) {
		this.jobAdvertisementDao = jobAdvertisementDao;
	}
	
	@Override
	public DataResult<List<JobAdvertisementDisplayDto>> getAllDisplay() {
		return new SuccessDataResult<List<JobAdvertisementDisplayDto>>
		(JobAdvertisementConverter.DisplayNormalToDto(this.jobAdvertisementDao.findAll()));
	}

	@Override
	public Result add(JobAdvertisement entity) {
		this.jobAdvertisementDao.save(entity);
		return new SuccessResult("İş ilanı eklendi");
	}
	
	
	@Override
	public Result add(JobAdvertisementInputDto entity) {
		
		JobAdvertisement jobAdvertisement = new JobAdvertisement(	
				entity.getDescription(), entity.getCityId(), entity.getMinSalary(), entity.getMaxSalary(), entity.getMaxPerson(),
				 FormatHelper.newDate(), entity.getDeadline(),
				false, entity.getJobPositionId(), entity.getEmployerId()
				);
		
		this.jobAdvertisementDao.save(jobAdvertisement);
		return new SuccessResult("İş ilanı eklendi");
	}

	@Override
	public DataResult<List<JobAdvertisementDisplayDto>> getByIsActive(boolean isActive) {
		
		List<JobAdvertisementDisplayDto> jobAdvertisementDisplayDtos = new ArrayList<JobAdvertisementDisplayDto>();
		
		List<JobAdvertisement> activeJobAdList = this.jobAdvertisementDao.getByIsActive(isActive);
		
		jobAdvertisementDisplayDtos = JobAdvertisementConverter.DisplayNormalToDto(activeJobAdList);
		/*
		for(int i = 0; i< activeJobAdList.size(); i++) {
			displayJobAdvertisementDtos.add(new DisplayJobAdvertisementDto(
					activeJobAdList.get(i).getId(),
					activeJobAdList.get(i).getEmployer().getCompanyName(),
					activeJobAdList.get(i).getJobPosition().getJobName(),
					activeJobAdList.get(i).getCity().getCityName(),
					activeJobAdList.get(i).getMaxperson(),
					activeJobAdList.get(i).getMinSalary(),
					activeJobAdList.get(i).getMaxSalary(),
					activeJobAdList.get(i).getReleaseDate(),
					activeJobAdList.get(i).getDeadline(),
					activeJobAdList.get(i).getWorkStyle().getName()
					));
		}*/
		
		return new SuccessDataResult<List<JobAdvertisementDisplayDto>>(jobAdvertisementDisplayDtos, "Listelendi");
	}

	@Override
	public  DataResult<List<JobAdvertisementDisplayDto>> getByIsActiveAndReleaseDate(boolean isActive, Date releaseDate) {
		List<JobAdvertisementDisplayDto> jobAdvertisementDisplayDtos = new ArrayList<JobAdvertisementDisplayDto>();
		
		List<JobAdvertisement> activeJobAdList = this.jobAdvertisementDao.getByIsActive(isActive);

		return new SuccessDataResult<List<JobAdvertisementDisplayDto>>(null, "Aktif olan ilanlar tarihe göre listelendi!");
	}

	@Override
	public DataResult<List<JobAdvertisementDisplayDto>> getAllSorted() {
		Sort sort = Sort.by(Sort.Direction.DESC, "releaseDate");
		
		return new SuccessDataResult<List<JobAdvertisementDisplayDto>>(JobAdvertisementConverter.DisplayNormalToDto(this.jobAdvertisementDao.findAll(sort)), "Başarılı!");	
	}
	
	
	@Override
	public DataResult<List<JobAdvertisement>> getByIsActiveAndEmployer_UserId(boolean isActive, int employerId) {
		return new SuccessDataResult<List<JobAdvertisement>>
		(this.jobAdvertisementDao.getByIsActiveAndEmployer_UserId(isActive, employerId), "listelendi!");
	}

	@Override
	public DataResult<JobAdvertisementInputDto> updateActive(int jobAdvertisementId, boolean active) {
		JobAdvertisement current = jobAdvertisementDao.getOne(jobAdvertisementId);
		current.setActive(active);
		return new SuccessDataResult<JobAdvertisementInputDto>
		(JobAdvertisementConverter.NormalToDto(this.jobAdvertisementDao.save(current)), "İlan pasif hale getirildi!");
	}

	@Override
	public DataResult<List<JobAdvertisement>> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<JobAdvertisementDisplayDto> getJobAdvertisementById(int id) {
		return new SuccessDataResult<JobAdvertisementDisplayDto>
		(JobAdvertisementConverter.DisplayNormalToDto(this.jobAdvertisementDao.getJobAdvertisementById(id)), "İş ilanı getirildi");
	}

	@Override
	public void updateIsActive(boolean isActive, int id) {
		this.jobAdvertisementDao.updateIsActive(id, isActive);
	}

	@Override
	public DataResult<List<JobAdvertisementDisplayDto>> getAll(int pageNo, int pageSize, JobAdvertFilterOption filterOption) {
		Pageable pageable = PageRequest.of(pageNo - 1, pageSize);
		
		if(filterOption != null) {
			
			if(filterOption.getCityId() == null || filterOption.getCityId().size() == 0) {
				filterOption.setCityId(null);
			}
			if(filterOption.getJobPositionId() == null || filterOption.getJobPositionId().size() == 0) {
				filterOption.setJobPositionId(null);
			}
			if(filterOption.getWorkStyleId() == null || filterOption.getWorkStyleId().size() == 0) {
				filterOption.setWorkStyleId(null);
			}
			if(filterOption.getWorkTimeStyleId() == null || filterOption.getWorkTimeStyleId().size() == 0) {
				filterOption.setWorkTimeStyleId(null);
			}
		}
		//System.out.println(this.jobAdvertisementDao.getFilteringAndPage(filterOption, pageable).getTotalElements());
		
		JobAdvertisementConverter.totalJobAdvertListSize = (int) this.jobAdvertisementDao.getFilteringAndPage(filterOption, pageable).getTotalElements();
		return new SuccessDataResult<List<JobAdvertisementDisplayDto>>
		(JobAdvertisementConverter.DisplayNormalToDto(this.jobAdvertisementDao.getFilteringAndPage(filterOption, pageable).getContent()), "iş ilanı "+pageNo+". sayfa getirildi.");
	}

	@Override
	public DataResult<List<JobAdvertisementDisplayDto>> getByEmployerUserId(int userId) {
		return new SuccessDataResult<List<JobAdvertisementDisplayDto>>
		(JobAdvertisementConverter.DisplayNormalToDto(this.jobAdvertisementDao.getByEmployer_userId(userId)), "İşverenin iş ilanları getirildi");
	}

	@Override
	public Result deleteById(int id) {
		try {
			this.jobAdvertisementDao.deleteById(id);
			return new SuccessResult("İş ilanı silindi");
		} catch (Exception e) {
			return new ErrorResult("Hata: " + e.getMessage());
		}
	}
	
	
	
}
