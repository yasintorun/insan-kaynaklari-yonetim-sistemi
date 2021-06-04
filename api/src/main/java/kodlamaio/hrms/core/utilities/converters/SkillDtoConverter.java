package kodlamaio.hrms.core.utilities.converters;

import java.util.ArrayList;
import java.util.List;

import kodlamaio.hrms.entities.concretes.Skill;
import kodlamaio.hrms.entities.dtos.SkillDisplayDto;

public class SkillDtoConverter {
	public static SkillDisplayDto NormalToDisplayDto(Skill skill) {
		return new SkillDisplayDto(skill.getSkillName());
	}
	
	public static List<SkillDisplayDto> NormalToDisplayDto(List<Skill> skills) {
		List<SkillDisplayDto> dtoList = new ArrayList<SkillDisplayDto>();
		
		for(Skill skill : skills) {
			dtoList.add(NormalToDisplayDto(skill));
		}
		
		return dtoList;
	}
}
