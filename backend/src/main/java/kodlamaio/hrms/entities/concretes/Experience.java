package kodlamaio.hrms.entities.concretes;

import java.time.LocalDate;
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

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="experiences")
@Data
@AllArgsConstructor
@NoArgsConstructor
//@JsonIgnoreProperties({"hibernateLazyInitializer","handler","resume"})
public class Experience {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="company_name")
	private String companyName;
	

	
	@Column(name="starting_date")
	private String startingDate;
	
	@Column(name="leaving_date")
	private String leavingDate;

	
	@ManyToOne()
	@JoinColumn(name="work_time_style_id")
	private WorkTimeStyle workTimeStyle;
	
	@ManyToOne()
	@JoinColumn(name="job_position_id")
	private JobPosition jobPosition;
	
	@ManyToOne()
	@JoinColumn(name="city_id")
	private City city;
	
	@ManyToOne()
	@JsonProperty(access = Access.WRITE_ONLY)
	@JoinColumn(name="resume_id")
	private Resume resume;
}
