package kodlamaio.hrms.core.utilities.converters;

import java.util.ArrayList;
import java.util.List;

import kodlamaio.hrms.entities.concretes.Jobseeker;
import kodlamaio.hrms.entities.concretes.Skill;
import kodlamaio.hrms.entities.concretes.UserSkill;
import kodlamaio.hrms.entities.dtos.display.UserSkillDisplayDto;
import kodlamaio.hrms.entities.dtos.input.UserSkillInputDto;

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
	
	//INPUT DTO
	
	
	public static UserSkill InputDtoToNormal(UserSkillInputDto inputDto, int index) {
		int skillId = inputDto.getSkillIds().get(index);
		return new UserSkill(0, new Jobseeker(inputDto.getUserId()), new Skill(skillId));
	}
	
}
