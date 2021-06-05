package kodlamaio.hrms.business.abstracts;

import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.entities.concretes.Skill;
import kodlamaio.hrms.entities.dtos.SkillDisplayDto;

public interface SkillService extends BaseService<Skill>{
	public DataResult<List<SkillDisplayDto>> getAllDisplay();
}
