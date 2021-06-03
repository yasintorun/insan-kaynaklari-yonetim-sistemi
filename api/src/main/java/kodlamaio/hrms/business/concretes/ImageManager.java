package kodlamaio.hrms.business.concretes;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.ImageService;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.ImageDao;
import kodlamaio.hrms.entities.concretes.Image;

@Service
public class ImageManager implements ImageService {

	 	private kodlamaio.hrms.core.utilities.adapters.abstracts.ImageService imageService;
	    private ImageDao imageDao;

	    @Autowired
	    public ImageManager(kodlamaio.hrms.core.utilities.adapters.abstracts.ImageService imageService,ImageDao imageDao) {
	        this.imageService = imageService;
	        this.imageDao = imageDao;
	    }

	    @Override
	    public Result uploadPhoto(Image image) throws IOException {
	        imageDao.save(image);
	        imageService.upload(image);
	        return new SuccessResult("Fotograf yüklendi");
	    }
}
