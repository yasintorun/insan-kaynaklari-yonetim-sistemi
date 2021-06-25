import React, { useEffect, useState } from 'react'
import MessageBox from '../MessageBox'
import YTInfoMessage from '../../utilities/messages/YTInfoMessage'
import { useFormik } from 'formik'
import EducationService from '../../services/educationService'
import SchoolDropDown from '../../utilities/dropdowns/SchoolDropdown'
import DepartmentDropDown from '../../utilities/dropdowns/DepartmentDropdown'
import { FormGroup, Form, Button } from 'semantic-ui-react'
import CityDropDown from '../../utilities/dropdowns/CityDropDown'
import WorkTimeStyleDropdown from '../../utilities/dropdowns/WorkTimeStyleDropdown'
import JobPositionDropDown from '../../utilities/dropdowns/JobPositionDropdown'
export default function EducationInfo({ educations }) {
    const [isEdit, setIsEdit] = useState(false)

    const handleEditClick = () => {
        setIsEdit(!isEdit)
    }
    useEffect(() => {
    }, [isEdit])

    const educationService = new EducationService()

    const formik = useFormik({
        onSubmit: values => {
            values = {...values, userId: 1}
            educationService.update(10, values).then(r => console.log(r.data.message))
            handleEditClick()
            console.log(values)
        },
    });
    return (
        <div>
            <MessageBox >
                <div>Eğitim bilgileri</div>
                {
                    isEdit
                        ? <div>
                            <Form onSubmit={formik.handleSubmit} size="small">
                                <Form.Group widths='equal'>
                                    <Form.Field><SchoolDropDown onChangeEvent={(event, data) => formik.setFieldValue("schoolId", data.value)} /></Form.Field>
                                    <Form.Field><DepartmentDropDown onChangeEvent={(event, data) => formik.setFieldValue("departmentId", data.value)} /></Form.Field>
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid placeholder="Başlama tarihi" label='Başlangıç tarihi*' name="startingDate" onChange={formik.handleChange} />
                                    <Form.Input fluid placeholder="Mezuniyet tarihi" label='Mezuniyet tarihi*' name="graduationDate" onChange={formik.handleChange} />
                                </Form.Group>

                                <Button positive type="submit">Kaydet</Button>
                                <Button negative type="button" onClick={() => handleEditClick()}>Vazgeç</Button>
                            </Form>
                           </div>

                        : <div>
                            {
                                educations?.map((education, index) => (
                                    <div className="message-content" onClick={() => handleEditClick()}>
                                        <div className="d-flex">
                                            <div className="w-25 d-block">
                                                <img src="https://img-kariyer.mncdn.com/UniversiteLogolar/ankara-universitesi.png" alt="pp" className="rounded-circle w-100 img-fluid img-thumbnail" />
                                                <p className="text-center h6 mt-2">Lisans</p>
                                            </div>
                                            <div className="w-100 ms-4 mt-4">
                                                <div className="d-flex justify-content-between w-75">
                                                    <div>

                                                        <YTInfoMessage info="Okul Adı" text={education?.schoolName} />
                                                        <YTInfoMessage info="Bölüm Adı" text={education?.departmentName} />

                                                    </div>
                                                    <div>
                                                        <YTInfoMessage info="Başlangıç tarihi" text={education?.startingDate} />
                                                        <YTInfoMessage info="Mezuniyer tarihi " text={education?.graduationDate == 0 ? 'Okuyor' : education?.graduationDate} />
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
