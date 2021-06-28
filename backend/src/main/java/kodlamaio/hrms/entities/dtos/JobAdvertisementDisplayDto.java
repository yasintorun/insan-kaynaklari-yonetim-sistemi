package kodlamaio.hrms.entities.dtos;	

import java.time.LocalDate;
import java.util.Date;

import kodlamaio.hrms.entities.concretes.City;
import kodlamaio.hrms.entities.concretes.JobPosition;
import kodlamaio.hrms.entities.concretes.WorkStyle;
import kodlamaio.hrms.entities.concretes.WorkTimeStyle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobAdvertisementDisplayDto {
	private int id;
	private EmployerDisplayDto employer;	
	private JobPosition jobPosition;
	private City city;
	private int maxPerson;
	private int minSalary;
	private int maxSalary;
	private LocalDate releaseDate;
	private LocalDate deadline;
	private WorkStyle workStyle;
	private WorkTimeStyle workTimeStyle;
	private String description;
	private boolean isActive;	
	private int totalJobAdvertSize;
}
