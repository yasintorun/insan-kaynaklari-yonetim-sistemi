package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.UserService;
import kodlamaio.hrms.core.utilities.helpers.Encryption;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.entities.concretes.User;
import kodlamaio.hrms.entities.dtos.display.UserDisplayDto;
import kodlamaio.hrms.entities.dtos.input.UserInputDto;
import kodlamaio.hrms.core.utilities.results.Result;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {
	private UserService userService;

	@Autowired
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@GetMapping("/getAllUsers")
	public DataResult<List<User>> getAll() {
		return this.userService.getAll();
	}
	
	@GetMapping("/verify")
	public Result  Verify(@RequestParam String user, @RequestParam String verifyCode) {
		
		try {
			int userId = Integer.parseInt(Encryption.decrypt(user));
			verifyCode = Encryption.decrypt(verifyCode);
			return this.userService.Verify(userId, verifyCode);
		} catch (Exception e) {
			return new ErrorResult("Aktivasyon linki hatalı.");
		}
	}
	
	@PostMapping("/login")
	public DataResult<UserDisplayDto>  login(@RequestBody UserInputDto inputDto) {
		return this.userService.login(inputDto);
	}
}
