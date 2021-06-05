package kodlamaio.hrms.entities.concretes;


import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = false)
@Entity
@Table(name="jobseekers")
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","resumes", "languages", "experiences", "skills", "educations"})
public class Jobseeker extends User{
		
	@Column(name="firstname")
	private String firstname;
	
	@Column(name="lastname")
	private String lastname;
	
	@Column(name="tc_no")
	private String tcNo;
	

	@OneToMany(mappedBy = "jobSeeker")
	private List<Resume> resumes;
	

	@OneToMany(mappedBy = "jobseeker")
	private List<Language> languages;
	
	@OneToMany(mappedBy = "jobseeker")
	private List<Experience> experiences;
	
	@OneToMany(mappedBy = "jobseeker")
	private List<Skill> skills;
	

	@OneToMany(mappedBy = "jobseeker")
	private List<Education> educations;
}
