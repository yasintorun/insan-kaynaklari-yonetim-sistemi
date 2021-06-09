package kodlamaio.hrms.entities.dtos;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DisplayJobAdvertisementDto {
	private String companyName;
	private String jobPositionName;
	private int maxPerson;
	private Date releaseDate;
	private Date deadline;
}
