package kodlamaio.hrms.core.utilities.converters;

import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import kodlamaio.hrms.core.utilities.helpers.FormatHelper;
import kodlamaio.hrms.entities.concretes.JobAdvertisement;
import kodlamaio.hrms.entities.dtos.display.EmployerDisplayDto;
import kodlamaio.hrms.entities.dtos.display.JobAdvertisementDisplayDto;
import kodlamaio.hrms.entities.dtos.input.JobAdvertisementInputDto;

public class JobAdvertisementConverter {
	public static int totalJobAdvertListSize = -1;
	public static List<JobAdvertisementInputDto> NormalToDto(List<JobAdvertisement> normalList) {
		List<JobAdvertisementInputDto> dtoList = new ArrayList<JobAdvertisementInputDto>();
		
		for(int i = 0; i< normalList.size(); i++) {
			dtoList.add(NormalToDto(normalList.get(i)));
		}
		
		return dtoList;
	}

	public static JobAdvertisementInputDto NormalToDto(JobAdvertisement normal) {
		return new JobAdvertisementInputDto(normal.getId(), normal.getDescription(), normal.getMinSalary(), normal.getMaxSalary(),
									   normal.getMaxperson(), normal.getDeadline(), normal.isActive(), normal.getCity().getId(), 
									   normal.getJobPosition().getId(), normal.getEmployer().getUserId(), normal.getWorkStyle().getId(), normal.getWorkStyle().getId());
	}
	
	
	
	public static List<JobAdvertisementDisplayDto> DisplayNormalToDto(List<JobAdvertisement> normalList) {
		List<JobAdvertisementDisplayDto> dtoList = new ArrayList<JobAdvertisementDisplayDto>();
		System.out.println("\n\n" + normalList.size());
		for(int i = 0; i< normalList.size(); i++) {
			dtoList.add(DisplayNormalToDto(normalList.get(i)));
		}
		
		return dtoList;
	}

	public static JobAdvertisementDisplayDto DisplayNormalToDto(JobAdvertisement normal) {
		
		EmployerDisplayDto empDto = EmployerDtoConverter.NormalToDisplayDto(normal.getEmployer());
		return new JobAdvertisementDisplayDto(normal.getId(), empDto, normal.getJobPosition(), normal.getCity(), 
									   normal.getMaxperson(), normal.getMinSalary(), normal.getMaxSalary(), normal.getReleaseDate(), normal.getDeadline(),
									   normal.getWorkStyle(), normal.getWorkTimeStyle(), normal.getDescription(), normal.isActive(), totalJobAdvertListSize);
	}
	
	
	
	public static JobAdvertisement DtoToNormal(JobAdvertisementInputDto dto) {
		return new JobAdvertisement(	
				dto.getDescription(), dto.getCityId(), dto.getMinSalary(), dto.getMaxSalary(), dto.getMaxPerson(),
				 FormatHelper.newDate() , dto.getDeadline(),
				false, dto.getJobPositionId(), dto.getEmployerId()
				);
	}
}
