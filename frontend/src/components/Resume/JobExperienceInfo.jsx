import React, { useEffect, useState } from 'react'
import MessageBox from '../MessageBox'
import YTInfoMessage from '../../utilities/messages/YTInfoMessage'
import { useFormik } from 'formik'
import { FormGroup, Form, Button, Divider } from 'semantic-ui-react'
import CityDropDown from '../../utilities/dropdowns/CityDropDown'
import WorkTimeStyleDropdown from '../../utilities/dropdowns/WorkTimeStyleDropdown'
import JobPositionDropDown from '../../utilities/dropdowns/JobPositionDropdown'
import ExperienceService from '../../services/experienceService'
import Helper from '../../utilities/Helper'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { addExperience, deleteExperience, updateEducation, updateExperience } from '../../Store/actions/ResumeActions'
import YTAlerts from '../../utilities/YTAlerts'
import YTNumberDropdown from '../../utilities/YTNumberDropdown'
import * as Yup from 'yup';
import YTFormField from '../../utilities/messages/YTFormField'
export default function JobExperienceInfo() {
    const { experiences } = useSelector(state => state.resume)

    const dispatch = useDispatch()

    const [isEdit, setIsEdit] = useState(false)

    const [index, setIndex] = useState(-1)

    const [isNew, setIsNew] = useState(false)

    const handleEditClick = (index) => {
        setIsNew(false)
        setIsEdit(true)
        setIndex(index)
        let val = experiences[index]
        let startingDate = Helper.getMonthAndYear(val?.startingDate)
        let leavingDate = Helper.getMonthAndYear(val?.leavingDate)
        formik.setValues({
            id: val.id,
            userId: val.userId,
            cityId: val?.city.id,
            jobPositionId: val?.jobPosition.id,
            workTimeStyleId: val?.workTimeStyle.id,
            startingDate: startingDate,
            leavingDate: leavingDate,
            companyName: val?.companyName,
        })
    }
    const handleCancelEdit = () => {
        setIsEdit(false)
        setIsNew(false)
    }

    const addExperienceSchema = Yup.object().shape({
        cityId: Yup.string()
            .required(),
        jobPositionId: Yup.number()
            .required(),
        startingDate: Yup.date()
            .required(),
        leavingDate: Yup.date()
            .required(),
        workTimeStyleId: Yup.number()
            .required(),
        companyName: Yup.string()
            .required(),
        //email: Yup.string().email('Invalid email').required('Required'),
    });

    const formik = useFormik({
        initialValues: {
            userId: 1,
        },
        validationSchema: addExperienceSchema,
        onSubmit: values => {
            isNew
             ? dispatch(addExperience(values))
            //experienceService.add(values).then(r => toast.success(r.data.message))
              : dispatch(updateExperience(values))
            // experienceService.update(values).then(r => toast.success(r.data.message))

            handleCancelEdit()
        },
    });

    const handleAddClick = () => {
        setIsNew(true)
        setIsEdit(true)
        formik.setValues({
            userId: 1,
            cityId: '',
            jobPositionId: '',
            workTimeStyleId: '',
            startingDate: '',
            leavingDate: '',
            companyName: '',
        })
    }

    const handleDeleteClick = () => {
        YTAlerts.DeleteAlert("İş deneyimi", "Bu işlemi geri alamazsın!", () => dispatch(deleteExperience(formik.values.id))).then(() => {
            handleCancelEdit()
        })
        //experienceService.delete(formik.values.id).then(result => console.log(result.data))
    }

    return (
        <div >
            <MessageBox >
                <div>
                    İş deneyimleri
                    <Button className="ms-4" disabled={isEdit} color="vk" onClick={() => handleAddClick()}>Yeni iş deneyimi ekle</Button>
                </div>
                {
                    isEdit
                        ?
                        <div>
                            <Form onSubmit={formik.handleSubmit} size="small">
                                <Form.Group widths='equal'>
                                    <YTFormField value="jobPositionId" formik={formik}>
                                        <JobPositionDropDown onChangeEvent={(event, data) => formik.setFieldValue("jobPositionId", data.value)} value={formik.values?.jobPositionId} />
                                    </YTFormField>
                                    <YTFormField value="companyName" formik={formik}>
                                        <Form.Input fluid placeholder="Firma adı" label='Firma Adı*' name="companyName" onChange={formik.handleChange} value={formik.values?.companyName} />
                                    </YTFormField>
                                    <YTFormField value="cityId" formik={formik}>
                                        <CityDropDown onChangeEvent={(event, data) => formik.setFieldValue("cityId", data.value)} value={formik.values?.cityId} />
                                    </YTFormField>
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <YTFormField value="workTimeStyleId" formik={formik}>
                                        <WorkTimeStyleDropdown onChangeEvent={(event, data) => formik.setFieldValue("workTimeStyleId", data.value)} value={formik.values?.workTimeStyleId} />
                                    </YTFormField>
                                    <YTFormField value="startingDate" formik={formik}>
                                        <Form.Input type="month" fluid placeholder="Başlama tarihi" label='Başlangıç tarihi*' name="startingDate" onChange={formik.handleChange} value={formik.values?.startingDate} />

                                    </YTFormField>
                                    <YTFormField value="leavingDate" formik={formik}>
                                        <Form.Input type="month" fluid placeholder="Çıkış tarihi" label='Çıkış tarihi*' name="leavingDate" onChange={formik.handleChange} value={formik.values?.leavingDate} />

                                    </YTFormField>
                                </Form.Group>

                    
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Button positive type="submit" >Kaydet</Button>
                                        <Button negative type="button" onClick={() => handleCancelEdit()}>Vazgeç</Button>
                                    </div>
                                    {
                                        !isNew ?
                                            <div>
                                                <Button negative type="button" onClick={() => handleDeleteClick()}>Sil</Button>
                                            </div>
                                            : null
                                    }
                                </div>
                            </Form>
                        </div>
                        :
                        <div>


                            {experiences?.map((experience, index) => (
                                <div className="" key={index}>

                                    <div className="d-flex mb-3 mt-4 message-content" onClick={() => handleEditClick(index)}>
                                        <div className="w-25 d-block">
                                            <img src="https://aday-asset.mncdn.com/img/firma-logosuz.png" alt="pp" className="rounded w-100 img-fluid img-thumbnail" />
                                            <p className="mt-2 text-center">9 Ay</p>
                                        </div>
                                        <div className="w-100 ms-4">
                                            <div className="d-flex justify-content-between w-75">
                                                <div>
                                                    <YTInfoMessage info="Pozisyon" text={experience?.jobPosition.jobName} />
                                                    <YTInfoMessage info="Firma adı" text={experience?.companyName} />
                                                    <YTInfoMessage info="Şehir" text={experience?.city.cityName} />
                                                </div>
                                                <div>
                                                    <YTInfoMessage info="Çalışma şekli" text={experience?.workTimeStyle?.name} />
                                                    <YTInfoMessage info="Başlangıç tarihi" text={Helper.OnlyYearAndMonth(experience?.startingDate)} />
                                                    <YTInfoMessage info="Bitiş tarihi" text={Helper.OnlyYearAndMonth(experience?.leavingDate)} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {(index != experiences.length - 1) ? <hr /> : null}
                                </div>

                            ))
                            }
                        </div>
                }
            </MessageBox>
        </div>
    )
}
