package kodlamaio.hrms.core.utilities.converters;

import kodlamaio.hrms.entities.concretes.Jobseeker;
import kodlamaio.hrms.entities.dtos.display.JobSeekerDisplayDto;
import kodlamaio.hrms.entities.dtos.input.JobSeekerInputDto;

public class JobSeekerDtoConverter {
	public static Jobseeker InputDtoToNormal(JobSeekerInputDto inputDto) {
		if(!inputDto.getPassword().equals(inputDto.getPasswordCheck())) {
			return null;
		}
		
		Jobseeker jobseeker = new Jobseeker(inputDto.getFirstname(), inputDto.getLastname(), inputDto.getTcNo(), null, null, null, null, null, null);
		jobseeker.setEposta(inputDto.getEposta());
		jobseeker.setPassword(inputDto.getPassword());
		return jobseeker;
	}
	
	
	public static JobSeekerDisplayDto NormalToDisplayDto(Jobseeker jobseeker) {
		return new JobSeekerDisplayDto(jobseeker.getUserId(), jobseeker.getFirstname(),
				jobseeker.getLastname(), jobseeker.getEposta(), jobseeker.getTcNo());
	}
	
}
