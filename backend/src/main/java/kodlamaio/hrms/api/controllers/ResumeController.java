package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.ResumeService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Resume;
import kodlamaio.hrms.entities.dtos.ResumeDisplayDto;
import kodlamaio.hrms.entities.dtos.ResumeInputDto;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin
public class ResumeController {
	private ResumeService resumeService;

	public ResumeController(ResumeService resumeService) {
		this.resumeService = resumeService;
	}
	
	@GetMapping("/getAllResume")
	public DataResult<List<ResumeDisplayDto>> getAll() {

		return this.resumeService.getAllDisplay();
	}

	@GetMapping("/getById")
	public DataResult<ResumeDisplayDto> getById(int id) {
		return this.resumeService.getResumeById(id);
	}
	
	
	@PostMapping("/add")
	public Result add(@RequestBody ResumeInputDto resumeDto) {
		return this.resumeService.add(resumeDto);
	}
	
	
	@PostMapping("/update")
	public Result update(int id, @RequestBody ResumeInputDto resume) {
		return this.resumeService.updateResume(id, resume);
	}
	
	@PostMapping("/updateSummary")
	public Result updateSummary(int id,  @RequestBody ResumeInputDto resume) {
		return this.resumeService.updateResumeSummary(id, resume);
	}
	
}
