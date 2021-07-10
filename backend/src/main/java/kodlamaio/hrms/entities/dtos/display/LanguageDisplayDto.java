package kodlamaio.hrms.entities.dtos.display;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LanguageDisplayDto {
	int id;
	int userId;
	private String languageName;
	private int level;
}
