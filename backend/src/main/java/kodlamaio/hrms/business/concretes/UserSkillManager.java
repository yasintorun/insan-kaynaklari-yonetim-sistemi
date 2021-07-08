package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.UserSkillService;
import kodlamaio.hrms.core.utilities.converters.UserSkillDtoConverter;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.UserSkillDao;
import kodlamaio.hrms.entities.concretes.Skill;
import kodlamaio.hrms.entities.concretes.UserSkill;
import kodlamaio.hrms.entities.dtos.UserSkillInputDto;

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

	@Override
	public DataResult<List<UserSkill>> getByUserId(int userId) {
		return new SuccessDataResult<List<UserSkill>>
		(this.userSkillDao.getByJobseeker_userId(userId), "Kullanıcı yetenekleri listelendi");
	}

	@Override
	public Result update(UserSkillInputDto dto) {
		this.userSkillDao.deleteByJobseeker_userId(dto.getUserId()); //Öncelikle, eski kullanıcının tüm yeteneklerini silelim.
		try {
			for(int i = 0; i<dto.getSkillIds().size(); i++) { //Yeni eklediği tüm skilleri teker teker gezelim
				UserSkill skill = UserSkillDtoConverter.InputDtoToNormal(dto, i); //Dto dan normale çevirme
				this.userSkillDao.save(skill); //Yeni yeteneği veritabanına kaydet.
			}
			return new SuccessResult("Kullanıcı yetenekleri güncellendi"); 
		} catch (Exception e) {
			return new ErrorResult("Hata: " + e.getMessage()); 
		}
	}

}
