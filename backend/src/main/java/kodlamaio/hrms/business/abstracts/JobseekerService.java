package kodlamaio.hrms.business.abstracts;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Jobseeker;
import kodlamaio.hrms.entities.dtos.input.JobSeekerInputDto;

public interface JobseekerService extends BaseService<Jobseeker>{
	DataResult add(JobSeekerInputDto inputDto);
	public DataResult<Jobseeker> add(Jobseeker entity);
}
