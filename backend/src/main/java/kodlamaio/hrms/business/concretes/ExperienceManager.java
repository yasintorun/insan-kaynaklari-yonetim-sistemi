package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.ExperienceService;
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
	public Result add(Experience entity) {
		try {
			this.experienceDao.save(entity);	
			return new SuccessResult("İş deneyimi eklendi!");		
		} catch (Exception e) {
			return new ErrorResult("Hata: " + e.getLocalizedMessage());
		}
	}

	@Override
	public DataResult<List<Experience>> getAllDisplay() {
		return new SuccessDataResult<List<Experience>>
		(this.experienceDao.findAll(), "İş Deneyimleri Listelendi!");
	}

	@Override
	public DataResult<List<Experience>> getAllSorted() {
		Sort sort = Sort.by(Sort.Direction.DESC, "leavingDate");
		return new SuccessDataResult<List<Experience>>
		(this.experienceDao.findAll(sort), "deneyimler yıla göre listelendi!");
	}

	@Override
	public DataResult<Experience> updateExperience(int id, Experience exp) {
		Experience current = this.experienceDao.getOne(id);
		if(current == null) current = new Experience();
		current.setCity(new City(exp.getCity().getId()));
		current.setJobPosition(new JobPosition(exp.getJobPosition().getId()));
		current.setCompanyName(exp.getCompanyName());
		current.setLeavingDate(FormatHelper.OnlyYearAndMonth(exp.getLeavingDate().toString()));
		current.setStartingDate(FormatHelper.OnlyYearAndMonth(exp.getStartingDate().toString()));
		current.setWorkTimeStyle(new WorkTimeStyle(exp.getWorkTimeStyle().getId()));
		
		this.experienceDao.save(current);
		return new SuccessDataResult<Experience>
		(null, "Deneyim güncellendi!");
	}



	@Override
	public DataResult<Experience> getExperienceById(int id) {
		return new SuccessDataResult<Experience>
		(this.experienceDao.getExperienceById(id), "İş ilanı getirildi");
	}

	@Override
	public DataResult<List<Experience>> getByUserId(int userId) {
		return new SuccessDataResult<List<Experience>>
		(this.experienceDao.getByUserId(userId), "kullanıcı deneyimleri listelendi");
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
