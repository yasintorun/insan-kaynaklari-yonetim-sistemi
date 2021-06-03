package kodlamaio.hrms.core.utilities;

import java.util.ArrayList;
import java.util.List;

import kodlamaio.hrms.entities.concretes.Resume;
import kodlamaio.hrms.entities.dtos.ResumeDisplayDto;
import kodlamaio.hrms.entities.dtos.ResumeInputDto;

public class ResumeDtoConverter {
	
	//////////////
	//	INPUT DTO METHODLARI
	//////////////
	
	//Resume -> ResumeInputDto
	public static ResumeInputDto NormalToInputDto(Resume normal) {
		return new ResumeInputDto(normal.getJobSeeker().getUserId(), normal.getSchool().getId(), 
				normal.getDepartment().getId(), normal.getGithub(), 
				normal.getLinkedin(), normal.getSummary());
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
				resumeDto.getSchoolId(), resumeDto.getDepartmentId(), resumeDto.getUserId());
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
		return new ResumeDisplayDto(resume.getJobSeeker().getFirstname(), resume.getJobSeeker().getLastname(),
				resume.getSchool().getSchoolName(), resume.getDepartment().getDepartmentName(),
				resume.getGithub(), resume.getLinkedin(), resume.getSummary());
	}
	
	public static List<ResumeDisplayDto> NormalToDisplayDto(List<Resume> resumeList) {
		List<ResumeDisplayDto> dtoList = new ArrayList<ResumeDisplayDto>();
		
		for(Resume resume : resumeList) {
			dtoList.add(NormalToDisplayDto(resume));
		}
		
		return dtoList;
	}
	
}