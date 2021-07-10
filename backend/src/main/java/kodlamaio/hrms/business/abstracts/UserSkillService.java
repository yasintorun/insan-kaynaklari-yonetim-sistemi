package kodlamaio.hrms.business.abstracts;

import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.UserSkill;
import kodlamaio.hrms.entities.dtos.input.UserSkillInputDto;

public interface UserSkillService extends BaseService<UserSkill>{

	DataResult<List<UserSkill>> getByUserId(int userId);

	Result update(UserSkillInputDto dto);

}
