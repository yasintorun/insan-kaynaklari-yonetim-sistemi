package kodlamaio.hrms.core.utilities.converters;

import java.util.ArrayList;
import java.util.List;

import kodlamaio.hrms.core.utilities.helpers.FormatHelper;
import kodlamaio.hrms.entities.concretes.City;
import kodlamaio.hrms.entities.concretes.Experience;
import kodlamaio.hrms.entities.concretes.JobPosition;
import kodlamaio.hrms.entities.concretes.Jobseeker;
import kodlamaio.hrms.entities.concretes.WorkTimeStyle;
import kodlamaio.hrms.entities.dtos.ExperienceDisplayDto;
import kodlamaio.hrms.entities.dtos.ExperienceInputDto;

public class ExperienceDtoConverter {
	public static ExperienceDisplayDto NormalToDisplayDto(Experience exp) {
		return new ExperienceDisplayDto(exp.getId(), exp.getJobseeker().getUserId(), exp.getCompanyName(), exp.getJobPosition(),
					exp.getStartingDate(), exp.getLeavingDate(),
					exp.getCity(), exp.getWorkTimeStyle());
	}
	
	public static List<ExperienceDisplayDto> NormalToDisplayDto(List<Experience> expList) {
		List<ExperienceDisplayDto> dtoList = new ArrayList<ExperienceDisplayDto>();
		
		for(Experience exp : expList) {
			dtoList.add(NormalToDisplayDto(exp));
		}
		
		return dtoList;
	}
	
	public static Experience InputDtoToNormal(ExperienceInputDto dto) {
		return new Experience(0, dto.getCompanyName(), FormatHelper.OnlyYearAndMonth(dto.getStartingDate()), FormatHelper.OnlyYearAndMonth(dto.getLeavingDate()), new WorkTimeStyle(dto.getWorkTimeStyleId()), new JobPosition(dto.getJobPositionId()), new City(dto.getCityId()), new Jobseeker(dto.getUserId()));
	}
	
}
