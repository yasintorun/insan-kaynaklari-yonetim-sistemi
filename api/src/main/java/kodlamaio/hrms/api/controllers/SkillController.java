package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.SkillService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Skill;
import kodlamaio.hrms.entities.dtos.SkillDisplayDto;

@RestController
@RequestMapping("/api/skills")
public class SkillController {
	private SkillService skillService;

	@Autowired
	public SkillController(SkillService skillService) {
		super();
		this.skillService = skillService;
	}
	@GetMapping("/getAllSkills")
	public DataResult<List<SkillDisplayDto>> getAll() {
		return this.skillService.getAllDisplay();
	}
	
	@PostMapping("/addSkill")
	public Result add(@RequestBody Skill entity) {
		return this.skillService.add(entity);
	}
}
