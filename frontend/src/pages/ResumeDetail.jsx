import React from 'react'
import MessageBox from '../components/MessageBox'
import PersonalInfo from '../components/Resume/PersonalInfo'
import EducationInfo from '../components/Resume/EducationInfo'
import JobExperienceInfo from '../components/Resume/JobExperienceInfo'
import SkillInfo from '../components/Resume/SkillInfo'
export default function ResumeDetail() {
    return (
        <div style={{ backgroundColor: '#e6e6e6' }}>
            <div className="w-50 m-auto message-block">
                <PersonalInfo />
                <JobExperienceInfo />
                <EducationInfo />
                <SkillInfo />
            </div>
        </div>
    )
}
