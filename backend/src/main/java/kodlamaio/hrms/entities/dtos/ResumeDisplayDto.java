package kodlamaio.hrms.entities.dtos;

import java.time.LocalDate;
import java.util.List;

import kodlamaio.hrms.entities.concretes.Gender;
import kodlamaio.hrms.entities.concretes.Jobseeker;
import kodlamaio.hrms.entities.concretes.Nationality;
import kodlamaio.hrms.entities.concretes.Skill;
import kodlamaio.hrms.entities.concretes.UserSkill;
import kodlamaio.hrms.entities.concretes.WorkTimeStyle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResumeDisplayDto {

	private JobSeekerDisplayDto user;
	private String githubLink;
	private String linkedinLink;
	private String summary;
	private LocalDate birtdate;
	private String phone;
	private Gender gender;
	private Nationality nationality;
	private List<LanguageDisplayDto> languages;
	private List<ExperienceDisplayDto> experiences;
	private List<UserSkillDisplayDto> skills;
	private List<EducationDisplayDto> educations;
}
