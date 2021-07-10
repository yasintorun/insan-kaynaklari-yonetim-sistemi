package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.EducationService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Education;
import kodlamaio.hrms.entities.dtos.display.EducationDisplayDto;
import kodlamaio.hrms.entities.dtos.input.EducationInputDto;

@RestController
@RequestMapping("/api/educations")
@CrossOrigin
public class EducationController {
	private EducationService educationService;

	@Autowired
	public EducationController(EducationService educationService) {
		super();
		this.educationService = educationService;
	}
	
	@GetMapping("/getAllEduation")
	public DataResult<List<EducationDisplayDto>> getAll() {
		return this.educationService.getAllDisplay();
	}
	
	@GetMapping("/getByUserId")
	public DataResult<List<EducationDisplayDto>> getByUserId(int userId) {
		return this.educationService.getByUserId(userId);
	}
	
	
	@PostMapping("/add")
	public Result add(@RequestBody EducationInputDto education) {
		return this.educationService.add(education);
	}
	
	@PostMapping("/update")
	public Result update(int id, @RequestBody EducationInputDto education) {
		return this.educationService.updateEducation(id, education);
	}
	
	
	@GetMapping("/getAllSortedEduation")
	public DataResult<List<EducationDisplayDto>> getAllSortedByGraduation() {
		return this.educationService.getAllSortedByGraduation();
	}
	
	@DeleteMapping("/delete")
	public Result delete(int id) {
		return this.educationService.delete(id);
	}
	
	
}
