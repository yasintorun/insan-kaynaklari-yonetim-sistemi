package kodlamaio.hrms.entities.dtos.display;

import java.time.LocalDate;
import java.util.List;

import kodlamaio.hrms.entities.concretes.City;
import kodlamaio.hrms.entities.concretes.Education;
import kodlamaio.hrms.entities.concretes.Experience;
import kodlamaio.hrms.entities.concretes.Gender;
import kodlamaio.hrms.entities.concretes.Image;
import kodlamaio.hrms.entities.concretes.Jobseeker;
import kodlamaio.hrms.entities.concretes.Language;
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
	private int id;
	private Jobseeker user;
	private String githubLink;
	private String linkedinLink;
	private String summary;
	private LocalDate birtdate;
	private String phone;
	private Gender gender;
	private City city;
	private Nationality nationality;
	private Image image;
	private List<Language> languages;
	private List<Experience> experiences;
	private List<UserSkill> skills;
	private List<Education> educations;
}
