import React, { useEffect, useState } from 'react'
import PersonalInfo from '../../components/Resume/PersonalInfo'
import EducationInfo from '../../components/Resume/EducationInfo'
import JobExperienceInfo from '../../components/Resume/JobExperienceInfo'
import SkillInfo from '../../components/Resume/SkillInfo'
import ResumeService from '../../services/resumeService'
import LanguageInfo from '../../components/Resume/LanguageInfo'
import ResumeSummaryInfo from '../../components/Resume/ResumeSummaryInfo'
import { useSelector } from 'react-redux'
export default function ResumeDetail() {
    return (
        <div style={{ backgroundColor: '#e6e6e6' }}>
            <div className="alert alert-info alert-dismissible fade show" role="alert">
                <span><strong>Sadece bir özgeçmişiniz olabilir.</strong> Aşağıdaki alanları özenle doldurunuz.</span>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div className="w-75 m-auto message-block">
                <PersonalInfo />
                <ResumeSummaryInfo />
                <JobExperienceInfo />
                <EducationInfo />
                <LanguageInfo />
                <SkillInfo />
            </div>
        </div>
    )
}
