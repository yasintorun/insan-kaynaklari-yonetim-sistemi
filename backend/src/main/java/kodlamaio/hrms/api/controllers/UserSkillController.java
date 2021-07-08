package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.UserSkillService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Skill;
import kodlamaio.hrms.entities.concretes.UserSkill;
import kodlamaio.hrms.entities.dtos.UserSkillInputDto;

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
	
	@GetMapping("/getByUserId")
	public DataResult<List<UserSkill>> getByUserId(int userId) {
		return this.userSkillService.getByUserId(userId);
	}
	
	@PostMapping("/addUserSkill")
	@Transactional
	public Result add(@RequestBody UserSkill entity) {
		return this.userSkillService.add(entity);
	}
	
	
	@PutMapping("/update")
	@Transactional
	public Result update(@RequestBody UserSkillInputDto dto) {
		return this.userSkillService.update(dto);
	}
	
}
