package kodlamaio.hrms.business.abstracts;

import java.util.Date;
import java.util.List;

import kodlamaio.hrms.core.utilities.helpers.JobAdvertFilterOption;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.JobAdvertisement;

public interface JobAdvertisementService extends BaseService<JobAdvertisement>{
	
	DataResult<List<JobAdvertisement>> getAll(int pageNo, int pageSize, JobAdvertFilterOption filterOption);
	
	public DataResult<List<JobAdvertisement>> getAllDisplay();
	
	public DataResult<List<JobAdvertisement>> getByIsActive(boolean isActive);

	DataResult<List<JobAdvertisement>> getByIsActiveAndReleaseDate(boolean isActive, Date releaseDate);

	DataResult<List<JobAdvertisement>> getAllSorted();
	
	DataResult<List<JobAdvertisement>> getByIsActiveAndEmployer_UserId(boolean isActive, int employerId);
	
	DataResult<JobAdvertisement> updateActive(int jobAdvertisementId, boolean active);
	
	DataResult<JobAdvertisement> getJobAdvertisementById(int id);
	
	void updateIsActive(boolean isActive, int id);
	
	DataResult<List<JobAdvertisement>> getByEmployerUserId(int userId);

	Result deleteById(int id);
}
