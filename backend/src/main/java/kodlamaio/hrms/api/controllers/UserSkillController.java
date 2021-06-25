package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.UserSkillService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Skill;
import kodlamaio.hrms.entities.concretes.UserSkill;

@RestController
@RequestMapping("/api/skills")
@CrossOrigin
public class UserSkillController {
	private UserSkillService userSkillService;
	@Autowired
	public UserSkillController(UserSkillService userSkillService) {
		this.userSkillService = userSkillService;
	}
	
	@GetMapping("/getAllUserSkills")
	public DataResult<List<UserSkill>> getAll() {
		return this.userSkillService.getAll();
	}
	
	@PostMapping("/addUserSkill")
	public Result add(@RequestBody UserSkill entity) {
		return this.userSkillService.add(entity);
	}
	
	
}
