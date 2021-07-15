import React, { useEffect, useState } from 'react'
import PersonalInfo from '../../components/Resume/PersonalInfo'
import EducationInfo from '../../components/Resume/EducationInfo'
import JobExperienceInfo from '../../components/Resume/JobExperienceInfo'
import SkillInfo from '../../components/Resume/SkillInfo'
import ResumeService from '../../services/resumeService'
import LanguageInfo from '../../components/Resume/LanguageInfo'
import ResumeSummaryInfo from '../../components/Resume/ResumeSummaryInfo'
export default function ResumeDetail() {

    const [resume, setResume] = useState([])


    useEffect(() => {
        const resumeService = new ResumeService()
        resumeService.getResumeById(26).then(result => setResume(result.data.data))
    }, [])
    return (
        <div style={{ backgroundColor: '#e6e6e6' }}>
            <div className="alert alert-info alert-dismissible fade show" role="alert">
                <span><strong>Sadece bir özgeçmişiniz olabilir.</strong> Aşağıdaki alanları özenle doldurunuz.</span>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div className="w-75 m-auto message-block">

                <PersonalInfo resume={resume} />
                <ResumeSummaryInfo resume={resume} />
                <JobExperienceInfo />
                <EducationInfo />
                <LanguageInfo />
                <SkillInfo />
            </div>
        </div>
    )
}
