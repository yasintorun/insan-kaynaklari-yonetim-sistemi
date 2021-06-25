package kodlamaio.hrms.business.abstracts;

import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.entities.concretes.Personel;

public interface PersonelService extends BaseService<Personel>{
	DataResult<Personel> getPersonelByUserId(int id);
	DataResult<Personel> updatePersonel(Personel personel);
} 


