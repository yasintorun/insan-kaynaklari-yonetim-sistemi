package kodlamaio.hrms.business.abstracts;


import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Image;
import kodlamaio.hrms.entities.concretes.Resume;
import kodlamaio.hrms.entities.dtos.display.ResumeDisplayDto;
import kodlamaio.hrms.entities.dtos.input.ResumeInputDto;

public interface ResumeService extends BaseService<Resume>{
	public Result add(ResumeInputDto resume);
	public DataResult<List<ResumeDisplayDto>> getAllDisplay();
	public DataResult<ResumeDisplayDto> getResumeById(int id);
	
	public DataResult<ResumeDisplayDto> updateResume(int id, ResumeInputDto resume);
	public Result updateResumeSummary(int id, ResumeInputDto resume);
	
	public Image getUserImage(int id);
	public Result updateResumePhoto(int id, Image image);
	public Result deleteUserPhoto(int resumeId);
}
