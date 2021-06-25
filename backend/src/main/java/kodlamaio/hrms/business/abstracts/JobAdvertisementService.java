package kodlamaio.hrms.business.abstracts;

import java.util.Date;
import java.util.List;

import kodlamaio.hrms.core.utilities.helpers.JobAdvertFilterOption;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.JobAdvertisement;
import kodlamaio.hrms.entities.dtos.JobAdvertisementDisplayDto;
import kodlamaio.hrms.entities.dtos.JobAdvertisementDto;

public interface JobAdvertisementService extends BaseService<JobAdvertisement>{
	
	DataResult<List<JobAdvertisementDisplayDto>> getAll(int pageNo, int pageSize, JobAdvertFilterOption filterOption);
	
	public Result add(JobAdvertisementDto entity);
	public DataResult<List<JobAdvertisementDisplayDto>> getAllDisplay();
	
	public DataResult<List<JobAdvertisementDisplayDto>> getByIsActive(boolean isActive);

	DataResult<List<JobAdvertisementDisplayDto>> getByIsActiveAndReleaseDate(boolean isActive, Date releaseDate);

	DataResult<List<JobAdvertisementDisplayDto>> getAllSorted();
	
	DataResult<List<JobAdvertisement>> getByIsActiveAndEmployer_UserId(boolean isActive, int employerId);
	
	DataResult<JobAdvertisementDto> updateActive(int jobAdvertisementId, boolean active);
	
	DataResult<JobAdvertisementDisplayDto> getJobAdvertisementById(int id);
	
	void updateIsActive(boolean isActive, int id);
}
