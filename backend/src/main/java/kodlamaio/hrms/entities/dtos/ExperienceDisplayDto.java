package kodlamaio.hrms.entities.dtos;

import java.time.LocalDate;
import java.util.Date;

import kodlamaio.hrms.entities.concretes.City;
import kodlamaio.hrms.entities.concretes.JobPosition;
import kodlamaio.hrms.entities.concretes.WorkTimeStyle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExperienceDisplayDto {
	private int id;
	private int userId;
	private String companyName;
	private JobPosition jobPosition;
	private LocalDate startingDate;
	private LocalDate leavingDate;
	private City city;
	private WorkTimeStyle workTimeStyle;
}
