package kodlamaio.hrms.business.abstracts;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.FavoriteJobAdvert;
import kodlamaio.hrms.entities.dtos.FavoriteJobAdvertInputDto;

public interface FavoriteJobAdvertService extends BaseService<FavoriteJobAdvert>{
	Result add(FavoriteJobAdvertInputDto inputDto);
	DataResult<FavoriteJobAdvert> getByJobAdvert_Id(int id);
	
	Result deleteByJobAdverId(int id);
}
