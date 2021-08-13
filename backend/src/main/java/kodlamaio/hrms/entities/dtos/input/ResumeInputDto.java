package kodlamaio.hrms.entities.dtos.input;

import java.time.LocalDate;

import kodlamaio.hrms.entities.concretes.Jobseeker;
import kodlamaio.hrms.entities.concretes.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResumeInputDto {
	private Jobseeker user;
	private int imageId;
	private int genderId;
	private int nationalityId;
	private String githubLink;
	private String linkedinLink;
	private String summary;
	private LocalDate birthDate;
	private String phone;
	private int cityId;	
	
}
