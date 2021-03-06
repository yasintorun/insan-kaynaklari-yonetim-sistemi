package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.FavoriteJobAdvertService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.FavoriteJobAdvert;

@RestController
@RequestMapping("/api/favoriteJobAdverts")
@CrossOrigin
public class FavoriteJobAdvertController {
	
	private FavoriteJobAdvertService favoriteJobAdvertService;

	@Autowired
	public FavoriteJobAdvertController(FavoriteJobAdvertService favoriteJobAdvertService) {
		super();
		this.favoriteJobAdvertService = favoriteJobAdvertService;
	}
	
	@GetMapping("/getAll")
	public DataResult<List<FavoriteJobAdvert>> getAll() {
		return this.favoriteJobAdvertService.getAll();
	}
	
	@GetMapping("/getFavorite")
	public DataResult<FavoriteJobAdvert> getFavorite(FavoriteJobAdvert favoriteJobAdvert) {
		return this.favoriteJobAdvertService.getFavorite(favoriteJobAdvert);
	}
	
	
	@GetMapping("/getByJobAdvertId")
	public DataResult<FavoriteJobAdvert> getByJobAdvert_Id(int id) {
		return this.favoriteJobAdvertService.getByJobAdvert_Id(id);
	}
	
	@PostMapping("/add")
	public Result add(@RequestBody FavoriteJobAdvert favoriteJobAdvert) {
		return this.favoriteJobAdvertService.add(favoriteJobAdvert);
	}
	
	@DeleteMapping("/deleteByJobAdvertId")
	@Transactional
	public Result deleteByJobAdvertId(int jobAdvertId) {
		return this.favoriteJobAdvertService.deleteByJobAdverId(jobAdvertId);
	}
	
	@DeleteMapping("/deleteById")
	@Transactional
	public Result deleteById(int id) {
		return this.favoriteJobAdvertService.delete(id);
	}
	
}
