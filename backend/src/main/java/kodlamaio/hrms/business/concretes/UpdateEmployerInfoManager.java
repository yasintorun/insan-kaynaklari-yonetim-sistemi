package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.EmployerService;
import kodlamaio.hrms.business.abstracts.UpdateEmployerInfoService;
import kodlamaio.hrms.business.validations.EmployerValidation;
import kodlamaio.hrms.core.utilities.converters.EmployerDtoConverter;
import kodlamaio.hrms.core.utilities.helpers.CheckHelper;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorDataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.EmployerDao;
import kodlamaio.hrms.dataAccess.abstracts.UpdateEmployerInfoDao;
import kodlamaio.hrms.entities.concretes.Employer;
import kodlamaio.hrms.entities.concretes.UpdateEmployerInfo;
import kodlamaio.hrms.entities.dtos.input.EmployerInputDto;
@Service
public class UpdateEmployerInfoManager implements UpdateEmployerInfoService{
	
	private UpdateEmployerInfoDao updateEmployerInfoDao;
	private EmployerService employerService;
	
	@Autowired
	public UpdateEmployerInfoManager(UpdateEmployerInfoDao updateEmployerInfoDao,  EmployerService employerService) {
		super();
		this.updateEmployerInfoDao = updateEmployerInfoDao;
		this.employerService = employerService;
	}

	@Override
	public DataResult<List<UpdateEmployerInfo>> getAll() {
		return new SuccessDataResult<List<UpdateEmployerInfo>>
		(this.updateEmployerInfoDao.findAll(), "Güncelleme bekleyen işverenler listelendi");
	}

	@Override
	public Result add(int userId, EmployerInputDto entity) {
		
		if(entity.getEposta().isEmpty() || entity.getCompanyName().isEmpty() || entity.getPhone().isEmpty() || entity.getSummary().isEmpty() || entity.getWebsite().isEmpty()) {
			return new ErrorResult("Tüm alanları doldurunuz!");
		}
		
		if(!CheckHelper.emailCheck(entity.getEposta())) {
			return new ErrorResult("E posta hatalı!");
		}
		
		try {
		
			UpdateEmployerInfo control = this.updateEmployerInfoDao.getByEmployer_UserId(userId);

			this.updateEmployerInfoDao.save( EmployerDtoConverter.InputDtoToUpdateEmployer(userId, entity));
			
			return new SuccessResult("Güncelleme onay için sistem personeline gönderildi");
	
		} catch (Exception e) {
			return new ErrorResult("Hata: " + e.getMessage());
		}
		
	}

	@Override
	public Result confirmByAdmin(int userId) {
		/*
		 * 1- veriyi güncelle
		 * 2- veriyi sil
		 */
		
		
		UpdateEmployerInfo newEmployer = this.updateEmployerInfoDao.getByEmployer_UserId(userId);

		if(newEmployer == null) {
			return new ErrorResult("iş veren kaydı bulunamadı");
		}
		 
		//Employer current = this.employerService.getByUserId(userId).getData();
		
		//Result result = employerService.update(EmployerDtoConverter.UpdateEmployerToNormal(newEmployer));
		Result result = employerService.update(newEmployer);
		if(!result.isSuccess()) {
			return result;
		}
		
		this.updateEmployerInfoDao.delete(newEmployer);
		
		
		return new SuccessResult("İşveren bilgi güncellemesi onaylandı");
		
	}

	@Override
	public DataResult<UpdateEmployerInfo> getByUserId(int userId) {
		UpdateEmployerInfo employerInfo = this.updateEmployerInfoDao.getByEmployer_UserId(userId);
		if(employerInfo == null) {
			return new ErrorDataResult<UpdateEmployerInfo>("İşveren bulunamadı");
		}
		return new SuccessDataResult<UpdateEmployerInfo>
		(employerInfo);
	}

	@Override
	public Result add(UpdateEmployerInfo entity) {
		// TODO Auto-generated method stub
		return null;
	}

}
