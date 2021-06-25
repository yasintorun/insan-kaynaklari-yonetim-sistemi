package kodlamaio.hrms.entities.concretes;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	public JobAdvertisement(String description2, int city2, int minSalary2, int maxSalary2, int maxPerson2,
			LocalDate releaseDate2, LocalDate deadline2, boolean isActive2, int jobPositionId, int employerId) {
		this.description = description2;
		City city = new City();
		city.setId(city2);
		this.city = city;
		this.minSalary = minSalary2;
		this.maxSalary = maxSalary2;
		this.maxperson = maxPerson2;
		this.releaseDate = releaseDate2;
		this.deadline = deadline2;
		this.isActive = isActive2;
		//this.jobPosition.setId(jobPositionId);
		this.setJobPosition(new JobPosition(jobPositionId, "", null, null));
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

	//@Column(name="city")
	//private String city;

	@Column(name="min_salary")
	private int minSalary;

	@Column(name="max_salary")
	private int maxSalary;

	@Column(name="max_person")
	private int maxperson;
	
	@Column(name="release_date")
	private LocalDate releaseDate;
	
	@Column(name="deadline")
	private LocalDate deadline;
	
	@Column(name="is_active")
	private boolean isActive;
	
	
	@ManyToOne()
	@JoinColumn(name="employer_id")
	private Employer employer;
	
	
	@ManyToOne()
	@JoinColumn(name="job_position_id")
	private JobPosition jobPosition;
	

	@ManyToOne()
	@JoinColumn(name="city_id")
	private City city;
	
	
	@ManyToOne()
	@JoinColumn(name="working_style_id")
	private WorkStyle workStyle;
	
	@ManyToOne()
	@JoinColumn(name="work_time_style_id")
	private WorkTimeStyle workTimeStyle;
	
	///////////////////
	
	

	
}
