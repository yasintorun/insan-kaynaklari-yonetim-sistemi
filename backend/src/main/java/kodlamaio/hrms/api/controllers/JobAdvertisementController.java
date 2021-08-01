package kodlamaio.hrms.api.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.JobAdvertisementService;
import kodlamaio.hrms.core.utilities.helpers.JobAdvertFilterOption;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.entities.concretes.JobAdvertisement;
import kodlamaio.hrms.entities.dtos.display.JobAdvertisementDisplayDto;
import kodlamaio.hrms.entities.dtos.input.JobAdvertisementInputDto;

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
	public DataResult<List<JobAdvertisementDisplayDto>> getAll() {
		return this.jobAdvertisementService.getAllDisplay();
	}
	
	@PostMapping("/getAllJobAdvertisementWithPage")
	@ResponseBody
	public DataResult<List<JobAdvertisementDisplayDto>> getWithPage(int pageNo, int pageSize, @RequestBody JobAdvertFilterOption filterOption) {
		return this.jobAdvertisementService.getAll(pageNo, pageSize, filterOption);
	}
	
	@PostMapping("/add")
	public Result add(@RequestBody JobAdvertisementInputDto jobAdvertisement) {
		//System.out.println("\n\n\n"+jobAdvertisement.getCityId() +"\n\n\n");
		return this.jobAdvertisementService.add(jobAdvertisement);
	}
	
	@GetMapping("/getActiveJobAdvertisement")
	public DataResult<List<JobAdvertisementDisplayDto>> getByIsActive() {
		return this.jobAdvertisementService.getByIsActive(true);
	}
	
	
	@GetMapping("/getActiveAndDateJobAdvertisement")
	public DataResult<List<JobAdvertisementDisplayDto>> getByIsActiveAndReleaseDate(@RequestParam Date releaseDate) {
		
		return this.jobAdvertisementService.getByIsActiveAndReleaseDate(true, releaseDate);
	}
	
	@GetMapping("/getAllSortedJobAdvertisement")
	public DataResult<List<JobAdvertisementDisplayDto>> getAllSorted() {
		return this.jobAdvertisementService.getAllSorted();
	}

	@GetMapping("/getActiveCompanyJobAdvertisementList")
	public DataResult<List<JobAdvertisement>> getByIsActiveAndEmployer(boolean isActive, int employerId) {
		return this.jobAdvertisementService.getByIsActiveAndEmployer_UserId(isActive, employerId);
	}

	@GetMapping("/ChangeActive")
	public DataResult<JobAdvertisementInputDto> updateActive(int jobAdvertisementId, boolean isActive) {
		return this.jobAdvertisementService.updateActive(jobAdvertisementId, isActive);
	}
	
	@GetMapping("/getById")
	public DataResult<JobAdvertisementDisplayDto> getJobAdvertisementById(int id) {
		return this.jobAdvertisementService.getJobAdvertisementById(id);
	}
	
	@GetMapping("/getByEmployerUserId")
	public DataResult<List<JobAdvertisementDisplayDto>> getByEmployerUserId(int userId) {
		return this.jobAdvertisementService.getByEmployerUserId(userId);
	}
	
	@PostMapping("/changeActive")
	public Result updateIsActive(int id, boolean isActive) {
		this.jobAdvertisementService.updateIsActive(isActive, id);
		return new SuccessResult("başarılı");
	}
	
	@DeleteMapping("/deleteJobAdvert")
	public Result deleteJobAdvert(int id) {
		return this.jobAdvertisementService.deleteById(id);
	}
	
}
