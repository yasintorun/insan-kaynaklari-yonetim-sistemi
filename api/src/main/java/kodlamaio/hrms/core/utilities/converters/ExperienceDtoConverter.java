package kodlamaio.hrms.core.utilities.converters;

import java.util.ArrayList;
import java.util.List;

import kodlamaio.hrms.entities.concretes.Experience;
import kodlamaio.hrms.entities.dtos.ExperienceDisplayDto;

public class ExperienceDtoConverter {
	public static ExperienceDisplayDto NormalToDisplayDto(Experience exp) {
		return new ExperienceDisplayDto(exp.getCompanyName(), exp.getJobPosition(),
					exp.getStartingDate(), exp.getLeavingDate());
	}
	
	public static List<ExperienceDisplayDto> NormalToDisplayDto(List<Experience> expList) {
		List<ExperienceDisplayDto> dtoList = new ArrayList<ExperienceDisplayDto>();
		
		for(Experience exp : expList) {
			dtoList.add(NormalToDisplayDto(exp));
		}
		
		return dtoList;
	}
}
