package kodlamaio.hrms.business.abstracts;

import javax.mail.MessagingException;

import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.User;

public interface EmailService {
	Result sendRegisterEmail(User user) ;

}
