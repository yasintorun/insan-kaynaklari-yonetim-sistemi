package kodlamaio.hrms.business.abstracts;


import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Image;
import kodlamaio.hrms.entities.concretes.Jobseeker;
import kodlamaio.hrms.entities.concretes.Resume;

public interface ResumeService extends BaseService<Resume>{
	public Result add(Resume resume);
	public DataResult<List<Resume>> getAllDisplay();
	public DataResult<Resume> getResumeById(int id);
	
	public DataResult<Resume> updateResume(int id, Resume resume);
	public Result updateResumeSummary(int id, Resume resume);
	
	public Image getUserImage(int id);
	public Result updateResumePhoto(int id, Image image);
	public Result deleteUserPhoto(int resumeId);
}
