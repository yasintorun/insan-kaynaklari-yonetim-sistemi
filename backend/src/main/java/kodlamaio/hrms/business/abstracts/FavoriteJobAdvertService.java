package kodlamaio.hrms.business.abstracts;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.FavoriteJobAdvert;

public interface FavoriteJobAdvertService extends BaseService<FavoriteJobAdvert>{
	Result add(FavoriteJobAdvert favoriteJobAdvert);
	DataResult<FavoriteJobAdvert> getByJobAdvert_Id(int id);
	
	Result deleteByJobAdverId(int id);
	
	Result delete(int id);
	
	DataResult<FavoriteJobAdvert> getFavorite(FavoriteJobAdvert favoriteJobAdvert);
}
