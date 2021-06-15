package kodlamaio.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import kodlamaio.hrms.entities.concretes.WorkTimeStyle;

public interface WorkTimeStyleDao extends JpaRepository<WorkTimeStyle, Integer>{

}
