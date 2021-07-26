package kodlamaio.hrms.business.concretes;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.EmailService;
import kodlamaio.hrms.business.abstracts.UserRegisterService;
import kodlamaio.hrms.core.utilities.helpers.Encryption;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.entities.concretes.User;
import kodlamaio.hrms.entities.concretes.UserRegister;

@Service
public class EmailManager implements EmailService{
	
	@Autowired
	private JavaMailSender mailSender;
	
	private UserRegisterService userRegisterService;
	
	
	
	
	public EmailManager(UserRegisterService userRegisterService) {
		super();
		this.userRegisterService = userRegisterService;
	}

	@Override
	public Result sendRegisterEmail(User user){
		
		UserRegister userRegister = this.userRegisterService.getRegister(user.getUserId());
		
		
		if(userRegister == null) {
			return new ErrorResult("Kullanıcı kaydı bulunmamaktadır.");
		}
		if(userRegister.isComfirmed()) {
			return new ErrorResult("Kayıt tamamlanmış.");
		}
		
		String code = Encryption.encrypt(userRegister.getActivisionCode());
		String id = Encryption.encrypt(user.getUserId());
		
		String verifyUrl = "http://localhost:8080/api/users/verify?user="+ id +"&verifyCode=" + code;
		
		String mailMessage = ""
				+ "<div style=\"width: 75%; margin: auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">"
				+ "        <h3 style=\"color: tomato;\">İKariyer</h3>"
				+ "        <div style=\"text-align: left;\">"
				+ "            Aramıza hoşgeldin, <br>"
				+ "            Sizi aramızda görmekten mutluluk duyuyoruz.<br>"
				+ "            Bize katılmak için son bir adım kaldı.<br>"
				+ "        </div>"
				+ "        <div>"
				+ "            <p>Üyeliğini doğrulamak için aşagıdaki bağlantıya tıklaman gerekiyor.</p>"
				+ "            <br>"
				+ "			   <a href="+verifyUrl+"> Üyeliğimi Doğrula</a>"
				+ "        </div>"
				+ "        <br>"
				+ "        <hr>"
				+ "        <br>"
				+ "        <div>"
				+ "            <p>"
				+ "                Eğer bağlantı butonu çalışmıyorsa bu linke tıklayınız. <br>"
				+ "                <a href="+verifyUrl+">"+verifyUrl+"</a>"
				+ "            </p>"
				+ "        </div>"
				+ "    </div>"
				+ "";
		
		return this.sendMail(user.getEposta(), "iKariyer üyelik doğrulama", mailMessage);
	}
	
	public Result sendMail(String to, String subject, String text) {
		MimeMessage message = mailSender.createMimeMessage();

		MimeMessageHelper helper;
		try {
			helper = new MimeMessageHelper(message, true);
			helper.setTo(to);
			helper.setSubject(subject);
			helper.setFrom("helper.ikariyer@gmail.com");
			
			helper.setText(text, true);
			
			mailSender.send(message);
			return new SuccessResult("Mail gönderildi.");
		} catch (MessagingException e) {
			return new ErrorResult("Mail Gönderilemedi. Hata: " + e.getMessage());
		}

	}

}
