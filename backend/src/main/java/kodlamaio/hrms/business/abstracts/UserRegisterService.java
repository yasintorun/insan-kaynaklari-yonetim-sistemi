package kodlamaio.hrms.business.abstracts;

import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.User;
import kodlamaio.hrms.entities.concretes.UserRegister;

public interface UserRegisterService  extends BaseService<UserRegister>{
	public Result NewRegister(User user);

	public UserRegister getRegister(int userId);
}
