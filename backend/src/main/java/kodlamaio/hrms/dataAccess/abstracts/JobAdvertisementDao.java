package kodlamaio.hrms.dataAccess.abstracts;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import kodlamaio.hrms.core.utilities.helpers.JobAdvertFilterOption;
import kodlamaio.hrms.entities.concretes.JobAdvertisement;

public interface JobAdvertisementDao extends JpaRepository<JobAdvertisement, Integer>{
	List<JobAdvertisement> getByIsActive(boolean isActive);
	List<JobAdvertisement> getByIsActiveAndReleaseDate(boolean isActive, Date releaseDate);
	
	JobAdvertisement getJobAdvertisementById(int id);
	
	List<JobAdvertisement> getByIsActiveAndEmployer_UserId(boolean isActive, int userId);
	
	List<JobAdvertisement> getByEmployer_userId(int userId);
	
	
	@Modifying
	@Query("Update JobAdvertisement ja set ja.isActive = :active where ja.id = :id")
	public void updateIsActive(@Param(value = "id") int id, @Param(value = "active") boolean isActive);
	/*
	@Query("From JobAdvertisement where isActive=:isActive and employer=:employerId")
	List<JobAdvertisement> getByIsActiveAndEmployer(boolean isActive, int employerId);
	*/
	
	@Query("Select j from JobAdvertisement j where ((:#{#filter.cityId}) IS NULL OR j.city.id IN (:#{#filter.cityId}))"
			+ "and ((:#{#filter.jobPositionId}) IS NULL OR j.jobPosition.id IN (:#{#filter.jobPositionId}))"
			+ "and ((:#{#filter.workStyleId}) IS NULL OR j.workStyle.id IN (:#{#filter.workStyleId}))"
			+ "and ((:#{#filter.workTimeStyleId}) IS NULL OR j.workTimeStyle.id IN (:#{#filter.workTimeStyleId}))"
			+ "and ((:#{#filter.userIdForFavorite}) = 0 OR j.id IN (select fj.jobAdvert.id from FavoriteJobAdvert fj where fj.userId = (:#{#filter.userIdForFavorite})))"
			+ "and j.isActive = TRUE")
	public Page<JobAdvertisement> getFilteringAndPage(@Param("filter") JobAdvertFilterOption filterOption, Pageable pageable);
}

//and j.jobPosition.id = :#{#filter.jobPositionId} and j.workStyle.id = :#{#filter.workStyleId} and j.workTimeStyle.id = :#{#filter.workTimeStyleId}


// and j.workStyle.id IN (:#{#filter.workStyleId}) and j.workTimeStyle.id IN (:#{#filter.workTimeStyleId})

//and (:#{#filter.jobPositionId} IS NULL OR j.jobPosition.id IN (:#{#filter.jobPositionId}))