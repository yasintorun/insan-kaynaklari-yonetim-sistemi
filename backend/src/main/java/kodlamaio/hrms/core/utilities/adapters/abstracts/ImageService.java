package kodlamaio.hrms.core.utilities.adapters.abstracts;

import java.io.IOException;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;


public interface ImageService {
	public Map upload(MultipartFile file) throws IOException;
	public void delete(int id) throws IOException;
}
