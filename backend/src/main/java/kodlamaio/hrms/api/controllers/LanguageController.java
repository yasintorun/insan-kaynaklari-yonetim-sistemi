package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.LanguageService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Language;
import kodlamaio.hrms.entities.dtos.display.LanguageDisplayDto;

@RestController
@RequestMapping("/api/languages")
@CrossOrigin
public class LanguageController {
	private LanguageService languageService;

	@Autowired
	public LanguageController(LanguageService languageService) {
		this.languageService = languageService;
	}
	
	@GetMapping("/getAllLanguages")
	public DataResult<List<Language>> getAll() {
		return this.languageService.getAll();
	}
	
	@GetMapping("/getByUserId")
	public DataResult<List<LanguageDisplayDto>> getByUserId(int userId) {
		return this.languageService.getByUserId(userId);
	}
	
	@PostMapping("/add")
	public Result add(@RequestBody Language language) {
		return this.languageService.add(language);
	}
	
	@PutMapping("/update")
	public Result update(@RequestBody Language language) {
		return this.languageService.update(language);
	}
	
}
