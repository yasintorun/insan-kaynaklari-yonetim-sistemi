package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import kodlamaio.hrms.business.abstracts.JobseekerService;
import kodlamaio.hrms.business.abstracts.ResumeService;
import kodlamaio.hrms.core.utilities.converters.ResumeDtoConverter;
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
import kodlamaio.hrms.entities.dtos.display.ResumeDisplayDto;
import kodlamaio.hrms.entities.dtos.input.ResumeInputDto;

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
	public Result add(ResumeInputDto resume) {
		Resume res = ResumeDtoConverter.InputDtoToNormal(resume);
		System.out.println("\n\n\n\n");
		System.out.println(res.getImage().getId());
		this.resumeDao.save(res);
		return new SuccessResult("CV Eklendi");
	}

	@Override
	public DataResult<List<ResumeDisplayDto>> getAllDisplay() {
		return new SuccessDataResult<List<ResumeDisplayDto>>
		(ResumeDtoConverter.NormalToDisplayDto(this.resumeDao.findAll()), "Cvler listelendi!");
	}

	@Override
	public DataResult<ResumeDisplayDto> getResumeById(int id) {
		return new SuccessDataResult<ResumeDisplayDto>
		(ResumeDtoConverter.NormalToDisplayDto(this.resumeDao.getResumeById(id)), "Özgeçmiş başarıyla getirildi");
	}

	@Override
	public DataResult<ResumeDisplayDto> updateResume(int id, ResumeInputDto resume) {
		try {
			Resume current = this.resumeDao.getResumeById(id);
			Jobseeker self = current.getJobSeeker();
			self.setFirstname(resume.getUser().getFirstname());
			self.setLastname(resume.getUser().getLastname());
			current.setPhone(resume.getPhone());
			current.setBirtdate(resume.getBirthDate());
			current.setGithub(resume.getGithubLink());
			current.setLinkedin(resume.getLinkedinLink());
			current.setGender(new Gender(resume.getGenderId()));
			current.setCity(new City(resume.getCityId()));
			
			this.jobseekerDao.save(self);
			
			this.resumeDao.save(current);
			return new SuccessDataResult<ResumeDisplayDto>(null, "güncellendi");
		}catch (Exception e) {
			return new ErrorDataResult<ResumeDisplayDto>("Hata: " + e.getLocalizedMessage());
		}
			
	}

	@Override
	public Result updateResumeSummary(int id, ResumeInputDto dto) {
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
