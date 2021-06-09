package kodlamaio.hrms.core.utilities.adapters.concretes;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import kodlamaio.hrms.core.utilities.adapters.abstracts.ImageService;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.entities.concretes.Image;

@Service
public class CloudinaryImageAdapter implements ImageService{
	private Cloudinary cloudinary;

	@Autowired
    public CloudinaryImageAdapter() {
        this.cloudinary = new Cloudinary("cloudinary://786176693537948:gSrrVk-IWUOAWkR85lTMh2UxQyQ@dost");
    }
    
    @Override
    public Result upload(Image image) throws IOException {
        cloudinary.uploader().upload(image.getImagePath(), ObjectUtils.emptyMap());
        cloudinary.url().generate(image.getId()+"");
        return new SuccessResult();
    }

    public Result deleteImage(Image image) throws IOException {
        cloudinary.uploader().destroy(image.getId()+"",ObjectUtils.emptyMap());
        return new SuccessResult();
    }
}
