package kodlamaio.hrms.core.utilities.converters;

import java.util.ArrayList;
import java.util.List;

import kodlamaio.hrms.entities.concretes.Language;
import kodlamaio.hrms.entities.concretes.Resume;
import kodlamaio.hrms.entities.dtos.display.JobSeekerDisplayDto;
import kodlamaio.hrms.entities.dtos.display.ResumeDisplayDto;
import kodlamaio.hrms.entities.dtos.input.ResumeInputDto;

public class ResumeDtoConverter {
	
	//////////////
	//	INPUT DTO METHODLARI
	//////////////
	
	//Resume -> ResumeInputDto
	public static ResumeInputDto NormalToInputDto(Resume normal) {
		return new ResumeInputDto(JobSeekerDtoConverter.NormalToDisplayDto(normal.getJobSeeker()), 
				normal.getImage().getId(), normal.getGender().getId(),  normal.getNationality().getId(), normal.getGithub(), 
				normal.getLinkedin(), normal.getSummary(), normal.getBirtdate(), normal.getPhone(), normal.getCity().getId());
	}
	
	public List<ResumeInputDto> NormalToInputDto(List<Resume> resumeList) {
		List<ResumeInputDto> dtoList = new ArrayList<ResumeInputDto>();
		
		for(Resume resume : resumeList) {
			dtoList.add(NormalToInputDto(resume));
		}
		return dtoList;
	}
	
	//ResumeInputDto -> Resume
	public static Resume InputDtoToNormal(ResumeInputDto resumeDto) {
		return new Resume(resumeDto.getGithubLink(), resumeDto.getLinkedinLink(), resumeDto.getSummary(),
				resumeDto.getUser().getUserId(), resumeDto.getImageId());
	}
	
	public static List<Resume> InputDtoToNormal(List<ResumeInputDto> dtoList) {
		List<Resume> normalList = new ArrayList<Resume>();
		
		for(ResumeInputDto dto : dtoList) {
			normalList.add(InputDtoToNormal(dto));
		}
		
		return normalList;
	}
	
	
	
	//////////////
	//	DISPLAY DTO METHODLARI
	//////////////
	
	//Resume -> ResumeDisplayDto
	public static ResumeDisplayDto NormalToDisplayDto(Resume resume) {
		return new ResumeDisplayDto(resume.getId(), JobSeekerDtoConverter.NormalToDisplayDto(resume.getJobSeeker()),
				resume.getGithub(), resume.getLinkedin(), resume.getSummary(),
				resume.getBirtdate(), resume.getPhone(), resume.getGender(), resume.getCity(),
				resume.getNationality(), resume.getImage(),
				LanguageDtoConverter.NormalToDisplayDto(resume.getJobSeeker().getLanguages()),
				ExperienceDtoConverter.NormalToDisplayDto(resume.getJobSeeker().getExperiences()),
				UserSkillDtoConverter.NormalToDisplayDto(resume.getJobSeeker().getUserSkills()),
				EducationDtoConverter.NormalToDisplayDto(resume.getJobSeeker().getEducations()));
	}
	
	public static List<ResumeDisplayDto> NormalToDisplayDto(List<Resume> resumeList) {
		List<ResumeDisplayDto> dtoList = new ArrayList<ResumeDisplayDto>();
		
		for(Resume resume : resumeList) {
			dtoList.add(NormalToDisplayDto(resume));
		}
		
		return dtoList;
	}
	
}
