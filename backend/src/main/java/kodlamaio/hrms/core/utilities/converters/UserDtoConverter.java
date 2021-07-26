package kodlamaio.hrms.core.utilities.converters;

import kodlamaio.hrms.entities.concretes.User;
import kodlamaio.hrms.entities.dtos.display.UserDisplayDto;

public class UserDtoConverter {
	
	public static UserDisplayDto NormalToDisplayDto(User user) {
		return new UserDisplayDto(user.getUserId(), user.getEposta(), user.getAuthority());
	}
	
}
