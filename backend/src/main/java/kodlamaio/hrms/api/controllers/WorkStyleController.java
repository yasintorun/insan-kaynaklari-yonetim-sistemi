package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.WorkStyleService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.entities.concretes.WorkStyle;

@RestController
@RequestMapping("/api/workStyle")
@CrossOrigin
public class WorkStyleController {
	private WorkStyleService workStyleServie;

	@Autowired
	public WorkStyleController(WorkStyleService workStyleServie) {
		this.workStyleServie = workStyleServie;
	}
	
	@GetMapping("/getAllWorkStyles")
	public DataResult<List<WorkStyle>> getAll() {
		return this.workStyleServie.getAll();
	}
	
}
