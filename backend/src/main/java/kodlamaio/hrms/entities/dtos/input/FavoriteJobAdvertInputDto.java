package kodlamaio.hrms.entities.dtos.input;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FavoriteJobAdvertInputDto {
	private int userId;
	private int jobAdvertId;
}
