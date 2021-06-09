package kodlamaio.hrms.core.utilities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import kodlamaio.hrms.entities.concretes.JobAdvertisement;
import kodlamaio.hrms.entities.dtos.DisplayJobAdvertisementDto;
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
		return new JobAdvertisementDto(normal.getDescription(), normal.getMinSalary(), normal.getMaxSalary(),
									   normal.getMaxperson(), normal.getDeadline(), normal.isActive(), normal.getCity().getCityName(), 
									   normal.getJobPosition().getId(), normal.getEmployer().getUserId());
	}
	
	
	
	public static List<DisplayJobAdvertisementDto> DisplayNormalToDto(List<JobAdvertisement> normalList) {
		List<DisplayJobAdvertisementDto> dtoList = new ArrayList<DisplayJobAdvertisementDto>();
		
		for(int i = 0; i< normalList.size(); i++) {
			dtoList.add(DisplayNormalToDto(normalList.get(i)));
		}
		
		return dtoList;
	}

	public static DisplayJobAdvertisementDto DisplayNormalToDto(JobAdvertisement normal) {
		return new DisplayJobAdvertisementDto(normal.getEmployer().getCompanyName(), normal.getJobPosition().getJobName(), 
									   normal.getMaxperson(), normal.getReleaseDate(), normal.getDeadline());
	}
	
	
	
	public static JobAdvertisement DtoToNormal(JobAdvertisementDto dto) {
		return new JobAdvertisement(	
				dto.getDescription(), dto.getCityName(), dto.getMinSalary(), dto.getMaxSalary(), dto.getMaxPerson(), new Date(), dto.getDeadline(), false, dto.getJobPositionId(), dto.getEmployerId()
				);
	}
}
