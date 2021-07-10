package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.EducationService;
import kodlamaio.hrms.core.utilities.converters.EducationDtoConverter;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.EducationDao;
import kodlamaio.hrms.entities.concretes.Education;
import kodlamaio.hrms.entities.dtos.display.EducationDisplayDto;
import kodlamaio.hrms.entities.dtos.input.EducationInputDto;

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
		entity.setGraduationDate(GraduationControl(entity.getGraduationDate()));
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

	@Override
	public DataResult<EducationDisplayDto> updateEducation(int id, EducationInputDto inputDto) {
		Education current = this.educationDao.getOne(id);
		Education temp = EducationDtoConverter.InputDtoToNormal(inputDto);
		current.setSchool(temp.getSchool());
		current.setDepartment(temp.getDepartment());
		current.setJobseeker(temp.getJobseeker());
		current.setGraduationDate(GraduationControl(temp.getGraduationDate()));
		current.setStartingDate(temp.getStartingDate());
		current.setSchoolType(inputDto.getSchoolType());
		this.educationDao.save(current);
		return new SuccessDataResult<EducationDisplayDto>
		(null, "Eğitim güncellendi");
	}

	@Override
	public DataResult<List<EducationDisplayDto>> getByUserId(int userId) {
		Sort sort = Sort.by(Sort.Direction.DESC, "graduationDate");
		return new SuccessDataResult<List<EducationDisplayDto>>
		(EducationDtoConverter.NormalToDisplayDto(this.educationDao.getByJobseeker_userId(userId, sort)), "kullanıcı eğiti bilgileri listelendi");
	}	

	
	private int GraduationControl(int graduation) {
		if(graduation == 0) {
			graduation = 3000; //Frontendde de aynı değeri ver.
		}
		return graduation;
	}

	@Override
	public Result add(EducationInputDto education) {
		return this.add(EducationDtoConverter.InputDtoToNormal(education));
	}

	@Override
	public Result delete(int id) {
		try {
			this.educationDao.deleteById(id);
			return new SuccessResult("Eğitim bilgisi silindi");
		} catch (Exception e) {
			return new ErrorResult("Hata: " + e.getMessage());
		}
	}
	
}
