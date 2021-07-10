package kodlamaio.hrms.entities.dtos.display;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserSkillDisplayDto {
	private int skillId;
	private int userId;
	private String skillName;
}
