package kodlamaio.hrms.entities.dtos.input;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EducationInputDto {
	
	@NotNull(message = "Boş bırakılamaz")
	private int userId;
	
	@NotNull(message = "Boş bırakılamaz")
	private int schoolId;
	
	@NotNull(message = "Boş bırakılamaz")
	private int departmentId;
	
	@NotNull(message = "Boş bırakılamaz")
	private int startingDate;
	
	@NotNull(message = "Boş bırakılamaz")
	private int graduationDate;
	
	@NotNull(message = "Boş bırakılamaz")
	private String schoolType;
}
