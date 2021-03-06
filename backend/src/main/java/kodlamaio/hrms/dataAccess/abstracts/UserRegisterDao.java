package kodlamaio.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import kodlamaio.hrms.entities.concretes.UserRegister;

public interface UserRegisterDao extends JpaRepository<UserRegister, Integer>{
	UserRegister getByUserId(int userId);
}
