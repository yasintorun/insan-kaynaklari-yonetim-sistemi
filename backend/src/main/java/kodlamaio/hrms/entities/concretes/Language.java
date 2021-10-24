package kodlamaio.hrms.entities.concretes;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name="languages")
//@JsonIgnoreProperties({"hibernateLazyInitializer","handler","resume"})
public class Language {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	//@Column(name="user_id")
	//private int userId;
	
	@Column(name="language_name")
	private String languageName;
	
	@Column(name="level")
	private int level;
	

	@ManyToOne()
	@JsonProperty(access = Access.WRITE_ONLY)
	@JoinColumn(name="resume_id")
	private Resume resume;
}
