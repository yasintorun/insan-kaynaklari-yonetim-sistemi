package kodlamaio.hrms.business.abstracts;

import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Language;
import kodlamaio.hrms.entities.dtos.LanguageDisplayDto;

public interface LanguageService extends BaseService<Language>{

	DataResult<List<LanguageDisplayDto>> getByUserId(int userId);

	Result update(Language language);

}
