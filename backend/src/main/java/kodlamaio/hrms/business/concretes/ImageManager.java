package kodlamaio.hrms.business.concretes;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import kodlamaio.hrms.business.abstracts.ImageService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorDataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
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
	    public DataResult<Image> uploadPhoto(MultipartFile file)  throws IOException {
	        Map result = imageService.upload(file);

	        System.out.println("\n\n" + result + "\n\n");
	        if(result != null) {
	        	try {
	        		Image image = new Image();
	        		image.setImagePath(result.get("url").toString());
	        		image.setImageTitle(result.get("original_filename").toString());
	        		Image dbImage = imageDao.save(image);
	        		
	        		return new SuccessDataResult<Image>(dbImage, "Fotograf yüklendi");
	        	} catch (Exception e) {
	    	        return new ErrorDataResult<Image>(null, "Fotoğraf yüklenirken hata oluştu.");
	        	}	        	
	        }
	        return new ErrorDataResult<Image>(null, "Fotoğraf yüklenemedi.");
	        
	    }

		@Override
		public void deleteImage(int id) throws IOException {
			this.imageService.delete(id);
		}
}
