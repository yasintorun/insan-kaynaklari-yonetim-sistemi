package kodlamaio.hrms.entities.concretes;


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
	@Id
	@Column(name="id")

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="definition")
	private String definition;

	@Column(name="city")
	private String city;

	@Column(name="min_salary")
	private int minSalary;

	@Column(name="max_salary")
	private int maxSalary;

	@Column(name="max_person")
	private int maxperson;
	
	@ManyToOne()
	@JoinColumn(name="job_position_id")
	private JobPosition jobPosition;
	
	@OneToOne(mappedBy = "jobAdvertisement", cascade = CascadeType.ALL)
	@PrimaryKeyJoinColumn
	private JobAdvertisementInfo info;
}
