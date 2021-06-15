package kodlamaio.hrms.api.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.JobAdvertisementService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.JobAdvertisement;
import kodlamaio.hrms.entities.dtos.DisplayJobAdvertisementDto;
import kodlamaio.hrms.entities.dtos.JobAdvertisementDto;

@RestController
@RequestMapping("/api/jobAdvertisements")
@CrossOrigin
public class JobAdvertisementController {
	private JobAdvertisementService jobAdvertisementService;
	
	@Autowired
	public JobAdvertisementController(JobAdvertisementService jobAdvertisementService) {
		this.jobAdvertisementService = jobAdvertisementService;
	}
	
	@GetMapping("/getAllJobAdvertisement")
	public DataResult<List<DisplayJobAdvertisementDto>> getAll() {
		return this.jobAdvertisementService.getAllDisplay();
	}
	
	@PostMapping("/add")
	public Result add(@RequestBody JobAdvertisementDto jobAdvertisement) {
		//System.out.println("\n\n\n"+jobAdvertisement.getCityId() +"\n\n\n");
		return this.jobAdvertisementService.add(jobAdvertisement);
	}
	
	@GetMapping("/getActiveJobAdvertisement")
	public DataResult<List<DisplayJobAdvertisementDto>> getByIsActive() {
		return this.jobAdvertisementService.getByIsActive(true);
	}
	
	
	@GetMapping("/getActiveAndDateJobAdvertisement")
	public DataResult<List<DisplayJobAdvertisementDto>> getByIsActiveAndReleaseDate(@RequestParam Date releaseDate) {
		
		return this.jobAdvertisementService.getByIsActiveAndReleaseDate(true, releaseDate);
	}
	
	@GetMapping("/getAllSortedJobAdvertisement")
	public DataResult<List<JobAdvertisementDto>> getAllSorted() {
		return this.jobAdvertisementService.getAllSorted();
	}

	@GetMapping("/getActiveCompanyJobAdvertisementList")
	public DataResult<List<JobAdvertisement>> getByIsActiveAndEmployer(boolean isActive, int employerId) {
		return this.jobAdvertisementService.getByIsActiveAndEmployer_UserId(isActive, employerId);
	}

	@GetMapping("/ChangeActive")
	public DataResult<JobAdvertisementDto> updateActive(int jobAdvertisementId) {
		return this.jobAdvertisementService.updateActive(jobAdvertisementId);
	}
	
	@GetMapping("/getById")
	public DataResult<DisplayJobAdvertisementDto> getJobAdvertisementById(int id) {
		return this.jobAdvertisementService.getJobAdvertisementById(id);
	}
	
}
