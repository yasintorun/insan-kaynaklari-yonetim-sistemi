package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.EducationService;
import kodlamaio.hrms.core.utilities.converters.EducationDtoConverter;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.EducationDao;
import kodlamaio.hrms.entities.concretes.Education;
import kodlamaio.hrms.entities.dtos.EducationDisplayDto;

@Service
public class EducationManager implements EducationService{
	private EducationDao educationDao;
	
	@Autowired
	public EducationManager(EducationDao educationDao) {
		this.educationDao = educationDao;
	}

	@Override
	public DataResult<List<Education>> getAll() {
		return new SuccessDataResult<List<Education>>
		(this.educationDao.findAll(), "Eğitimler listelendi!");
	}

	@Override
	public Result add(Education entity) {
		this.educationDao.save(entity);
		return new SuccessResult("Eğitim eklendi!");
	}

	@Override
	public DataResult<List<EducationDisplayDto>> getAllDisplay() {
		return new SuccessDataResult<List<EducationDisplayDto>>
		(EducationDtoConverter.NormalToDisplayDto(this.educationDao.findAll()), "Eğitimler listelendi!");
	}

	@Override
	public DataResult<List<EducationDisplayDto>> getAllSortedByGraduation() {
		Sort sort = Sort.by(Sort.Direction.DESC, "graduationDate");
		return new SuccessDataResult<List<EducationDisplayDto>>
		(EducationDtoConverter.NormalToDisplayDto(this.educationDao.findAll(sort)), "Mezuniyet tarihine göre listelendi!");
	}	

}
