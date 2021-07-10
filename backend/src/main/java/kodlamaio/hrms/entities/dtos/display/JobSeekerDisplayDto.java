package kodlamaio.hrms.entities.dtos.display;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobSeekerDisplayDto {
	private int userId;
	private String firstname;
	private String lastname;
	private String eposta;
	private String tcNo;
	
}
