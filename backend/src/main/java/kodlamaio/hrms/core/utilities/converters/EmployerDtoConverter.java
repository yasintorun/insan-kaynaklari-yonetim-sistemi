package kodlamaio.hrms.core.utilities.converters;

import java.util.ArrayList;
import java.util.List;

import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.entities.concretes.Employer;
import kodlamaio.hrms.entities.dtos.EmployerDisplayDto;
import kodlamaio.hrms.entities.dtos.EmployerInputDto;

public class EmployerDtoConverter {
	public static EmployerDisplayDto NormalToDisplayDto(Employer employer) {
		return new EmployerDisplayDto(employer.getUserId(), employer.getCompanyName(), 
				employer.getEposta(), employer.getWebsite(),employer.getSummary(), employer.getPhone());
	}
	
	public static List<EmployerDisplayDto> NormalToDisplayDto(List<Employer> empList) {
		List<EmployerDisplayDto> dtoList = new ArrayList<EmployerDisplayDto>();
		
		for(Employer emp : empList) {
			dtoList.add(NormalToDisplayDto(emp));
		}
		
		return dtoList;
	}
	
	
	//INPUT DTO
	public static Employer InputToNormal(EmployerInputDto inputDto) {
		
		if(!inputDto.getPassword().equals(inputDto.getPasswordCheck())) {
			return null;
		}
		
		Employer emp = new Employer(inputDto.getCompanyName(), inputDto.getWebsite(), inputDto.getPhone(), false, inputDto.getSummary(), null);
		emp.setEposta(inputDto.getEposta());
		emp.setPassword(inputDto.getPassword());
		return emp;
	}
	
}
