package kodlamaio.hrms.business.abstracts;

import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Employer;
import kodlamaio.hrms.entities.dtos.EmployerInputDto;

public interface EmployerService extends BaseService<Employer>{
	Result add(EmployerInputDto inputDto);
}


