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
export default function JobExperienceInfo() {
    
    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        experienceService.getExperience().then(result => setExperiences(result.data.data))
        
    }, [experiences])

    const [isEdit, setIsEdit] = useState(false)

    const [index, setIndex] = useState(-1)

    const [isNew, setIsNew] = useState(false)

    const handleEditClick = (index) => {
        setIsNew(false)
        setIsEdit(true)
        setIndex(index)
        let val = experiences[index]
        let startingDate = Helper.OnlyYearAndMonth(val?.startingDate)
        let leavingDate = Helper.OnlyYearAndMonth(val?.leavingDate)
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

    const experienceService = new ExperienceService()

    const formik = useFormik({
        initialValues: {
            userId: 1,
        },
        onSubmit: values => {
            isNew
                ? experienceService.add(values).then(r => toast.success(r.data.message))
                : experienceService.update(values.id, values).then(r => toast.success(r.data.message))
                
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
                                    <Form.Field><JobPositionDropDown onChangeEvent={(event, data) => formik.setFieldValue("jobPositionId", data.value)} value={formik.values?.jobPositionId}/></Form.Field>
                                    <Form.Input fluid placeholder="Firma adı" label='Firma Adı*' name="companyName" onChange={formik.handleChange} value={formik.values?.companyName}/>
                                    <Form.Field><CityDropDown onChangeEvent={(event, data) => formik.setFieldValue("cityId", data.value)} value={formik.values?.cityId}/></Form.Field>
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field><WorkTimeStyleDropdown onChangeEvent={(event, data) => formik.setFieldValue("workTimeStyleId", data.value)} value = {formik.values?.workTimeStyleId}/></Form.Field>
                                    <Form.Input type="month" fluid placeholder="Başlama tarihi" label='Başlangıç tarihi*' name="startingDate" onChange={formik.handleChange} value = {formik.values?.startingDate}/>
                                    <Form.Input type="month" fluid placeholder="Çıkış tarihi" label='Çıkış tarihi*' name="leavingDate" onChange={formik.handleChange} value={formik.values?.leavingDate }/>
                                </Form.Group>

                                <Button positive type="submit" >Kaydet</Button>
                                <Button negative type="button" onClick={() => handleCancelEdit()}>Vazgeç</Button>
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
                                                    <YTInfoMessage info="Başlangıç tarihi" text={experience?.startingDate} />
                                                    <YTInfoMessage info="Bitiş tarihi" text={experience?.leavingDate} />
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
