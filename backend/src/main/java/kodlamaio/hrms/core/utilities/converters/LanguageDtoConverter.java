package kodlamaio.hrms.core.utilities.converters;

import java.util.ArrayList;
import java.util.List;

import kodlamaio.hrms.entities.concretes.Language;
import kodlamaio.hrms.entities.dtos.display.LanguageDisplayDto;

public class LanguageDtoConverter {
	public static LanguageDisplayDto NormalToDisplayDto(Language language) {
		return new LanguageDisplayDto(language.getId(), language.getJobseeker().getUserId(), language.getLanguageName(), language.getLevel());
	}
	
	public static List<LanguageDisplayDto> NormalToDisplayDto(List<Language> languages) {
		List<LanguageDisplayDto> dtoList = new ArrayList<LanguageDisplayDto>();
		
		for(Language lang : languages) {
			dtoList.add(NormalToDisplayDto(lang));
		}
		
		return dtoList;
	}
}
