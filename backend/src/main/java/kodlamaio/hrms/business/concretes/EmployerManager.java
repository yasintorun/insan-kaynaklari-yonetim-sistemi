package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.EmployerService;
import kodlamaio.hrms.core.utilities.helpers.CheckHelper;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorDataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.EmployerDao;
import kodlamaio.hrms.entities.concretes.Employer;
import kodlamaio.hrms.entities.concretes.User;
@Service
public class EmployerManager implements EmployerService{
	private EmployerDao employerDao;
	private UserManager userManager;
	@Autowired
	public EmployerManager(EmployerDao employerDao, UserManager userManager) {
		this.employerDao = employerDao;
		this.userManager = userManager;
	}
	
	@Override
	public DataResult<List<Employer>> getAll() {
		return new SuccessDataResult<List<Employer>>
		(this.employerDao.findAll());
	}

	@Override
	public Result add(Employer entity) {
		

		if(isNull(entity)) {
			return new ErrorDataResult<Employer>("Tüm alanları doldurunuz!");
		}
		
		if(!CheckHelper.emailCheck(entity.getEposta())) {
			return new ErrorResult("E-posta hatalı!");
		}
		
		/*if(!entity.getEposta().matches("^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$")) {
			return new ErrorResult("E-posta hatalı!");
		}*/
		
		//Todo: Burayı Düzenle. 
		String domain = entity.getEposta().split("@")[1];
		if(!domain.startsWith(entity.getCompanyName())) {
			return new ErrorResult("Lütfen şirket adınıza kayıtlı e posta kullanınız!");
		}
		
		
		if(isExist(entity)) {
			return new ErrorResult("E posta kayıtlı!");
		}
		
		
		DataResult<User> result = (DataResult<User>) userManager.add((User)entity);
		if(result.isSuccess()) {
			entity.setUserId(result.getData().getUserId());
			this.employerDao.save(entity);
			return new SuccessResult("İş Veren eklendi");
		}
		
		return new ErrorResult("Kayıt başarısız!");
		
	}
	private boolean isNull(Employer entity) {
		return (entity.getEposta().isEmpty() || entity.getCompanyName().isEmpty() || entity.getPassword().isEmpty() || entity.getPhone().isEmpty() || entity.getWebsite().isEmpty());
	}
	
	private boolean isExist(Employer entity) {
		return employerDao.existsUserByEposta(entity.getEposta());
	}
	
	
	
}
