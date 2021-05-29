package kodlamaio.hrms.business.abstracts;

import java.util.Date;
import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.JobAdvertisement;
import kodlamaio.hrms.entities.dtos.DisplayJobAdvertisementDto;
import kodlamaio.hrms.entities.dtos.JobAdvertisementDto;

public interface JobAdvertisementService extends BaseService<JobAdvertisement>{
	
	public Result add(JobAdvertisementDto entity);
	
	
	public DataResult<List<DisplayJobAdvertisementDto>> getByIsActive(boolean isActive);

	 DataResult<List<DisplayJobAdvertisementDto>> getByIsActiveAndReleaseDate(boolean isActive, Date releaseDate);

	
}