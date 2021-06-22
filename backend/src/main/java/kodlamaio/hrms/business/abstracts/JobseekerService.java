package kodlamaio.hrms.business.abstracts;

import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Jobseeker;
import kodlamaio.hrms.entities.dtos.JobSeekerInputDto;

public interface JobseekerService extends BaseService<Jobseeker>{
	Result add(JobSeekerInputDto inputDto);
}
