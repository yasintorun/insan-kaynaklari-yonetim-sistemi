package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import kodlamaio.hrms.business.abstracts.JobseekerService;
import kodlamaio.hrms.business.abstracts.ResumeService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorDataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.ImageDao;
import kodlamaio.hrms.dataAccess.abstracts.JobseekerDao;
import kodlamaio.hrms.dataAccess.abstracts.ResumeDao;
import kodlamaio.hrms.entities.concretes.City;
import kodlamaio.hrms.entities.concretes.Gender;
import kodlamaio.hrms.entities.concretes.Image;
import kodlamaio.hrms.entities.concretes.Jobseeker;
import kodlamaio.hrms.entities.concretes.Resume;

@Service
public class ResumeManager implements ResumeService{

	private ResumeDao resumeDao;
	private JobseekerDao jobseekerDao;
	@Autowired
	private ResumeManager(ResumeDao resumeDao, JobseekerDao jobseekerDao) {
		this.resumeDao = resumeDao;
		this.jobseekerDao = jobseekerDao;
	}
	
	@Override
	public DataResult<List<Resume>> getAll() {
		return new SuccessDataResult<List<Resume>>
		(this.resumeDao.findAll(), "Cvler listelendi!");
	}

	@Override
	public Result add(Resume entity) {
		
		this.resumeDao.save(entity);
		return new SuccessResult("CV eklendi!");
	}

	@Override
	public DataResult<List<Resume>> getAllDisplay() {
		return new SuccessDataResult<List<Resume>>
		(this.resumeDao.findAll(), "Cvler listelendi!");
	}

	@Override
	public DataResult<Resume> getResumeById(int id) {
		return new SuccessDataResult<Resume>
		(this.resumeDao.getResumeById(id), "Özgeçmiş başarıyla getirildi");
	}

	@Override
	public DataResult<Resume> updateResume(int id, Resume resume) {
		try {
			Resume current = this.resumeDao.getResumeById(id);
			current.setPhone(resume.getPhone());
			current.setBirtdate(resume.getBirtdate());
			current.setGithub(resume.getGithub());
			current.setLinkedin(resume.getLinkedin());
			current.setGender(new Gender(resume.getGender().getId()));
			current.setCity(new City(resume.getCity().getId()));
			
			this.resumeDao.save(current);
			return new SuccessDataResult<Resume>(null, "güncellendi");
		}catch (Exception e) {
			return new ErrorDataResult<Resume>("Hata: " + e.getLocalizedMessage());
		}
			
	}

	@Override
	public Result updateResumeSummary(int id, Resume dto) {
		Resume current = this.resumeDao.getResumeById(id);
		current.setSummary(dto.getSummary());
		
		try {
			this.resumeDao.save(current);
			return new SuccessResult("Ön yazı güncellendi");
		} catch (Exception e) {
			return new ErrorResult("Hata: " + e.getMessage());
		}
		
	}

	@Override
	public Result updateResumePhoto(int id, Image image) {
		try {
			Resume current = this.resumeDao.getResumeById(id);
			if(current == null) {
				throw new Exception();
			}
			current.setImage(image);
			this.resumeDao.save(current);
			return new SuccessResult("Fotoğraf yüklendi.");
		} catch (Exception e) {
			return new ErrorResult("Fotoğraf yüklenirken hata oluştu.");
		}
	}

	@Override
	public Image getUserImage(int id) {
		Resume userResume = this.resumeDao.getOne(id);
		return userResume.getImage();
	}

	@Override
	public Result deleteUserPhoto(int resumeId) {
		Resume current = this.resumeDao.getOne(resumeId);
		if(current == null) {
			return new ErrorResult("Özgeçmiş kaydı bulunamadı.");
		}
		current.setImage(new Image(1));
		this.resumeDao.save(current);
		return new SuccessResult("Fotoğraf kaldırıldı.");
	}

	
	
	
}
