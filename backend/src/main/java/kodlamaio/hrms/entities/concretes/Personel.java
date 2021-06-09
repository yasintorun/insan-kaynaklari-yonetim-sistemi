package kodlamaio.hrms.entities.concretes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = false)
@Entity
@Table(name="personels")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Personel extends User{

	@Column(name="firstname")
	private String firstname;
	
	@Column(name="lastname")
	private String lastname;
}
