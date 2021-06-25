package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.GenderService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.dataAccess.abstracts.GenderDao;
import kodlamaio.hrms.entities.concretes.Gender;
@Service
public class GenderManager implements GenderService{
	private GenderDao genderDao;
	public GenderManager(GenderDao genderDao) {
		this.genderDao = genderDao;
	}
	@Override
	public DataResult<List<Gender>> getAll() {
		return new SuccessDataResult<List<Gender>>
		(this.genderDao.findAll(), "Cinsiyetler başarıyla listelendi");
	}

	@Override
	public Result add(Gender entity) {
		// TODO Auto-generated method stub
		return null;
	}

}
