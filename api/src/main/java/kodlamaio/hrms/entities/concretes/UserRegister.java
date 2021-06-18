package kodlamaio.hrms.entities.concretes;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="user_registers")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRegister {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="user_id")
	private int userId;
	
	@Column(name="activision_code")
	private String activisionCode;
	
	@Column(name="is_comfirmed")
	private boolean isComfirmed;
	
	@Column(name="comfirmed_date")
	private Date comfirmedDate;

	@Column(name="register_date")
	private Date registerDate;
}