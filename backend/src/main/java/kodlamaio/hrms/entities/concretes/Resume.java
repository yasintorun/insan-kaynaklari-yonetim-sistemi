package kodlamaio.hrms.entities.concretes;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="cv")

public class Resume {
	public Resume(String githubLink, String linkedinLink, String summary, int userId, int imageId) {
		this.github = githubLink;
		this.linkedin = linkedinLink;
		this.summary = summary;
		this.jobSeeker = new Jobseeker(userId);
		this.image = new Image(imageId);
	}

	public Resume(int resumeId) {
		this.id = resumeId;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "github")
	private String github;
	
	@Column(name = "linkedin")
	private String linkedin;
	

	@Column(name = "summary")
	private String summary;
	
	@Column(name = "birtdate")
	private LocalDate birtdate;
	
	@Column(name = "phone")
	private String phone;
	
	@ManyToOne()
	@JoinColumn(name="image_id")
	private Image image;
	
	@ManyToOne()
	@JoinColumn(name="gender_id")
	private Gender gender;
	
	@ManyToOne()
	@JoinColumn(name="city_id")
	private City city;
	
	@ManyToOne()
	@JoinColumn(name="nationality_id")
	private Nationality nationality;
	
	@JsonProperty(access = Access.READ_ONLY)
	@OneToMany(mappedBy = "resume")
	private List<Education> educations;

	@JsonProperty(access = Access.READ_ONLY)
	@OneToMany(mappedBy = "resume")
	private List<Experience> experiences;

	@JsonProperty(access = Access.READ_ONLY)
	@OneToMany(mappedBy = "resume")
	private List<Language> languages;

	@JsonProperty(access = Access.READ_ONLY)
	@OneToMany(mappedBy = "resume")
	private List<UserSkill> skills;
	

	@JsonProperty(access = Access.READ_ONLY)
	@OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
	private Jobseeker jobSeeker;
	
}
