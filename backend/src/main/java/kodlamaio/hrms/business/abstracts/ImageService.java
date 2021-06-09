package kodlamaio.hrms.business.abstracts;

import java.io.IOException;

import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Image;

public interface ImageService {
	Result uploadPhoto(Image image) throws IOException;
}
