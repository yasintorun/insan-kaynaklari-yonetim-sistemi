import {initialValues} from '../initialValues/resume'
import {types} from '../actions/ResumeActions'

const initialState = {
    resume: initialValues.resumeInitialValues,
    experiences: initialValues.experiencesInitialValues,
    educations: initialValues.educationsInitialValues,
    languages: initialValues.languagesInitialValues,
    skills: initialValues.skillsInitialValues,

}

export default function resumeReducer(state = initialState, {type, payload}) {
    switch (type) {
        case types.GET_RESUME_SUCCESS:
            state.resume = payload
            state.languages = payload?.languages
            state.experiences = payload?.experiences
            state.educations = payload?.educations
            state.skills = payload?.skills
            return {...state}
            
        default:
            return state
    }
}