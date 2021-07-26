package kodlamaio.hrms.entities.dtos.display;

import kodlamaio.hrms.entities.concretes.Authority;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDisplayDto {
	private int id;
	private String eposta;
	private Authority authority;
}
