package kodlamaio.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import kodlamaio.hrms.entities.concretes.UserSkill;

public interface UserSkillDao extends JpaRepository<UserSkill, Integer>{
	List<UserSkill> getByJobseeker_userId(int userId);
	
	//UserSkill getByJobseeker_userIdAndSkill_id(int userId, int skillId);
	
	void deleteByJobseeker_userId(int userId);
	
}
