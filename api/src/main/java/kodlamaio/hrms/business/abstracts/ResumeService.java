package kodlamaio.hrms.business.abstracts;


import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Resume;
import kodlamaio.hrms.entities.dtos.ResumeDisplayDto;
import kodlamaio.hrms.entities.dtos.ResumeInputDto;

public interface ResumeService extends BaseService<Resume>{
	public Result add(ResumeInputDto resume);
	public DataResult<List<ResumeDisplayDto>> getAllDisplay();
}
