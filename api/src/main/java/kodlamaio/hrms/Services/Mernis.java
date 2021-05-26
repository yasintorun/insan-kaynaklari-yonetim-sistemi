package kodlamaio.hrms.Services;

import kodlamaio.hrms.core.utilities.results.DataResult;

import kodlamaio.hrms.core.utilities.results.ErrorDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.entities.concretes.Jobseeker;

public class Mernis {

	public static DataResult<Jobseeker> Validate(Jobseeker jobseeker) {
		
		if(jobseeker.getTcNo().length() != 11) {
			return new ErrorDataResult<Jobseeker>("Tc kimlik numarası hatalı!");
		}
		
		return new SuccessDataResult<Jobseeker>("Mernis doğrulaması başarılı!");
	}
	
	
}
