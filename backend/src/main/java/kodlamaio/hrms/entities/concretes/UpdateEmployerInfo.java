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
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name="update_employer_info")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateEmployerInfo{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
		
	@Column(name="company_name")
	private String companyName;
	
	@Column(name="eposta")
	private String eposta;
	
	@Column(name="website")
	private String website;
	
	@Column(name="phone")
	private String phone;
	
	@Column(name="summary")
	private String summary;
	
	@ManyToOne()
	@JoinColumn(name="user_id")
	private Employer employer;
}
