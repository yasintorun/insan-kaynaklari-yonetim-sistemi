package kodlamaio.hrms.core.utilities.converters;

import java.util.ArrayList;
import java.util.List;

import kodlamaio.hrms.entities.concretes.Education;
import kodlamaio.hrms.entities.dtos.EducationDisplayDto;

public class EducationDtoConverter {
	public static EducationDisplayDto NormalToDisplayDto(Education edu) {
		return new EducationDisplayDto(edu.getSchool().getSchoolName(), edu.getDepartment().getDepartmentName(),
				edu.getStartingDate(), edu.getGraduationDate());
	}
	
	public static List<EducationDisplayDto> NormalToDisplayDto(List<Education> eduList) {
		List<EducationDisplayDto> dtoList = new ArrayList<EducationDisplayDto>();
		
		for(Education edu : eduList) {
			dtoList.add(NormalToDisplayDto(edu));
		}
		
		return dtoList;
	}
		
}
