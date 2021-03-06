package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.PersonelService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Personel;

@RestController
@RequestMapping("/api/personels")
@CrossOrigin
public class PersonelController {
	private PersonelService personelService;

	@Autowired
	public PersonelController(PersonelService personelService) {
		super();
		this.personelService = personelService;
	}
	
	@GetMapping("/getAllUsers")
	public DataResult<List<Personel>> getAll() {
		return this.personelService.getAll();
	}
	
	@GetMapping("/getPersonelByUserId")
	public DataResult<Personel> getByUserId(int id) {
		return this.personelService.getPersonelByUserId(id);
	}
	

	@PostMapping("/add")
	public Result add(@RequestBody Personel personel) {
		return this.personelService.add(personel);
	}
	
	
	@PostMapping("/update")
	public Result update(@RequestBody Personel personel) {
		return this.personelService.updatePersonel(personel);
	}
	
}	
