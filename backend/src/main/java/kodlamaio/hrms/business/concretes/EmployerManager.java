package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.EmployerService;
import kodlamaio.hrms.business.validations.EmployerValidation;
import kodlamaio.hrms.core.utilities.converters.EmployerDtoConverter;
import kodlamaio.hrms.core.utilities.helpers.CheckHelper;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.EmployerDao;
import kodlamaio.hrms.entities.concretes.Employer;
import kodlamaio.hrms.entities.concretes.UpdateEmployerInfo;
import kodlamaio.hrms.entities.concretes.User;
import kodlamaio.hrms.entities.dtos.EmployerDisplayDto;
import kodlamaio.hrms.entities.dtos.EmployerInputDto;
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
	
		DataResult<User> result = (DataResult<User>) userManager.add((User)entity);
		if(result.isSuccess()) {
			entity.setUserId(result.getData().getUserId());
			this.employerDao.save(entity);
			return new SuccessResult("İş Veren eklendi");
		}
		
		return new ErrorResult("Kayıt başarısız!");
		
	}
	
	

	@Override
	public Result add(EmployerInputDto inputDto) {
		
		Result validate = validation(inputDto);
		if(!validate.isSuccess()) {
			return validate;
		}
		
		// TODO Auto-generated method stub
		return this.add(EmployerDtoConverter.InputToNormal(inputDto));
	}

	@Override
	public DataResult<EmployerDisplayDto> getById(int userId) {
		return new SuccessDataResult<EmployerDisplayDto>
		(EmployerDtoConverter.NormalToDisplayDto(this.employerDao.getOne(userId)), "işveren getirildi");
	}

	

	@Override
	public DataResult<Employer> getByUserId(int userId) {
		return new SuccessDataResult<Employer>
		(this.employerDao.getOne(userId), "İş veren getirildi");
	}


	@Override
	public Result update(Employer employer) {
		this.employerDao.save(employer);
		return new SuccessResult("İşveren güncellendi");
		
	}
	
	
	
	
	
	
	
	
	public  boolean isNull(EmployerInputDto entity) {
		return (entity.getEposta().isEmpty() || entity.getCompanyName().isEmpty() || entity.getPassword().isEmpty() || entity.getPhone().isEmpty() || entity.getWebsite().isEmpty());
	}
	
	public  boolean isExist( EmployerInputDto entity) {
		return employerDao.existsUserByEposta(entity.getEposta());
	}

	public  Result validation(EmployerInputDto inputDto) {
		if(isNull(inputDto)) {
			return new ErrorResult("Tüm alanları doldurunuz!");
		}
		
		if(!CheckHelper.emailCheck(inputDto.getEposta())) {
			return new ErrorResult("E-posta hatalı!");
		}
		
		/*if(!entity.getEposta().matches("^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$")) {
			return new ErrorResult("E-posta hatalı!");
		}*/
		
		//Todo: Burayı Düzenle. 
		String domain = inputDto.getEposta().split("@")[1];
		if(!domain.startsWith(inputDto.getCompanyName())) {
			return new ErrorResult("Lütfen şirket adınıza kayıtlı e posta kullanınız!");
		}
		
		
		
		if(isExist(inputDto)) {
			return new ErrorResult("E posta kayıtlı!");
		}
		
		return new SuccessResult();
	}

	@Override
	public Result update(UpdateEmployerInfo newEmployer) {
		Employer current = this.employerDao.getOne(newEmployer.getEmployer().getUserId());
		current.setCompanyName(newEmployer.getCompanyName());
		current.setEposta(newEmployer.getEposta());
		current.setPhone(newEmployer.getPhone());
		current.setSummary(newEmployer.getSummary());
		current.setWebsite(newEmployer.getWebsite());
		this.employerDao.save(current);
		return new SuccessResult("Güncellendi");
	}
	
	
	
	/*@Override
	public Result updateEmployerInfo(int userId, EmployerInputDto inputDto) {
		Result validate = validation(inputDto);
		if(!validate.isSuccess()) {
			return validate;
		}
		
		Employer current = this.employerDao.getOne(userId);
		current.setCompanyName(inputDto.getCompanyName());
		current.setEposta(inputDto.getEposta());
		current.setPassword(inputDto.getPassword());
		current.setPhone(inputDto.getPhone());
		current.setSummary(inputDto.getSummary());
		
		
		
	}*/
	

}
