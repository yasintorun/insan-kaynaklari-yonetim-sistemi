package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.UserService;
import kodlamaio.hrms.core.utilities.converters.UserDtoConverter;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorDataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.dataAccess.abstracts.UserDao;
import kodlamaio.hrms.entities.concretes.User;
import kodlamaio.hrms.entities.dtos.display.UserDisplayDto;
import kodlamaio.hrms.entities.dtos.input.UserInputDto;

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
	public DataResult<UserDisplayDto> login(UserInputDto inputDto) {
		try {
			User user = this.userDao.getByEpostaAndPassword(inputDto.getEposta(), inputDto.getPassword());
			if(user == null) {
				return new ErrorDataResult<UserDisplayDto>("Kullanıcı Adı veya şifre hatalı.");
			}
			
			return new SuccessDataResult<UserDisplayDto>(UserDtoConverter.NormalToDisplayDto(user), "Giriş başarılı.");
			
			
		} catch (Exception e) {
			return new ErrorDataResult<UserDisplayDto>("Hata oluştu!");
		}
		
	}

	@Override
	public DataResult<UserDisplayDto> loginTest(UserInputDto inputDto) {
		try {
			User user = new User();
			user.setPassword(inputDto.getPassword());
			user.setEposta(inputDto.getEposta());
			this.userDao.save(user);
			return new SuccessDataResult<UserDisplayDto>
			("Giriş Başarılı");
		}
		catch (Exception e) {
			return new ErrorDataResult<UserDisplayDto>("Hata oluştu");
		}
	}

	

	
	
	
}
