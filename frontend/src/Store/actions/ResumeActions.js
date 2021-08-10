import ResumeService from "../../services/resumeService"
import UserLanguageService from "../../services/userLanguageService"
import Helper from "../../utilities/Helper"
import EducationService from '../../services/educationService'
import ExperienceService from '../../services/experienceService'
import SkillService from '../../services/SkillService'
import YTAlerts from "../../utilities/YTAlerts"

export const types = {
    GET_RESUME_SUCCESS: "GET_RESUME_SUCCESS",
    GET_RESUME_ERROR: "GET_RESUME_ERROR",
}

let resumeService = new ResumeService()
let languageService = new UserLanguageService()
let educationService = new EducationService()
let experienceService = new ExperienceService()
let skillService = new SkillService()

/*****************/
/*RESUME İŞLEMLERİ*/

/*Cv bilgisini al*/
export const getResume = (jobSeekerId) => async (dispatch) => {
    return await resumeService.getResumeById(jobSeekerId)
        .then(result => {
            dispatch({ type: types.GET_RESUME_SUCCESS, payload: result.data.data })
            return result.data.data
        })
        .catch(error => {
            dispatch({ type: types.GET_RESUME_ERROR, payload: error.data?.message })
            return error.data
        })
}

/*Cv bilgileri güncelleme*/
export const updateResume = (resumeVal) => async (dispatch) => {
    return await resumeService.update(resumeVal)
        .then(result => {
            BaseCallBackFunc(dispatch, result)
        })
}

/*CV Özet yazısını güncelle */
export const updateResumeSummary = (summaryVal) => async (dispatch) => {
    return await resumeService.updateResumeSummary(26, summaryVal)
        .then(result => {
            BaseCallBackFunc(dispatch, result)
        })
}

/*CV kullanıcı fotoğrafını güncelle */
export const updateResumePhoto = (photoFile) => async (dispatch) => {
    return await resumeService.updateResumePhoto(26, photoFile)
        .then(result => {
            BaseCallBackFunc(dispatch, result)
        })
}

/*CV kullanıcı fotoğrafını kaldır*/
export const deleteResumePhoto = () => async (dispatch) => {
    return await resumeService.deleteUserPhoto(26)
        .then(result => {
            BaseCallBackFunc(dispatch, result)
        })
}
/************************/

/********************** */
/*  LANGUAGE İŞLEMLERİ */

/*Dil ekleme */
export const addLanguage = (languageVal) => async (dispatch) => {
    return await languageService.add(languageVal)
        .then(result => {
            BaseCallBackFunc(dispatch, result)
        })
}

/*Dil Güncelleme */
export const updateLanguage = (languageVal) => async (dispatch) => {
    return await languageService.update(languageVal)
        .then((result) => {
            BaseCallBackFunc(dispatch, result)
        })
}
/*Dil Silme */
export const deleteLanguage = (lanugageID) => async (dispatch) => {
    return await languageService.delete(lanugageID)
        .then(result => {
            BaseCallBackFunc(dispatch, result)
        })
}
/**********************/


/******************** */
/*EDUCATION İŞLEMLERİ */

/*Eğitim bilgisi ekleme */
export const addEducation = (educationVal) => async (dispatch) => {
    return await educationService.add(educationVal)
        .then(result => {
            BaseCallBackFunc(dispatch, result, true)

        })
}

/*Eğitim bilgisi güncelleme */
export const updateEducation = (educationVal) => async (dispatch) => {
    return await educationService.update(educationVal)
        .then(result => {
            BaseCallBackFunc(dispatch, result)
        })
}

/*Eğitim bilgisi silme */
export const deleteEducation = (educationID) => async (dispatch) => {
    return await educationService.delete(educationID)
        .then(result => {
            BaseCallBackFunc(dispatch, result)
        })
}
/*********************/

/********************/
/*EXPERIENCE İŞLEMLERİ */

/*iş deneyimi ekleme */
export const addExperience = (experienceVal) => async (dispatch) => {
    return await experienceService.add(experienceVal)
        .then(result => {
            BaseCallBackFunc(dispatch, result)
        })
}

/*iş deneyimi güncelleme */
export const updateExperience = (experienceVal) => async (dispatch) => {
    return await experienceService.update(experienceVal)
        .then(result => {
            BaseCallBackFunc(dispatch, result)
        })
}

/*iş deneyimi silme */
export const deleteExperience = (experienceID) => async (dispatch) => {
    return await experienceService.delete(experienceID)
        .then(result => {
            BaseCallBackFunc(dispatch, result)
        })
}
/****************** */

/********************/
/*SKILL İŞLEMLERİ */

/*Yetenek kısmı diğerleri gibi değil. Burada sadece update işlemi bulunuyor. */
export const updateSkill = (skillVal) => async (dispatch) => {
    return await skillService.update(skillVal)
        .then(result => {
            BaseCallBackFunc(dispatch, result)
        })
}



//cv ile ilgili işlemler güncellendiginde eklendiginde silindiginde çalıştırılacak ana fonksiyon.
const BaseCallBackFunc = (dispatch, result, showAlert = true) => {
    if (showAlert) {
        if(!result.data.success) {
            YTAlerts.WarningAlert("Hata", result.data.message)
        } else {
            YTAlerts.InfoAlert("Başarılı", result.data.message)
        }
    }
    //Helper.ToastInfo(result.data.success, result.data.message)
    dispatch(getResume(26))
}

