package kodlamaio.hrms.entities.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResumeInputDto {
	private int userId;
	private int schoolId;
	private int departmentId;
	private String githubLink;
	private String linkedinLink;
	private String summary;
}
