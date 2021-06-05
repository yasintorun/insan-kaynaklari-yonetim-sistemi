package kodlamaio.hrms.entities.dtos;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EducationDisplayDto {
	private String schoolName;
	private String departmentName;
	private int startingDate;
	private int graduationDate;
}
