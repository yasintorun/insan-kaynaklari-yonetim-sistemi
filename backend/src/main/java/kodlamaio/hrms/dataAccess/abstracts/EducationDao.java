package kodlamaio.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import kodlamaio.hrms.entities.concretes.Education;

public interface EducationDao extends JpaRepository<Education, Integer>{
	List<Education> getByJobseeker_userId(int userId, Sort sort);
}
