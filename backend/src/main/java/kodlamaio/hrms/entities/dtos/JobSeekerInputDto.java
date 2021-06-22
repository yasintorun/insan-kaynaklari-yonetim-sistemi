package kodlamaio.hrms.entities.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobSeekerInputDto {
	private String eposta;
	private String password;
	private String passwordCheck;
	private String firstname;
	private String lastname;
	private String tcNo;
}
