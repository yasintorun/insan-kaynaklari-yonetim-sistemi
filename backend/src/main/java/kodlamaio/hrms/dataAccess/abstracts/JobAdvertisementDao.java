package kodlamaio.hrms.dataAccess.abstracts;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kodlamaio.hrms.entities.concretes.JobAdvertisement;

public interface JobAdvertisementDao extends JpaRepository<JobAdvertisement, Integer>{
	List<JobAdvertisement> getByIsActive(boolean isActive);
	List<JobAdvertisement> getByIsActiveAndReleaseDate(boolean isActive, Date releaseDate);
	
	JobAdvertisement getJobAdvertisementById(int id);
	
	List<JobAdvertisement> getByIsActiveAndEmployer_UserId(boolean isActive, int userId);
	
	/*
	@Query("From JobAdvertisement where isActive=:isActive and employer=:employerId")
	List<JobAdvertisement> getByIsActiveAndEmployer(boolean isActive, int employerId);
	*/
}
