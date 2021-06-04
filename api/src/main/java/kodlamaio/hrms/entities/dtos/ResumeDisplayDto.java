package kodlamaio.hrms.entities.dtos;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResumeDisplayDto {
	private String firstName;
	private String lastName;
	private String schoolName;
	private String departmentName;
	private String githubLink;
	private String linkedinLink;
	private String summary;
	private List<LanguageDisplayDto> languages;
	private List<ExperienceDisplayDto> experiences;
	private List<SkillDisplayDto> skills;
}
