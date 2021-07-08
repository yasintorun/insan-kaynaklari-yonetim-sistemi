package kodlamaio.hrms.entities.dtos;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserSkillInputDto {
	private int userId;
	private List<Integer> skillIds;
}
