package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.UpdateEmployerInfoService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.UpdateEmployerInfo;
import kodlamaio.hrms.entities.dtos.input.EmployerInputDto;

@RestController
@RequestMapping("/api/updateEmployerInfo")
@CrossOrigin
public class UpdateEmployerInfoController {
	private UpdateEmployerInfoService employerInfoService;

	@Autowired
	public UpdateEmployerInfoController(UpdateEmployerInfoService employerInfoService) {
		super();
		this.employerInfoService = employerInfoService;
	}
	
	
	@GetMapping("/getAll")
	public DataResult<List<UpdateEmployerInfo>> getAll() {
		return this.employerInfoService.getAll();
	}
	
	@GetMapping("/getByUserId")
	public DataResult<UpdateEmployerInfo> getByUserId(int userId) {
		return this.employerInfoService.getByUserId(userId);
	}
	
	
	@PostMapping("/add")
	public Result add(int userId, @RequestBody EmployerInputDto dto) {
		return this.employerInfoService.add(userId, dto);
	}
	
	
	@PostMapping("/confirmByAdmin")
	public Result confirmByAdmin(int userId) {
		return this.employerInfoService.confirmByAdmin(userId);
	}
}
