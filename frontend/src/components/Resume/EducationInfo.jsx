import React, { useEffect, useState } from 'react'
import MessageBox from '../MessageBox'
import YTInfoMessage from '../../utilities/messages/YTInfoMessage'
import { useFormik } from 'formik'
import EducationService from '../../services/educationService'
import SchoolDropDown from '../../utilities/dropdowns/SchoolDropdown'
import DepartmentDropDown from '../../utilities/dropdowns/DepartmentDropdown'
import { FormGroup, Form, Button, Dropdown, FormField } from 'semantic-ui-react'
import CityDropDown from '../../utilities/dropdowns/CityDropDown'
import WorkTimeStyleDropdown from '../../utilities/dropdowns/WorkTimeStyleDropdown'
import JobPositionDropDown from '../../utilities/dropdowns/JobPositionDropdown'
import SchoolTypeDropdown from '../../utilities/dropdowns/SchoolTypeDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { addEducation, deleteEducation, updateEducation, updateLanguage } from '../../Store/actions/ResumeActions'
import Helper from '../../utilities/Helper'
import YTNumberDropdown from '../../utilities/YTNumberDropdown'
import YTAlerts from '../../utilities/YTAlerts'
import YTFormField from '../../utilities/messages/YTFormField'
import * as Yup from 'yup';
export default function EducationInfo() {
    const { educations } = useSelector(state => state.resume)

    const [isEdit, setIsEdit] = useState(false)
    const [isNew, setIsNew] = useState(false)

    const dispatch = useDispatch()

    const handleEditClick = (index) => {
        setIsNew(false)
        setIsEdit(true)

        let val = educations[index]

        formik.setValues({
            id: val?.id,
            userId: 1,
            schoolId: val?.school?.id,
            departmentId: val?.department?.id,
            startingDate: val?.startingDate,
            graduationDate: val?.graduationDate,
            schoolType: val?.schoolType,
        })
    }

    const handleAddClick = () => {
        setIsNew(true)
        setIsEdit(true)
        formik.setValues({
            id: 0,
            userId: 1,
            schoolId: '',
            departmentId: '',
            startingDate: '',
            graduationDate: '',
            schoolType: '',
        })
    }

    const handleDeleteClick = () => {
        //educationService.delete(formik.values.id).then(result => console.log(result.data))
        //Helper.DeleteModalBox("Eğitim bilgisi", "Bu işlem geri alınamaz!", () => dispatch(deleteEducation(formik.values.id)))
        YTAlerts.DeleteAlert("Eğitim bilgisi", "Bu işlem geri alınamaz!", () => dispatch(deleteEducation(formik.values.id)))
        handleCancelEdit()
    }

    const handleCancelEdit = () => {
        setIsEdit(false)
        setIsNew(false)
    }

    const educationService = new EducationService()

    const addEducationSchema = Yup.object().shape({
        schoolType: Yup.string()
            .required(),
        schoolId: Yup.number()
            .required(),
        departmentId: Yup.number()
            .required(),
        startingDate: Yup.number()
            .required(),
        graduationDate: Yup.number()
            .required(),
        //email: Yup.string().email('Invalid email').required('Required'),
    });

    const formik = useFormik({
        initialValues: {
        },
        validationSchema: addEducationSchema,
        onSubmit: values => {
            values = { ...values, userId: 1 }
            isNew
                ? dispatch(addEducation(values))
                //educationService.add(values).then(result => console.log(result.data.message))
                : dispatch(updateEducation(values))
            //educationService.update(values.id, values).then(r => console.log(r.data.message))
            console.log(values)
            // handleCancelEdit()
        },
    });

    const options = [
        { key: 1, text: 'Ön Lisans', value: 1 },
        { key: 2, text: 'Lisans', value: 2 },
        { key: 3, text: 'Yüksek Lisans', value: 3 },
        { key: 4, text: 'Doktora', value: 4 },
    ]

    return (
        <div>
            <MessageBox >
                <div>
                    Eğitim bilgileri
                    <Button className="ms-4" disabled={isEdit} color="vk" onClick={() => handleAddClick()}>Yeni eğitim bilgisi ekle</Button>
                </div>
                {
                    isEdit
                        ? <div>
                            <Form onSubmit={formik.handleSubmit} size="small">
                                <Form.Group widths='equal'>
                                    <YTFormField formik={formik} value="schoolType">
                                        <Form.Select options={options} label="Eğitim tipi" name="schoolType" onChange={(event, { value }) => formik.setFieldValue("schoolType", options[value - 1]?.text)} value={options.find(op => op.text == formik.values?.schoolType)?.value} />
                                    </YTFormField>
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <YTFormField formik={formik} value="schoolId">
                                        <SchoolDropDown onChangeEvent={(event, data) => formik.setFieldValue("schoolId", data.value)} value={formik.values?.schoolId} />
                                    </YTFormField>
                                    <YTFormField formik={formik} value="departmentId">
                                        <DepartmentDropDown onChangeEvent={(event, data) => formik.setFieldValue("departmentId", data.value)} value={formik.values?.departmentId} />
                                    </YTFormField>
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <YTFormField formik={formik} value="startingDate">
                                        <YTNumberDropdown label="Başlama tarihi" name="startingDate" onChangeEvent={(e, data) => formik.setFieldValue("startingDate", data.value)} min={1950} max={2021} value={formik.values?.startingDate} />
                                    </YTFormField>
                                    <YTFormField formik={formik} value="graduationDate">
                                        <YTNumberDropdown label="Mezuniyet tarihi" name="graduationDate" onChangeEvent={(e, data) => formik.setFieldValue("graduationDate", data.value)} min={1950} max={2021} value={formik.values?.graduationDate} />
                                    </YTFormField>

                                </Form.Group>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Button positive type="submit">Kaydet</Button>
                                        <Button negative type="button" onClick={() => handleCancelEdit()}>Vazgeç</Button>
                                    </div>
                                    {
                                        !isNew
                                            ?
                                            <div>
                                                <Button negative type="button" onClick={() => handleDeleteClick()}>Sil</Button>
                                            </div>
                                            : null
                                    }
                                </div>
                            </Form>
                        </div>

                        : <div>
                            {
                                educations?.map((education, index) => (
                                    <div className="" key={index}>
                                        <div className=" message-content" onClick={() => handleEditClick(index)}>
                                            <div className="d-flex">
                                                <div className="w-25 d-block">
                                                    <img src="https://aday-asset.mncdn.com/img/university-default.png" alt="pp" className=" w-100 img-fluid img-thumbnail" />
                                                    <p className="text-center h6 mt-2 bolder">{education?.schoolType}</p>
                                                </div>
                                                <div className="w-100 ms-4 mt-4">
                                                    <div className="d-flex justify-content-between w-75">
                                                        <div>

                                                            <YTInfoMessage info="Okul Adı" text={education?.school?.schoolName} />
                                                            <YTInfoMessage info="Bölüm Adı" text={education?.department?.departmentName} />

                                                        </div>
                                                        <div>
                                                            <YTInfoMessage info="Başlangıç tarihi" text={education?.startingDate} />
                                                            <YTInfoMessage info="Mezuniyer tarihi " text={education?.graduationDate == 3000 ? 'Okuyor' : education?.graduationDate} />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {(index != educations.length - 1) ? <hr /> : null}
                                    </div>
                                ))
                            }
                        </div>
                }
            </MessageBox>
        </div>
    )
}
