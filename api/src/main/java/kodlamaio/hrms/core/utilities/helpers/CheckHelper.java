package kodlamaio.hrms.core.utilities.helpers;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CheckHelper {

	public static boolean emailCheck(String email) {
		String regex = "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$";
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(email);
		if(!matcher.matches()) {
			return false;
		}

		
		//Başka mail kontrolü olacaksa buraya yaz.
		
		return true;
	}
}
