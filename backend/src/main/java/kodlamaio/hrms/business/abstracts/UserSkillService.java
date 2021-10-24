package kodlamaio.hrms.business.abstracts;

import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.UserSkill;

public interface UserSkillService extends BaseService<UserSkill>{

	DataResult<List<UserSkill>> getByUserId(int userId);

	Result update(int resumeId, List<Integer> skillIds);

}
