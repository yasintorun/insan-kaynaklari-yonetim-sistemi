package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.PersonelService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.PersonelDao;
import kodlamaio.hrms.entities.concretes.Personel;

@Service
public class PersonelManager implements PersonelService {

	private PersonelDao personelDao;
	
	@Autowired
	public PersonelManager(PersonelDao personelDao) {
		super();
		this.personelDao = personelDao;
	}
	
	@Override
	public DataResult<List<Personel>> getAll() {
		return new SuccessDataResult<List<Personel>>
		(this.personelDao.findAll());
	}

	@Override
	public Result add(Personel entity) {
		this.personelDao.save(entity);
		
		
		
		return new SuccessResult("Sistem Personeli eklendi");
	}

	
	
}
