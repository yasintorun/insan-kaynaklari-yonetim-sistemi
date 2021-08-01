package kodlamaio.hrms.core.utilities.adapters.concretes;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import kodlamaio.hrms.core.utilities.adapters.abstracts.ImageService;

@Service
public class CloudinaryImageAdapter implements ImageService{
	private Cloudinary cloudinary;

	@Autowired
    public CloudinaryImageAdapter() {
        this.cloudinary = new Cloudinary("cloudinary://786176693537948:gSrrVk-IWUOAWkR85lTMh2UxQyQ@dost");
    }
    
    @Override
    public Map upload(MultipartFile imageFile) throws IOException {
    	try {    		
			//multipartfile > file
			File file = new File(imageFile.getOriginalFilename());
			FileOutputStream fos = new FileOutputStream(file);
			fos.write(imageFile.getBytes());
			fos.close();
			Map result = cloudinary.uploader().upload(file, null);
			file.delete();

	    	return result;
    	} catch (Exception e) {
			return null;
		}
    }

    @Override
    public void delete(int id) throws IOException {
        cloudinary.uploader().destroy(id+"",ObjectUtils.emptyMap());
    }
}
