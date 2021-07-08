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

import kodlamaio.hrms.business.abstracts.ExperienceService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Experience;
import kodlamaio.hrms.entities.dtos.ExperienceDisplayDto;
import kodlamaio.hrms.entities.dtos.ExperienceInputDto;

@RestController
@RequestMapping("/api/experiences")
@CrossOrigin
public class ExperienceController {
	private ExperienceService experienceService;

	@Autowired
	public ExperienceController(ExperienceService experienceService) {
		this.experienceService = experienceService;
	}
	
	@GetMapping("/getAllExperiences")
	public DataResult<List<ExperienceDisplayDto>> getAll() {
		return this.experienceService.getAllDisplay();
	}
	
	
	@GetMapping("/getByUserId")
	public DataResult<List<ExperienceDisplayDto>> getByUserId(int userId) {
		return this.experienceService.getByUserId(userId);
	}
	
	
	@GetMapping("/getAllSortedExperiences")
	public DataResult<List<ExperienceDisplayDto>> getAllSorted() {
		return this.experienceService.getAllSorted();
	}
	
	@PostMapping("/addExperience")
	public Result add(@RequestBody ExperienceInputDto experience) {
		return this.experienceService.add(experience);
	}
	
	@PostMapping("/updateExperience")
	public Result update(int id, @RequestBody ExperienceInputDto experience) {
		return this.experienceService.updateExperience(id, experience);
	}
	
	@DeleteMapping("/delete")
	public Result delete(int id) {
		return this.experienceService.delete(id);
	}
	
}
