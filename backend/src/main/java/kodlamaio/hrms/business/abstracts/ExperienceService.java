package kodlamaio.hrms.business.abstracts;

import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Experience;

public interface ExperienceService extends BaseService<Experience>{
	public DataResult<List<Experience>> getAllDisplay();
	public DataResult<List<Experience>> getAllSorted();
	public DataResult<Experience> updateExperience(int id, Experience exp);
	public Result add(Experience dto);
	public DataResult<Experience> getExperienceById(int id);
	public DataResult<List<Experience>> getByUserId(int userId);
	public Result delete(int id);
}
