package kodlamaio.hrms.business.abstracts;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.User;
import kodlamaio.hrms.entities.dtos.display.UserDisplayDto;
import kodlamaio.hrms.entities.dtos.input.UserInputDto;

public interface UserService extends BaseService<User>{
	public Result Verify(int userId, String code);
	

	public DataResult<UserDisplayDto> login(UserInputDto inputDto);

}
