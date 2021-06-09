package kodlamaio.hrms.entities.concretes;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
		Jobseeker jobSeeker = new Jobseeker();
		jobSeeker.setUserId(userId);
		this.jobSeeker = jobSeeker;
		Image image = new Image();
		image.setId(imageId);
		this.image = image;
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
	
	
	
	@ManyToOne()
	@JoinColumn(name="image_id")
	private Image image;
	
	@ManyToOne()
	@JoinColumn(name="user_id")
	private Jobseeker jobSeeker;
	
}
