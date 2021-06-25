package kodlamaio.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import kodlamaio.hrms.entities.concretes.Personel;

public interface PersonelDao extends JpaRepository<Personel, Integer>{
	Personel getPersonelByUserId(int id);
}
