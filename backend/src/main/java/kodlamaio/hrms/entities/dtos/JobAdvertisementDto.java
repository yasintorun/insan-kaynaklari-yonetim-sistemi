package kodlamaio.hrms.entities.dtos;

import java.util.Date;
import java.util.List;

import kodlamaio.hrms.entities.concretes.City;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobAdvertisementDto {
	private String description;
	private int minSalary;
	private int maxSalary;
	private int maxPerson;
	private Date deadline;
	private boolean isActive;
	private String cityName;
	private int jobPositionId;
	private int employerId;
}
