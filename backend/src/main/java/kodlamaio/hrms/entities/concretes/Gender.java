package kodlamaio.hrms.entities.concretes;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
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
@Table(name="gender")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","resumes"})
public class Gender {
	public Gender(int genderId) {
		this.id = genderId;
	}

	@Id
	@Column(name = "id")
	private int id;
	
	@Column(name = "name")
	private String name;
	
}
