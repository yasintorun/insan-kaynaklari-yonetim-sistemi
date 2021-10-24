package kodlamaio.hrms.business.concretes;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.EducationService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorDataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.EducationDao;
import kodlamaio.hrms.entities.concretes.Education;

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
		
		if(entity.getStartingDate() < 1950) {
			return new ErrorResult("Başlanğıç yılı en düşük 1950 olabilir.");
		}
		int currentYear = Calendar.getInstance().get(Calendar.YEAR);
		if(entity.getStartingDate() > currentYear) {
			return new ErrorResult("Başlangıç yılı hatalı. Başlangıç yılı en fazla " + currentYear + " olabilir.");
		}
		
		if(entity.getGraduationDate() <= entity.getStartingDate()) {
			return new ErrorResult("Mezuniyet tarihi başlangıç tarihinden düşük veya eşit olamaz.");
		}
		
		if(entity.getGraduationDate() > currentYear + 6) {
			return new ErrorResult("Mezuniyet yılı en fazla " + currentYear + 6 + " olabilir.");
		}
		
		
		this.educationDao.save(entity);
		return new SuccessResult("Eğitim eklendi!");
	}

	@Override
	public DataResult<List<Education>> getAllDisplay() {
		return new SuccessDataResult<List<Education>>
		(this.educationDao.findAll(), "Eğitimler listelendi!");
	}

	@Override
	public DataResult<List<Education>> getAllSortedByGraduation() {
		Sort sort = Sort.by(Sort.Direction.DESC, "graduationDate");
		return new SuccessDataResult<List<Education>>
		(this.educationDao.findAll(sort), "Mezuniyet tarihine göre listelendi!");
	}

	@Override
	public DataResult<Education> updateEducation(int id, Education education) {
		try {
			Education current = this.educationDao.getOne(id);
			current.setSchool(education.getSchool());
			current.setDepartment(education.getDepartment());
			current.setGraduationDate(GraduationControl(education.getGraduationDate()));
			current.setStartingDate(education.getStartingDate());
			current.setSchoolType(education.getSchoolType());
			this.educationDao.save(current);
			return new SuccessDataResult<Education>
			(null, "Eğitim güncellendi");			
		} catch (Exception e) {
			return new ErrorDataResult<Education>
			("Hata: "+e.getLocalizedMessage());
		}
		
	}

	@Override
	public DataResult<List<Education>> getByUserId(int resumeId) {
		Sort sort = Sort.by(Sort.Direction.DESC, "graduationDate");
		return new SuccessDataResult<List<Education>>
		(this.educationDao.getByResumeId(resumeId, sort), "kullanıcı eğitim bilgileri listelendi");
	}	

	
	private int GraduationControl(int graduation) {
		if(graduation == 0) {
			graduation = 3000; //Frontendde de aynı değeri ver.
		}
		return graduation;
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
