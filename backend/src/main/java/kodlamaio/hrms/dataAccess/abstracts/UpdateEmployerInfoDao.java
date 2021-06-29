package kodlamaio.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import kodlamaio.hrms.entities.concretes.UpdateEmployerInfo;

public interface UpdateEmployerInfoDao extends JpaRepository<UpdateEmployerInfo, Integer>{
	UpdateEmployerInfo getByEmployer_UserId(int userId);
}
