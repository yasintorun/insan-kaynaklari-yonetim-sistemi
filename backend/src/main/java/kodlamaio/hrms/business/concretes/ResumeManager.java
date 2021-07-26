package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.JobseekerService;
import kodlamaio.hrms.business.abstracts.ResumeService;
import kodlamaio.hrms.core.utilities.converters.ResumeDtoConverter;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorDataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.JobseekerDao;
import kodlamaio.hrms.dataAccess.abstracts.ResumeDao;
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

}
