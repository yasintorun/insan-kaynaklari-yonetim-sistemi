package kodlamaio.hrms.core.utilities.converters;

import java.util.ArrayList;
import java.util.List;

import kodlamaio.hrms.entities.concretes.UserSkill;
import kodlamaio.hrms.entities.dtos.UserSkillDisplayDto;

public class UserSkillDtoConverter {
	public static UserSkillDisplayDto NormalToDisplayDto(UserSkill skill) {
		return new UserSkillDisplayDto(skill.getSkill().getId(), skill.getJobseeker().getUserId(), skill.getSkill().getSkillName());
	}

	
	
	public static List<UserSkillDisplayDto> NormalToDisplayDto(List<UserSkill> skills) {
		List<UserSkillDisplayDto> dtoList = new ArrayList<UserSkillDisplayDto>();
		
		for(UserSkill skill : skills) {
			dtoList.add(NormalToDisplayDto(skill));
		}
		
		return dtoList;
		
	}
	
}
