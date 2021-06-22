package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.JobseekerService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Jobseeker;
import kodlamaio.hrms.entities.dtos.JobSeekerInputDto;

@RestController
@RequestMapping("/api/jobseekers")
@CrossOrigin
public class JobseekerController {
	private JobseekerService jobseekerService;

	@Autowired
	public JobseekerController(JobseekerService jobseekerService) {
		super();
		this.jobseekerService = jobseekerService;
	}
	
	@GetMapping("/getAllJobseekers")
	public DataResult<List<Jobseeker>> getAll() {
		return this.jobseekerService.getAll();
	}
	

	@PostMapping("/add")
	public Result add(@RequestBody JobSeekerInputDto jobseeker) {
		return this.jobseekerService.add(jobseeker);
	}
}
