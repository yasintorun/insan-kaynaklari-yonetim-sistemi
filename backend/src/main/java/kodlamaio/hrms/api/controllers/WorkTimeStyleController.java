package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.WorkTimeStyleService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.entities.concretes.WorkTimeStyle;

@RestController
@RequestMapping("/api/workTimeStyle")
@CrossOrigin
public class WorkTimeStyleController {
	private WorkTimeStyleService WorkTimeStyleServie;

	@Autowired
	public WorkTimeStyleController(WorkTimeStyleService WorkTimeStyleServie) {
		this.WorkTimeStyleServie = WorkTimeStyleServie;
	}
	
	@GetMapping("/getAllWorkTimeStyles")
	public DataResult<List<WorkTimeStyle>> getAll() {
		return this.WorkTimeStyleServie.getAll();
	}
	
}
