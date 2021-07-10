package kodlamaio.hrms.core.utilities.converters;

import java.util.ArrayList;
import java.util.List;

import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.entities.concretes.Employer;
import kodlamaio.hrms.entities.concretes.UpdateEmployerInfo;
import kodlamaio.hrms.entities.dtos.display.EmployerDisplayDto;
import kodlamaio.hrms.entities.dtos.input.EmployerInputDto;

public class EmployerDtoConverter {
	public static EmployerDisplayDto NormalToDisplayDto(Employer employer) {
		return new EmployerDisplayDto(employer.getUserId(), employer.getCompanyName(), 
				employer.getEposta(), employer.getWebsite(),employer.getSummary(), employer.getPhone(), employer.isConfirmed(), true);
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
	
	public static EmployerInputDto NormalToInputDto(Employer normal) {
		return new EmployerInputDto(normal.getEposta(), normal.getPassword(), normal.getPassword(), null, null, null, null);
	}
	

	public static Employer UpdateEmployerToNormal(UpdateEmployerInfo e) {
		return new Employer(e.getCompanyName(), e.getWebsite(), e.getPhone(), e.getEmployer().isConfirmed(), e.getSummary(), e.getEmployer().getJobAdvertisements());
		
	}
	
	public static UpdateEmployerInfo InputDtoToUpdateEmployer(int userId, EmployerInputDto dto) {
		return new UpdateEmployerInfo(0, dto.getCompanyName(), dto.getEposta(), dto.getWebsite(), dto.getPhone(), dto.getSummary(), new Employer(userId));
	}

	
}
