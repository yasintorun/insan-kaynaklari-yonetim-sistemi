package kodlamaio.hrms.business.concretes;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.support.DaoSupport;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.JobAdvertisementService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.JobAdvertisementDao;
import kodlamaio.hrms.entities.concretes.JobAdvertisement;
import kodlamaio.hrms.entities.dtos.DisplayJobAdvertisementDto;
import kodlamaio.hrms.entities.dtos.JobAdvertisementDto;

@Service
public class JobAdvertisementManager implements JobAdvertisementService{

	private JobAdvertisementDao jobAdvertisementDao;
	
	@Autowired
	public JobAdvertisementManager(JobAdvertisementDao jobAdvertisementDao) {
		this.jobAdvertisementDao = jobAdvertisementDao;
	}
	
	@Override
	public DataResult<List<JobAdvertisement>> getAll() {
		return new SuccessDataResult<List<JobAdvertisement>>
		(this.jobAdvertisementDao.findAll());
	}

	@Override
	public Result add(JobAdvertisement entity) {
		this.jobAdvertisementDao.save(entity);
		return new SuccessResult("İş ilanı eklendi");
	}
	
	
	@Override
	public Result add(JobAdvertisementDto entity) {
		
		JobAdvertisement jobAdvertisement = new JobAdvertisement(	
				entity.getDescription(), entity.getCity(), entity.getMinSalary(), entity.getMaxSalary(), entity.getMaxPerson(), new Date(), entity.getDeadline(), false, entity.getJobPositionId(), entity.getEmployerId()
				);
		
		
		this.jobAdvertisementDao.save(jobAdvertisement);
		return new SuccessResult("İş ilanı eklendi");
	}

	@Override
	public DataResult<List<DisplayJobAdvertisementDto>> getByIsActive(boolean isActive) {
		
		List<DisplayJobAdvertisementDto> displayJobAdvertisementDtos = new ArrayList<DisplayJobAdvertisementDto>();
		
		List<JobAdvertisement> activeJobAdList = this.jobAdvertisementDao.getByIsActive(isActive);
		
		for(int i = 0; i< activeJobAdList.size(); i++) {
			displayJobAdvertisementDtos.add(new DisplayJobAdvertisementDto(
					activeJobAdList.get(i).getEmployer().getCompanyName(),
					activeJobAdList.get(i).getJobPosition().getJobName(),
					activeJobAdList.get(i).getMaxperson(),
					activeJobAdList.get(i).getReleaseDate(),
					activeJobAdList.get(i).getDeadline()
					));
		}
		
		return new SuccessDataResult<List<DisplayJobAdvertisementDto>>(displayJobAdvertisementDtos, "Listelendi");
	}

	@Override
	public  DataResult<List<DisplayJobAdvertisementDto>> getByIsActiveAndReleaseDate(boolean isActive, Date releaseDate) {
		List<DisplayJobAdvertisementDto> displayJobAdvertisementDtos = new ArrayList<DisplayJobAdvertisementDto>();
		
		List<JobAdvertisement> activeJobAdList = this.jobAdvertisementDao.getByIsActive(isActive);

		return new SuccessDataResult<List<DisplayJobAdvertisementDto>>(null, "Aktif olan ilanlar tarihe göre listelendi!");
	}

	@Override
	public DataResult<List<JobAdvertisementDto>> getAllSorted() {
		Sort sort = Sort.by(Sort.Direction.DESC, "releaseDate");
		
		return new SuccessDataResult<List<JobAdvertisementDto>>(NormalToDto(this.jobAdvertisementDao.findAll(sort)), "Başarılı!");	
	}
	
	
	private List<JobAdvertisementDto> NormalToDto(List<JobAdvertisement> normalList) {
		List<JobAdvertisementDto> dtoList = new ArrayList<JobAdvertisementDto>();
		
		for(int i = 0; i< normalList.size(); i++) {
			dtoList.add(NormalToDto(normalList.get(i)));
		}
		
		return dtoList;
	}

	private JobAdvertisementDto NormalToDto(JobAdvertisement normal) {
		return new JobAdvertisementDto(normal.getDescription(), normal.getMinSalary(), normal.getMaxSalary(),
									   normal.getMaxperson(), normal.getDeadline(), normal.isActive(), normal.getCity(), 
									   normal.getJobPosition().getId(), normal.getEmployer().getUserId());
	}

	@Override
	public DataResult<List<JobAdvertisement>> getByIsActiveAndEmployer_UserId(boolean isActive, int employerId) {
		return new SuccessDataResult<List<JobAdvertisement>>
		(this.jobAdvertisementDao.getByIsActiveAndEmployer_UserId(isActive, employerId), "listelendi!");
	}

	@Override
	public DataResult<JobAdvertisementDto> updateActive(int jobAdvertisementId) {
		JobAdvertisement current = jobAdvertisementDao.getOne(jobAdvertisementId);
		current.setActive(false);
		return new SuccessDataResult<JobAdvertisementDto>
		(NormalToDto(this.jobAdvertisementDao.save(current)), "İlan pasif hale getirildi!");
	}
	
}
