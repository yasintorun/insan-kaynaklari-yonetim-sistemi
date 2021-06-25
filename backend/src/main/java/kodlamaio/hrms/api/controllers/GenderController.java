package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.GenderService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.entities.concretes.Gender;

@RestController
@RequestMapping("/api/genders")
@CrossOrigin
public class GenderController {
	private GenderService genderService;
	public GenderController(GenderService genderService) {
		this.genderService = genderService;
	}
	
	@GetMapping("/getAllCities")
	public DataResult<List<Gender>> getAll() {
		return this.genderService.getAll();
	}
 	

}
