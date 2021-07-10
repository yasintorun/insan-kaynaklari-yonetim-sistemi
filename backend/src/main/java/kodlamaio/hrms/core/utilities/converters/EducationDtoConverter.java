package kodlamaio.hrms.core.utilities.converters;

import java.util.ArrayList;
import java.util.List;

import kodlamaio.hrms.entities.concretes.Department;
import kodlamaio.hrms.entities.concretes.Education;
import kodlamaio.hrms.entities.concretes.Jobseeker;
import kodlamaio.hrms.entities.concretes.School;
import kodlamaio.hrms.entities.dtos.display.EducationDisplayDto;
import kodlamaio.hrms.entities.dtos.input.EducationInputDto;

public class EducationDtoConverter {
	public static EducationDisplayDto NormalToDisplayDto(Education edu) {
		return new EducationDisplayDto(edu.getId(), edu.getJobseeker().getUserId(), edu.getSchool(), edu.getDepartment(),
				edu.getStartingDate(), edu.getGraduationDate(), edu.getSchoolType());
	}
	
	public static List<EducationDisplayDto> NormalToDisplayDto(List<Education> eduList) {
		List<EducationDisplayDto> dtoList = new ArrayList<EducationDisplayDto>();
		
		for(Education edu : eduList) {
			dtoList.add(NormalToDisplayDto(edu));
		}
		
		return dtoList;
	}
	
	//INPUT
	public static Education InputDtoToNormal(EducationInputDto dto) {
		return new Education(0, dto.getStartingDate(), dto.getGraduationDate(), dto.getSchoolType(), new School(dto.getSchoolId()), new Department(dto.getDepartmentId()), new Jobseeker(dto.getUserId()));
	}
		
}
