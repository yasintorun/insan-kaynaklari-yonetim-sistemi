package kodlamaio.hrms.entities.dtos.input;

import java.time.LocalDate;

import kodlamaio.hrms.entities.concretes.User;
import kodlamaio.hrms.entities.dtos.display.JobSeekerDisplayDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResumeInputDto {
	private JobSeekerDisplayDto user;
	private int imageId;
	private int genderId;
	private int nationalityId;
	private String githubLink;
	private String linkedinLink;
	private String summary;
	private LocalDate birthDate;
	private String phone;
	
}
