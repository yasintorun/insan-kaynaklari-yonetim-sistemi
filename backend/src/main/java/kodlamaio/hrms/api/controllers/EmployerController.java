package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.EmployerService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Employer;
import kodlamaio.hrms.entities.dtos.input.EmployerInputDto;

@RestController
@RequestMapping("/api/employers")
@CrossOrigin
public class EmployerController {
	private EmployerService employerService;

	@Autowired
	public EmployerController(EmployerService employerService) {
		super();
		this.employerService = employerService;
	}
	
	@GetMapping("/getAllEmployer")
	public DataResult<List<Employer>> getAll() {
		return this.employerService.getAll();
	}
	
	
	@GetMapping("/getById")
	public DataResult<Employer> getById(int userId) {
		return this.employerService.getById(userId);
	}
	
	

	@PostMapping("/add")
	public Result add(@RequestBody EmployerInputDto employer) {
		System.out.println("\n\nTest \n\n");
		return this.employerService.add(employer);
	}
	
	
	
}
