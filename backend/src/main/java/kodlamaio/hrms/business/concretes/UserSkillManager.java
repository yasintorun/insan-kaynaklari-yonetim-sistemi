package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.UserSkillService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.dataAccess.abstracts.UserSkillDao;
import kodlamaio.hrms.entities.concretes.UserSkill;

@Service
public class UserSkillManager implements UserSkillService{

	private UserSkillDao userSkillDao;
	
	@Autowired
	public UserSkillManager(UserSkillDao userSkillDao) {
		super();
		this.userSkillDao = userSkillDao;
	}

	@Override
	public DataResult<List<UserSkill>> getAll() {
		return new SuccessDataResult<List<UserSkill>>
		(this.userSkillDao.findAll(), "Listelendi");
	}

	@Override
	public Result add(UserSkill entity) {
		return null;
	}

}
