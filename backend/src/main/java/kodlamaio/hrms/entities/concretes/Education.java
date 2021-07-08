package kodlamaio.hrms.entities.concretes;

import java.util.Date;
import java.util.List;

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

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="educations")
public class Education {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="starting_date")
	private int startingDate;
	
	@Column(name="graduation_date")
	private int graduationDate;
	

	@Column(name="school_type")
	private String schoolType;
	
	@ManyToOne()
	@JoinColumn(name="school_id")
	private School school;
	
	@ManyToOne()
	@JoinColumn(name="department_id")
	private Department department;
	
	@ManyToOne()
	@JoinColumn(name="user_id")
	private Jobseeker jobseeker;
	
}
