package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.Services.Mernis;
import kodlamaio.hrms.business.abstracts.JobseekerService;
import kodlamaio.hrms.core.utilities.helpers.CheckHelper;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorDataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.JobseekerDao;
import kodlamaio.hrms.entities.concretes.Employer;
import kodlamaio.hrms.entities.concretes.Jobseeker;
import kodlamaio.hrms.entities.concretes.User;

@Service
public class JobseekerManager implements JobseekerService{

	private JobseekerDao jobseekerDao;
	private UserManager userManager;
	@Autowired
	public JobseekerManager(JobseekerDao jobseekerDao, UserManager userManager) {
		this.jobseekerDao = jobseekerDao;
		this.userManager = userManager;
	}
	
	@Override
	public DataResult<List<Jobseeker>> getAll() {
		return new SuccessDataResult<List<Jobseeker>>
		(this.jobseekerDao.findAll());
	}

	@Override
	public Result add(Jobseeker entity) {
		
		if(isNull(entity)) {
			return new ErrorDataResult<Employer>("Tüm alanları doldurunuz!");
		}
		
		if(!CheckHelper.emailCheck(entity.getEposta())) {
			return new ErrorResult("Eposta Hatalı!");
		}
		
		
		DataResult<Jobseeker> result = Mernis.Validate(entity);
		if(!result.isSuccess()) {
			return result;
		}
		
		if(isExist(entity)) {
			return new ErrorResult("Tc no veya eposta kayıtlı!");
		}

		DataResult<User> userResult = (DataResult<User>) userManager.add((User)entity);
		if(userResult.isSuccess()) {
			entity.setUserId(userResult.getData().getUserId());
			this.jobseekerDao.save(entity);
			return new SuccessResult("İş Arayan eklendi");
		}
		
		return new ErrorResult("Kayıt Başarısız!");
	}

	
	private boolean isNull(Jobseeker entity) {
		return (entity.getEposta().isEmpty() || entity.getFirstname().isEmpty() || entity.getPassword().isEmpty() || entity.getLastname().isEmpty() || entity.getTcNo().isEmpty());
	}
	
	
	private boolean isExist(Jobseeker entity) {
		return jobseekerDao.existsJobseekerByTcNo(entity.getTcNo()) || jobseekerDao.existsUserByEposta(entity.getEposta());
	}
	
	
	
}
