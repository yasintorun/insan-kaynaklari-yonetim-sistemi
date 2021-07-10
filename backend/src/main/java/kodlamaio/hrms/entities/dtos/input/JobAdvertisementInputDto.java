package kodlamaio.hrms.entities.dtos.input;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import kodlamaio.hrms.entities.concretes.City;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobAdvertisementInputDto {
	private int id;
	private String description;
	private int minSalary;
	private int maxSalary;
	private int maxPerson;
	private LocalDate deadline;
	private boolean isActive;
	private int cityId;
	private int jobPositionId;
	private int employerId;
	private int workStyleId;
	private int workTimeStyleId;
}
