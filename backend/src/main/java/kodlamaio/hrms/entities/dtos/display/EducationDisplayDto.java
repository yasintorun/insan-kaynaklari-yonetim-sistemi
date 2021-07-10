package kodlamaio.hrms.entities.dtos.display;

import java.util.Date;

import kodlamaio.hrms.entities.concretes.Department;
import kodlamaio.hrms.entities.concretes.School;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EducationDisplayDto {
	private int id;
	private int userId;
	private School school;
	private Department department;
	private int startingDate;
	private int graduationDate;
	private String schoolType;
}
