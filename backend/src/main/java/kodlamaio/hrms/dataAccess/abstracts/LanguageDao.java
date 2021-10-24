package kodlamaio.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import kodlamaio.hrms.entities.concretes.Language;

public interface LanguageDao extends JpaRepository<Language, Integer>{
	List<Language> getByResumeId(int userId);
	
	List<Language> getByResumeId(int userId, Sort sortable);
	
}
