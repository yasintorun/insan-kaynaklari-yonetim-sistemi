package kodlamaio.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import kodlamaio.hrms.entities.concretes.UserSkill;

public interface UserSkillDao extends JpaRepository<UserSkill, Integer>{

}
