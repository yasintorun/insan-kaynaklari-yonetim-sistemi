package kodlamaio.hrms.business.abstracts;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.UpdateEmployerInfo;
import kodlamaio.hrms.entities.dtos.input.EmployerInputDto;

public interface UpdateEmployerInfoService extends BaseService<UpdateEmployerInfo>{
	Result add(int userId, EmployerInputDto entity);
	Result confirmByAdmin(int id);
	DataResult<UpdateEmployerInfo> getByUserId(int userId);
}
