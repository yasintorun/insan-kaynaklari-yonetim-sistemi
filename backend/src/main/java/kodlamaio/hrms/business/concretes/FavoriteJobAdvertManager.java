package kodlamaio.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.FavoriteJobAdvertService;
import kodlamaio.hrms.core.utilities.converters.FavoriteJobAdvertDtoConverter;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.FavoriteJobAdvertDao;
import kodlamaio.hrms.entities.concretes.FavoriteJobAdvert;
import kodlamaio.hrms.entities.dtos.input.FavoriteJobAdvertInputDto;

@Service
public class FavoriteJobAdvertManager implements FavoriteJobAdvertService{
	private FavoriteJobAdvertDao favoriteJobAdvertDao;
	@Autowired
	public FavoriteJobAdvertManager(FavoriteJobAdvertDao favoriteJobAdvertDao) {
		this.favoriteJobAdvertDao = favoriteJobAdvertDao;
	}
	@Override
	public DataResult<List<FavoriteJobAdvert>> getAll() {
		return new SuccessDataResult<List<FavoriteJobAdvert>>
		(this.favoriteJobAdvertDao.findAll(), "Favoriler listelendi");
	}

	@Override
	public Result add(FavoriteJobAdvert entity) {
		this.favoriteJobAdvertDao.save(entity);
		return new SuccessResult("Favorilere Eklendi!");
	}
	@Override
	public Result add(FavoriteJobAdvertInputDto inputDto) {
		this.favoriteJobAdvertDao.save(FavoriteJobAdvertDtoConverter.InputDtoToNormal(inputDto));
		return new SuccessResult("Favorilere eklendi!");
	}
	@Override
	public DataResult<FavoriteJobAdvert> getByJobAdvert_Id(int id) {
		return new SuccessDataResult<FavoriteJobAdvert>
		(this.favoriteJobAdvertDao.getByJobAdvert_Id(id), "");
	}
	@Override
	public Result deleteByJobAdverId(int id) {
		this.favoriteJobAdvertDao.deleteByJobAdvert_Id(id);
		return new SuccessResult("Favorilerden çıkarıldı");
	}
	@Override
	public DataResult<FavoriteJobAdvert> getFavorite(FavoriteJobAdvertInputDto inputDto) {
		return new SuccessDataResult<FavoriteJobAdvert>
		(this.favoriteJobAdvertDao.getByJobseeker_userIdAndJobAdvert_id(inputDto.getUserId(), inputDto.getJobAdvertId()), "FAvoriler");
	}
	@Override
	public Result delete(int id) {
		this.favoriteJobAdvertDao.deleteById(id);
		return new SuccessResult("Favorilerden çıkarıldı");
	}
}
