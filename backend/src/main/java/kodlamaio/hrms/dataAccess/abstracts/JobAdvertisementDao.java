package kodlamaio.hrms.dataAccess.abstracts;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import kodlamaio.hrms.entities.concretes.JobAdvertisement;

public interface JobAdvertisementDao extends JpaRepository<JobAdvertisement, Integer>{
	List<JobAdvertisement> getByIsActive(boolean isActive);
	List<JobAdvertisement> getByIsActiveAndReleaseDate(boolean isActive, Date releaseDate);
	
	JobAdvertisement getJobAdvertisementById(int id);
	
	List<JobAdvertisement> getByIsActiveAndEmployer_UserId(boolean isActive, int userId);
	
	
	
	@Modifying
	@Query("Update JobAdvertisement ja set ja.isActive = :active where ja.id = :id")
	public void updateIsActive(@Param(value = "id") int id, @Param(value = "active") boolean isActive);
	/*
	@Query("From JobAdvertisement where isActive=:isActive and employer=:employerId")
	List<JobAdvertisement> getByIsActiveAndEmployer(boolean isActive, int employerId);
	*/
}
