package kodlamaio.hrms.business.abstracts;

import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Education;

public interface EducationService extends BaseService<Education>{
	public DataResult<List<Education>> getAllDisplay();
	
	public DataResult<List<Education>> getByUserId(int userId);
	
	public DataResult<List<Education>> getAllSortedByGraduation();
	
	public DataResult<Education> updateEducation(int id, Education education);

	public Result add(Education education);

	public Result delete(int id);
}
