package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.ResumeService;
import kodlamaio.hrms.core.utilities.ResumeDtoConverter;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.ResumeDao;
import kodlamaio.hrms.entities.concretes.Resume;
import kodlamaio.hrms.entities.dtos.ResumeDisplayDto;
import kodlamaio.hrms.entities.dtos.ResumeInputDto;

@Service
public class ResumeManager implements ResumeService{

	private ResumeDao resumeDao;
	@Autowired
	private ResumeManager(ResumeDao resumeDao) {
		this.resumeDao = resumeDao;
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
		this.resumeDao.save(ResumeDtoConverter.InputDtoToNormal(resume));
		return new SuccessResult("CV Eklendi");
	}

	@Override
	public DataResult<List<ResumeDisplayDto>> getAllDisplay() {
		return new SuccessDataResult<List<ResumeDisplayDto>>
		(ResumeDtoConverter.NormalToDisplayDto(this.resumeDao.findAll()), "Cvler listelendi!");
	}

}
