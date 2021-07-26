package kodlamaio.hrms.core.utilities.helpers;

import java.util.ArrayList;
import java.util.List;

import java.util.Random;


//A B C D E F G H I K L M N O P Q R S T V W X Y Z    1 2 3 4 5 6 7 8 9 0
public class Encryption {
	private static String baseAlphabet = "0fvDienH2I91lwPAEap5OgWcXFsG4MxhuKLBZrbmkCN3yQ6TzY8oVR7dStq";

	private static String[] step1 = {"YasinTorun", "SevdeNisa", "Osmaniye", "Ankara"};

	public static String encrypt(Object obj) {
		String value = obj.toString();
		List<Integer> baseBytes = StringToByteArray(baseAlphabet);

		Random rand = new Random();
		int step1Val = rand.nextInt(step1.length);
		
		int stepNum = rand.nextInt(9) + 1;
	    //System.out.println("Artis E: " + stepNum);
	    
		value = step1Val + value + step1[step1Val];
	
		
		StringBuilder sb = new StringBuilder();
		
		sb.append(baseAlphabet.charAt(stepNum));
		
	    
	    //value = value.toUpperCase();
		
		for(int i = 0; i<value.length(); i++) {
			int indexVal = value.charAt(i); //65
			
			//System.out.println(i+ ": " +baseBytes.indexOf(indexVal));
			int newIndex = (baseBytes.indexOf(indexVal) + stepNum) % baseAlphabet.length();
			
			sb.append(baseAlphabet.charAt(newIndex));
		}
		
		return sb.toString();
	}
	
	public static String decrypt(String value) {
		//Örnek çözüm yöntemi
		// Ana: 10 -> baseAlphabet
		// artiş: 4 -> stepNum
		//değer: 8, 3 -> gerçek değer
		
		//index: 2 , 7 -> newIndex değeri
		
		//Değer: (index - artis + ana) % ana
		
		try {
		int stepNum = baseAlphabet.indexOf(value.charAt(0));
	    int step1Val = 0;
	    
		StringBuilder sb = new StringBuilder();
		for(int i = 1; i<value.length(); i++) {
		    int newIndex = baseAlphabet.indexOf(value.charAt(i));
			int indexVal = (newIndex + baseAlphabet.length() - stepNum) % baseAlphabet.length();
			char c = baseAlphabet.charAt(indexVal);
			if(i == 1) {
			    step1Val = Integer.parseInt(String.valueOf(c)); 
			    continue;
			}
			sb.append(c);
		}
		
		String str = sb.toString();
		str = str.substring(0, str.lastIndexOf(step1[step1Val]));
		return str;
		} catch (Exception e) {
			return "Hata oluştu.";
		}
	}
	
	public static List<Integer> StringToByteArray(String value) {
		List<Integer> bytes = new ArrayList<Integer>(); 
		for (char c : value.toCharArray())
			bytes.add((int)c);
		
		return bytes;
	}
	
}
