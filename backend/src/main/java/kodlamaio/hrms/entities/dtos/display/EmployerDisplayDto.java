package kodlamaio.hrms.entities.dtos.display;


import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployerDisplayDto {
	private int id;
	private String companyName;
	private String eposta;
	private String website;
	private String summary;
	private String phone;
	private boolean confirmed;
	private boolean isUptoDate;	
}
