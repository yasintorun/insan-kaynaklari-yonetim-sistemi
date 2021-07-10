package kodlamaio.hrms.business.abstracts;

import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Education;
import kodlamaio.hrms.entities.dtos.display.EducationDisplayDto;
import kodlamaio.hrms.entities.dtos.input.EducationInputDto;

public interface EducationService extends BaseService<Education>{
	public DataResult<List<EducationDisplayDto>> getAllDisplay();
	
	public DataResult<List<EducationDisplayDto>> getByUserId(int userId);
	
	public DataResult<List<EducationDisplayDto>> getAllSortedByGraduation();
	
	public DataResult<EducationDisplayDto> updateEducation(int id, EducationInputDto inputDto);

	public Result add(EducationInputDto education);

	public Result delete(int id);
}
