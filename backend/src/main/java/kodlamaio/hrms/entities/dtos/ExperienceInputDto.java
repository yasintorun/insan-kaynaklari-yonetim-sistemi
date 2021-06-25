package kodlamaio.hrms.entities.dtos;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
 @AllArgsConstructor
 @NoArgsConstructor
public class ExperienceInputDto {
	private int userId;
	private int cityId;
	private int jobPositionId;
	private int workTimeStyleId;
	private String companyName;
	private String startingDate;
	private String leavingDate;

}
