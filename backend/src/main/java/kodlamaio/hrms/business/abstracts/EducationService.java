package kodlamaio.hrms.business.abstracts;

import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.entities.concretes.Education;
import kodlamaio.hrms.entities.dtos.EducationDisplayDto;
import kodlamaio.hrms.entities.dtos.EducationInputDto;

public interface EducationService extends BaseService<Education>{
	public DataResult<List<EducationDisplayDto>> getAllDisplay();
	
	public DataResult<List<EducationDisplayDto>> getAllSortedByGraduation();
	
	public DataResult<EducationDisplayDto> updateEducation(int id, EducationInputDto inputDto);
}
