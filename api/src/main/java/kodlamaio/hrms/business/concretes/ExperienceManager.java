package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.ExperienceService;
import kodlamaio.hrms.core.utilities.converters.ExperienceDtoConverter;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.ExperienceDao;
import kodlamaio.hrms.entities.concretes.Experience;
import kodlamaio.hrms.entities.dtos.ExperienceDisplayDto;

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
		this.experienceDao.save(entity);
		return new SuccessResult("İş deneyimi eklendi!");
	}

	@Override
	public DataResult<List<ExperienceDisplayDto>> getAllDisplay() {
		return new SuccessDataResult<List<ExperienceDisplayDto>>
		(ExperienceDtoConverter.NormalToDisplayDto(this.experienceDao.findAll()), "İş Deneyimleri Listelendi!");
	}

}
