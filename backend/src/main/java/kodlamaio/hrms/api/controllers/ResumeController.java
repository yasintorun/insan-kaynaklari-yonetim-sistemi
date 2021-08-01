package kodlamaio.hrms.api.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import kodlamaio.hrms.business.abstracts.ImageService;
import kodlamaio.hrms.business.abstracts.ResumeService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Image;
import kodlamaio.hrms.entities.concretes.Resume;
import kodlamaio.hrms.entities.dtos.display.ResumeDisplayDto;
import kodlamaio.hrms.entities.dtos.input.ResumeInputDto;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin
public class ResumeController {
	private ResumeService resumeService;
	private ImageService imageService;
	public ResumeController(ResumeService resumeService, ImageService imageService) {
		this.resumeService = resumeService;
		this.imageService = imageService;
	}
	
	@GetMapping("/getAllResume")
	public DataResult<List<ResumeDisplayDto>> getAll() {

		return this.resumeService.getAllDisplay();
	}

	@GetMapping("/getById")
	public DataResult<ResumeDisplayDto> getById(int id) {
		return this.resumeService.getResumeById(id);
	}
	
	
	@PostMapping("/add")
	public Result add(@RequestBody ResumeInputDto resumeDto) {
		return this.resumeService.add(resumeDto);
	}
	
	
	@PostMapping("/update")
	public Result update(int id, @RequestBody ResumeInputDto resume) {
		return this.resumeService.updateResume(id, resume);
	}
	
	@PostMapping("/updateSummary")
	public Result updateSummary(int id,  @RequestBody ResumeInputDto resume) {
		return this.resumeService.updateResumeSummary(id, resume);
	}
	
	@PostMapping("/updatePhoto")
	public Result updatePhoto(int id,  @RequestBody MultipartFile photoFile) throws IOException {
		
		Image userImage = this.resumeService.getUserImage(id);
		
		if(userImage.getId() != 0) {
			try {
				this.imageService.deleteImage(userImage.getId());				
			} catch (Exception e) {
				return new ErrorResult("Fotoğraf güncellenemedi.");
			}
		}
		
		DataResult result = this.imageService.uploadPhoto(photoFile);
		
		if(result.isSuccess()) {
			try {
				Image image = (Image)result.getData();
				if(image == null) {
					return new ErrorResult("Fotograf yüklenemedi.");
				}
				return this.resumeService.updateResumePhoto(id, image);
			} catch (Exception e) {
				return new ErrorResult("Sistem hata verdi.");
			}
		}
		return result;
	}
	
	@DeleteMapping("/deleteUserPhoto")
	public Result deleteUserPhoto(int resumeId) {
		return this.resumeService.deleteUserPhoto(resumeId);
	}
}
