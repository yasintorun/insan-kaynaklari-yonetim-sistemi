package kodlamaio.hrms.entities.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployerInputDto {
	private String eposta;
	private String password;
	private String passwordCheck;
	private String companyName;
	private String website;
	private String phone;
	private String summary;
}
