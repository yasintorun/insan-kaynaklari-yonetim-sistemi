package kodlamaio.hrms.core.utilities.helpers;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobAdvertFilterOption {
	private List<Integer> cityId;
	private List<Integer> jobPositionId;
	private List<Integer> workStyleId;
	private List<Integer> workTimeStyleId;
	private int userIdForFavorite;
}