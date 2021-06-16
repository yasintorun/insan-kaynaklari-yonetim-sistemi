package kodlamaio.hrms.entities.dtos;

import java.time.LocalDate;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobAdvertisementDisplayDto {
	private int id;
	private EmployerDisplayDto employer;	
	private String jobPositionName;
	private String cityName;
	private int maxPerson;
	private int minSalary;
	private int maxSalary;
	private LocalDate releaseDate;
	private LocalDate deadline;
	private String workStyle;
	private String workTimeStyle;
	private String description;
	private boolean isActive;
}
