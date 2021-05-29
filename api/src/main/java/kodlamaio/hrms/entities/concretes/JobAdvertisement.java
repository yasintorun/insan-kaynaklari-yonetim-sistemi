package kodlamaio.hrms.entities.concretes;


import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "job_advertisements")
public class JobAdvertisement {
	public JobAdvertisement(String description2, String city2, int minSalary2, int maxSalary2, int maxPerson2,
			Date releaseDate2, Date deadline2, boolean isActive2, int jobPositionId, int employerId) {
		this.description = description2;
		this.city = city2;
		this.minSalary = minSalary2;
		this.maxSalary = maxSalary2;
		this.maxperson = maxPerson2;
		this.releaseDate = releaseDate2;
		this.deadline = deadline2;
		this.isActive = isActive2;
		//this.jobPosition.setId(jobPositionId);
		this.setJobPosition(new JobPosition(jobPositionId, "", null));
		Employer emp = new Employer();
		emp.setUserId(employerId);
		
		this.setEmployer(emp);
	}


	@Id
	@Column(name="id")

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	
	@Column(name="job_description")
	private String description;

	@Column(name="city")
	private String city;

	@Column(name="min_salary")
	private int minSalary;

	@Column(name="max_salary")
	private int maxSalary;

	@Column(name="max_person")
	private int maxperson;
	
	@Column(name="release_date")
	private Date releaseDate;
	
	@Column(name="deadline")
	private Date deadline;
	
	@Column(name="is_active")
	private boolean isActive;
	
	
	@ManyToOne()
	@JoinColumn(name="employer_id")
	private Employer employer;
	
	
	@ManyToOne()
	@JoinColumn(name="job_position_id")
	private JobPosition jobPosition;
	
	
}
