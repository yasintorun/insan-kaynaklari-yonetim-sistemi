package kodlamaio.hrms.business.abstracts;

import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.entities.concretes.Experience;
import kodlamaio.hrms.entities.dtos.ExperienceDisplayDto;

public interface ExperienceService extends BaseService<Experience>{
	public DataResult<List<ExperienceDisplayDto>> getAllDisplay();
	public DataResult<List<ExperienceDisplayDto>> getAllSorted();
}
