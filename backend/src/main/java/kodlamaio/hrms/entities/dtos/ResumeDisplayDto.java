package kodlamaio.hrms.entities.dtos;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResumeDisplayDto {
	private int userId;
	private String firstName;
	private String lastName;
	private String githubLink;
	private String linkedinLink;
	private String summary;
	private List<LanguageDisplayDto> languages;
	private List<ExperienceDisplayDto> experiences;
	private List<SkillDisplayDto> skills;
	private List<EducationDisplayDto> educations;
}
