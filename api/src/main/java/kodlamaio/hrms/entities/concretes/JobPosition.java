package kodlamaio.hrms.entities.concretes;

import javax.persistence.*;

import lombok.Data;


@Entity
@Table(name="job_positions")
@Data
public class JobPosition {
	
	@Id
	@GeneratedValue
	@Column(name="id")
	private int id;
	
	
	@Column(name="job_name")
	private String jobName;

	
	public JobPosition() {}


	public JobPosition(int id, String jobName) {
		super();
		this.id = id;
		this.jobName = jobName;
	}
	
	
}
