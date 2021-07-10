package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.LanguageService;
import kodlamaio.hrms.core.utilities.converters.LanguageDtoConverter;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.LanguageDao;
import kodlamaio.hrms.entities.concretes.Language;
import kodlamaio.hrms.entities.dtos.display.LanguageDisplayDto;

@Service
public class LanguageManager implements LanguageService{

	private LanguageDao languageDao;
	
	@Autowired
	public LanguageManager(LanguageDao languageDao) {
		this.languageDao = languageDao;
	}
	
	@Override
	public DataResult<List<Language>> getAll() {
		return new SuccessDataResult<List<Language>>
		(this.languageDao.findAll(), "Diller listelendi!");
	}

	@Override
	public Result add(Language entity) {
		this.languageDao.save(entity);
		return new SuccessResult("Dil eklendi!");
	}

	@Override
	public DataResult<List<LanguageDisplayDto>> getByUserId(int userId) {
		return new SuccessDataResult<List<LanguageDisplayDto>>
		(LanguageDtoConverter.NormalToDisplayDto(this.languageDao.getByJobseeker_userId(userId)), "Dil bilgisi getirildi");
	}

	@Override
	public Result update(Language language) {
		Language current = this.languageDao.getOne(language.getId());
		
		current.setLanguageName(language.getLanguageName());
		
		current.setLevel(language.getLevel());
		
		try {
			this.languageDao.save(current);
			return new SuccessResult("Dil bilgisi güncellendi");
		} catch (Exception e) {
			return new ErrorResult("Hata: " + e.getMessage());
		}
		
	}

}
