package kodlamaio.hrms.business.abstracts;

import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Language;

public interface LanguageService extends BaseService<Language>{

	DataResult<List<Language>> getByUserId(int userId);

	Result update(Language language);

	Result deleteLanguage(int id);

}
