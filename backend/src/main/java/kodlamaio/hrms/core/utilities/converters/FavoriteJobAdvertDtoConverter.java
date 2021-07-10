package kodlamaio.hrms.core.utilities.converters;

import kodlamaio.hrms.entities.concretes.FavoriteJobAdvert;
import kodlamaio.hrms.entities.concretes.JobAdvertisement;
import kodlamaio.hrms.entities.concretes.Jobseeker;
import kodlamaio.hrms.entities.dtos.input.FavoriteJobAdvertInputDto;

public class FavoriteJobAdvertDtoConverter {
	public static FavoriteJobAdvert InputDtoToNormal(FavoriteJobAdvertInputDto dto) {
		return new FavoriteJobAdvert(0, new Jobseeker(dto.getUserId()), new JobAdvertisement(dto.getJobAdvertId()));
	}
}
