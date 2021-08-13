package kodlamaio.hrms.business.abstracts;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Employer;
import kodlamaio.hrms.entities.concretes.UpdateEmployerInfo;
import kodlamaio.hrms.entities.dtos.input.EmployerInputDto;

public interface EmployerService extends BaseService<Employer>{
	Result add(EmployerInputDto inputDto);
	DataResult<Employer> getById(int userId);
	DataResult<Employer> getByUserId(int userId);
	//Result updateEmployerInfo(int userId, EmployerInputDto inputDto);
	Result update(Employer employer);
	
	public  Result validation(EmployerInputDto inputDto);
	Result update(UpdateEmployerInfo newEmployer);
}


