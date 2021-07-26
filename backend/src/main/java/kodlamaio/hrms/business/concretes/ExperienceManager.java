package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.ExperienceService;
import kodlamaio.hrms.core.utilities.converters.ExperienceDtoConverter;
import kodlamaio.hrms.core.utilities.helpers.FormatHelper;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.ExperienceDao;
import kodlamaio.hrms.entities.concretes.City;
import kodlamaio.hrms.entities.concretes.Experience;
import kodlamaio.hrms.entities.concretes.JobPosition;
import kodlamaio.hrms.entities.concretes.WorkTimeStyle;
import kodlamaio.hrms.entities.dtos.display.ExperienceDisplayDto;
import kodlamaio.hrms.entities.dtos.input.ExperienceInputDto;

@Service
public class ExperienceManager implements ExperienceService{

	private ExperienceDao experienceDao;
	
	@Autowired
	public ExperienceManager(ExperienceDao experienceDao) {
		this.experienceDao = experienceDao;
	}

	@Override
	public DataResult<List<Experience>> getAll() {
		return new SuccessDataResult<List<Experience>>
		(this.experienceDao.findAll(), "İş Deneyimleri Listelendi!");
	}

	@Override
	public Result add(ExperienceInputDto entity) {
		try {
			this.experienceDao.save(ExperienceDtoConverter.InputDtoToNormal(entity));	
			return new SuccessResult("İş deneyimi eklendi!");		
		} catch (Exception e) {
			return new ErrorResult("Hata: " + e.getLocalizedMessage());
		}
	}

	@Override
	public DataResult<List<ExperienceDisplayDto>> getAllDisplay() {
		return new SuccessDataResult<List<ExperienceDisplayDto>>
		(ExperienceDtoConverter.NormalToDisplayDto(this.experienceDao.findAll()), "İş Deneyimleri Listelendi!");
	}

	@Override
	public DataResult<List<ExperienceDisplayDto>> getAllSorted() {
		Sort sort = Sort.by(Sort.Direction.DESC, "leavingDate");
		return new SuccessDataResult<List<ExperienceDisplayDto>>
		(ExperienceDtoConverter.NormalToDisplayDto(this.experienceDao.findAll(sort)), "deneyimler yıla göre listelendi!");
	}

	@Override
	public DataResult<ExperienceDisplayDto> updateExperience(int id, ExperienceInputDto exp) {
		Experience current = this.experienceDao.getOne(id);
		if(current == null) current = new Experience();
		current.setCity(new City(exp.getCityId()));
		current.setJobPosition(new JobPosition(exp.getJobPositionId()));
		current.setCompanyName(exp.getCompanyName());
		current.setLeavingDate(FormatHelper.OnlyYearAndMonth(exp.getLeavingDate()));
		current.setStartingDate(FormatHelper.OnlyYearAndMonth(exp.getStartingDate()));
		current.setWorkTimeStyle(new WorkTimeStyle(exp.getWorkTimeStyleId()));
		
		this.experienceDao.save(current);
		return new SuccessDataResult<ExperienceDisplayDto>
		(null, "Eğitim güncellendi!");
	}

	@Override
	public Result add(Experience entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<ExperienceDisplayDto> getExperienceById(int id) {
		return new SuccessDataResult<ExperienceDisplayDto>
		(ExperienceDtoConverter.NormalToDisplayDto(this.experienceDao.getExperienceById(id)), "İş ilanı getirildi");
	}

	@Override
	public DataResult<List<ExperienceDisplayDto>> getByUserId(int userId) {
		return new SuccessDataResult<List<ExperienceDisplayDto>>
		(ExperienceDtoConverter.NormalToDisplayDto(this.experienceDao.getByJobseeker_userId(userId)), "kullanıcı deneyimleri listelendi");
	}

	@Override
	public Result delete(int id) {
		try {
			this.experienceDao.deleteById(id);
			return new SuccessResult("Deneyim silindi");
		} catch (Exception e) {
			return new ErrorResult("Hata: " + e.getMessage());
		}
	}

}
