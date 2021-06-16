package kodlamaio.hrms.core.utilities.converters;

import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import kodlamaio.hrms.core.utilities.helpers.FormatHelper;
import kodlamaio.hrms.entities.concretes.JobAdvertisement;
import kodlamaio.hrms.entities.dtos.EmployerDisplayDto;
import kodlamaio.hrms.entities.dtos.JobAdvertisementDisplayDto;
import kodlamaio.hrms.entities.dtos.JobAdvertisementDto;

public class JobAdvertisementConverter {
	public static List<JobAdvertisementDto> NormalToDto(List<JobAdvertisement> normalList) {
		List<JobAdvertisementDto> dtoList = new ArrayList<JobAdvertisementDto>();
		
		for(int i = 0; i< normalList.size(); i++) {
			dtoList.add(NormalToDto(normalList.get(i)));
		}
		
		return dtoList;
	}

	public static JobAdvertisementDto NormalToDto(JobAdvertisement normal) {
		return new JobAdvertisementDto(normal.getId(), normal.getDescription(), normal.getMinSalary(), normal.getMaxSalary(),
									   normal.getMaxperson(), normal.getDeadline(), normal.isActive(), normal.getCity().getId(), 
									   normal.getJobPosition().getId(), normal.getEmployer().getUserId());
	}
	
	
	
	public static List<JobAdvertisementDisplayDto> DisplayNormalToDto(List<JobAdvertisement> normalList) {
		List<JobAdvertisementDisplayDto> dtoList = new ArrayList<JobAdvertisementDisplayDto>();
		
		for(int i = 0; i< normalList.size(); i++) {
			dtoList.add(DisplayNormalToDto(normalList.get(i)));
		}
		
		return dtoList;
	}

	public static JobAdvertisementDisplayDto DisplayNormalToDto(JobAdvertisement normal) {
		EmployerDisplayDto empDto = EmployerDtoConverter.NormalToDisplayDto(normal.getEmployer());
		return new JobAdvertisementDisplayDto(normal.getId(), empDto, normal.getJobPosition().getJobName(), normal.getCity().getCityName(), 
									   normal.getMaxperson(), normal.getMinSalary(), normal.getMaxSalary(), normal.getReleaseDate(), normal.getDeadline(),
									   normal.getWorkStyle().getName(), normal.getWorkTimeStyle().getName(), normal.getDescription(), normal.isActive());
	}
	
	
	
	public static JobAdvertisement DtoToNormal(JobAdvertisementDto dto) {
		return new JobAdvertisement(	
				dto.getDescription(), dto.getCityId(), dto.getMinSalary(), dto.getMaxSalary(), dto.getMaxPerson(),
				 FormatHelper.newDate() , dto.getDeadline(),
				false, dto.getJobPositionId(), dto.getEmployerId()
				);
	}
}
