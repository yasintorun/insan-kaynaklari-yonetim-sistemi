package kodlamaio.hrms.entities.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResumeDisplayDto {
	private String firstName;
	private String lastName;
	private String schoolName;
	private String departmentName;
	private String githubLink;
	private String linkedinLink;
	private String summary;
}
