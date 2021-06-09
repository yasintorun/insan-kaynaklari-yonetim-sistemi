package kodlamaio.hrms.core.utilities.adapters.abstracts;

import java.io.IOException;

import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Image;

public interface ImageService {
	public Result upload(Image image) throws IOException;
}
