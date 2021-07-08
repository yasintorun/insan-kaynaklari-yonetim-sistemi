package kodlamaio.hrms.entities.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EducationInputDto {
	private int userId;
	private int schoolId;
	private int departmentId;
	private int startingDate;
	private int graduationDate;
	private String schoolType;
}
