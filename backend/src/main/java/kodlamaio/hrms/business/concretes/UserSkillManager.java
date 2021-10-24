package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.UserSkillService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.UserSkillDao;
import kodlamaio.hrms.entities.concretes.Resume;
import kodlamaio.hrms.entities.concretes.Skill;
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

	@Override
	public DataResult<List<UserSkill>> getByUserId(int resumeId) {
		return new SuccessDataResult<List<UserSkill>>
		(this.userSkillDao.getByResumeId(resumeId), "Kullanıcı yetenekleri listelendi");
	}

	@Override
	public Result update(int resumeId, List<Integer> skillIds) {
		this.userSkillDao.deleteByResumeId(resumeId); //Öncelikle, eski kullanıcının tüm yeteneklerini silelim.
		try {
			for(int skillId : skillIds) { //Yeni eklediği tüm skilleri teker teker gezelim
				UserSkill skill = new UserSkill(0, new Resume(resumeId), new Skill(skillId)); //gelen skillId sahip userSkill oluşturalım.
				this.userSkillDao.save(skill); //Yeni yeteneği veritabanına kaydet.
			}
			return new SuccessResult("Kullanıcı yetenekleri güncellendi"); 
		} catch (Exception e) {
			return new ErrorResult("Hata: " + e.getMessage()); 
		}
	}

}
