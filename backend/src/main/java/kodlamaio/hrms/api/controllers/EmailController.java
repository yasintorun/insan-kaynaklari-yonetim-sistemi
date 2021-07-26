package kodlamaio.hrms.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.EmailService;
import kodlamaio.hrms.business.abstracts.UserRegisterService;
import kodlamaio.hrms.core.utilities.helpers.Encryption;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.entities.concretes.User;

@RestController
@RequestMapping("/api/mail")
@CrossOrigin
public class EmailController {
	private EmailService mailService;
	
	@Autowired
	public EmailController(EmailService mailService) {
		this.mailService = mailService;
	}
	
	@PostMapping("/sendRegisterMail")
	public Result sendRegisterEmail(@RequestBody User user) {
		return this.mailService.sendRegisterEmail(user);
	}
	
	
	
	

}
