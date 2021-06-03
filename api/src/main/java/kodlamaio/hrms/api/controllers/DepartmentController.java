package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.DepartmentService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Department;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController {
	private DepartmentService departmentService;
	
	public DepartmentController(DepartmentService departmentService) {
		this.departmentService = departmentService;
	}

	@GetMapping("/getAllResume")
	public DataResult<List<Department>> getAll() {
		return this.departmentService.getAll();
	}
	
	@PostMapping("/add")
	public Result add(@RequestBody Department department) {
		return this.departmentService.add(department);
	}
}
