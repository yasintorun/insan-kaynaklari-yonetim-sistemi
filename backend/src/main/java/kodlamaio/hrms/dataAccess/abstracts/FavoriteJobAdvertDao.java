package kodlamaio.hrms.dataAccess.abstracts;
import org.springframework.data.jpa.repository.JpaRepository;

import kodlamaio.hrms.entities.concretes.FavoriteJobAdvert;
public interface FavoriteJobAdvertDao  extends JpaRepository<FavoriteJobAdvert, Integer>{
	FavoriteJobAdvert getByJobAdvert_Id(int id);
	void deleteByJobAdvert_Id(int id);
}
