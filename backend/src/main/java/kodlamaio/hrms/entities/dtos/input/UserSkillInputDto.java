package kodlamaio.hrms.entities.dtos.input;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserSkillInputDto {
	private int resumeId;
	private List<Integer> skillIds;
}
