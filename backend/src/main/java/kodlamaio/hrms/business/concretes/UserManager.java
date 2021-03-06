package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.UserService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorDataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.dataAccess.abstracts.UserDao;
import kodlamaio.hrms.entities.concretes.User;

@Service
public class UserManager implements UserService {

	private UserDao userDao;
	private UserRegisterManager userRegisterManager;
	@Autowired
	public UserManager(UserDao userDao, UserRegisterManager userRegisterManager) {
		super();
		this.userDao = userDao;
		this.userRegisterManager = userRegisterManager;
	}
	
	@Override
	public DataResult<List<User>> getAll() {
		return new SuccessDataResult<List<User>>
		(this.userDao.findAll());
	}
	
	@Override
	public Result add(User entity) {
		
		this.userDao.save(entity);
		userRegisterManager.NewRegister(entity);
		
		return new SuccessDataResult<User>(entity, "Kullanıcı eklendi");
	}

	@Override
	public Result Verify(int userId, String code) {
		return userRegisterManager.Verify(userId, code);
	}

	@Override
	public DataResult<User> login(User userInput) {
		try {
			User user = this.userDao.getByEpostaAndPassword(userInput.getEposta(), userInput.getPassword());
			if(user == null) {
				return new ErrorDataResult<User>("Kullanıcı Adı veya şifre hatalı.");
			}
			
			return new SuccessDataResult<User>(user, "Giriş başarılı.");
			
			
		} catch (Exception e) {
			return new ErrorDataResult<User>("Hata oluştu!");
		}
		
	}
	
}
