package kodlamaio.hrms.core.utilities.helpers;

import java.util.*;
import java.text.SimpleDateFormat;
import java.time.*;

public class FormatHelper {
	public static java.time.LocalDate LocalToDate(java.util.Date date) {
		 return date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
	}
	
	public static LocalDate newDate() {
		 return LocalToDate(new Date());	
	}
	
	public static LocalDate OnlyYearAndMonth(String date) {
		int i = date.split("-").length;
		if(i < 2)
			date += "-01";
		return LocalDate.parse(date);
	}
}
