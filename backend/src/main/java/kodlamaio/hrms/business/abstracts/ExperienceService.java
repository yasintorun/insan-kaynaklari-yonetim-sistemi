package kodlamaio.hrms.business.abstracts;

import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Experience;
import kodlamaio.hrms.entities.dtos.display.ExperienceDisplayDto;
import kodlamaio.hrms.entities.dtos.input.ExperienceInputDto;

public interface ExperienceService extends BaseService<Experience>{
	public DataResult<List<ExperienceDisplayDto>> getAllDisplay();
	public DataResult<List<ExperienceDisplayDto>> getAllSorted();
	public DataResult<ExperienceDisplayDto> updateExperience(int id, ExperienceInputDto exp);
	public Result add(ExperienceInputDto dto);
	public DataResult<ExperienceDisplayDto> getExperienceById(int id);
	public DataResult<List<ExperienceDisplayDto>> getByUserId(int userId);
	public Result delete(int id);
}
