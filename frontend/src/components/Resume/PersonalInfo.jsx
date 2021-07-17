import React, { useState } from 'react'
import MessageBox from '../MessageBox'
import YTInfoMessage from '../../utilities/messages/YTInfoMessage'
import { Formik, useFormik } from 'formik'
import { Form, Button, Input, Divider } from 'semantic-ui-react'
import { useEffect } from 'react'
import ResumeService from '../../services/resumeService'
import GenderDropdown from '../../utilities/dropdowns/GenderDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { updateResume } from '../../Store/actions/ResumeActions'
export default function PersonalInfo() {

    const {resume} = useSelector(state => state.resume)

    const [isEdit, setIsEdit] = useState(false)


    const resumeService = new ResumeService()

    const handleEditClick = () => {
        setIsEdit(!isEdit)
        formik.setValues ({
            id: resume?.id,
            user: {
                userId: resume?.user?.userId,
                firstname: resume?.user?.firstname,
                lastname: resume?.user?.lastname,
                eposta: resume?.user?.eposta,
            },
            phone: resume?.phone,
            genderId: resume?.gender?.id,
            githubLink: resume?.githubLink,
            linkedinLink: resume?.linkedinLink,
        })
    }
    
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
        },
        onSubmit: values => {
            dispatch(updateResume(values))
            //resumeService.update(1, values).then(r => console.log(r.data.message))
           //console.log(values) 
           handleEditClick()
        },
    });

    return (
        <div >
            <MessageBox className="">
                <div>Kişisel Bilgiler</div>
                {
                    isEdit
                        ?
                        <Form onSubmit={formik.handleSubmit} size="small">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src="https://res.cloudinary.com/dost/image/upload/v1622719799/userPhotos/user1.gif" alt="pp" className="rounded-circle w-100 img-fluid img-thumbnail" />
                                </div>
                                <div className="col-md-9">
                                    <Form.Group widths='equal'>
                                        <Form.Input fluid placeholder="İsim" label='İsim*' name="user.firstname" onChange={formik.handleChange} value = {formik.values?.user?.firstname}/>
                                        <Form.Input fluid placeholder="Soyisim" label='Soyisim*' name="user.lastname" onChange={formik.handleChange} value = {formik.values?.user?.lastname}/>
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <Form.Field><GenderDropdown onChangeEvent={(event, data) =>formik.setFieldValue("genderId", data.value)}/></Form.Field>
                                        <Form.Input type="date" fluid placeholder="Doğum tarihi" label='Doğum tarihi*' name="birthDate" onChange={formik.handleChange}/>
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <Form.Input fluid placeholder="Telefon" label='Telefon' name="phone" onChange={formik.handleChange} value = {formik.values?.phone}/>
                                        <Form.Input fluid placeholder="Adres" label='Adres' name="phone"  onChange={formik.handleChange}/>
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <Form.Input fluid placeholder="Github Link" label='Github' name="githubLink" onChange={formik.handleChange} value={formik.values?.githubLink}/>
                                        <Form.Input fluid placeholder="Linkedin Link" label='Linkedin' name="linkedinLink"  onChange={formik.handleChange} value = {formik.values?.linkedinLink}/>
                                    </Form.Group>
                                    <Button positive>Kaydet</Button>
                                    <Button negative type="button" onClick={() => handleEditClick()}>Vazgeç</Button>
                                </div>
                            </div>
                        </Form>
                        :

                        <div className="d-flex message-content" onClick={() => isEdit ? null : handleEditClick()}>
                            <div className="w-25 d-block">
                                <img src="https://res.cloudinary.com/dost/image/upload/v1622719799/userPhotos/user1.gif" alt="pp" className="rounded-circle w-100 img-fluid img-thumbnail" />
                            </div>
                            <div className="w-100 ms-4">
                                <div>
                                    <h2>{resume.user?.firstname + " " + resume.user?.lastname}</h2>
                                    <div className="d-flex justify-content-between w-75">
                                        <div>
                                            <YTInfoMessage info="E-posta adresi" text={resume.user?.eposta} />
                                            <YTInfoMessage info="Telefon" text={resume.phone} />
                                            <YTInfoMessage info="Ev adresi" text={"Düziçi / Osmaniye"} />
                                            <YTInfoMessage info="Github" text={resume.githubLink} />
                                        </div>
                                        <div>
                                            <YTInfoMessage info="Doğum tarihi" text={resume.birtdate} />
                                            <YTInfoMessage info="Cinsiyet" text={resume.gender?.name} />
                                            <YTInfoMessage info="Uyruk" text={resume.nationality?.name} />
                                            <YTInfoMessage info="Linkedin" text={resume.linkedinLink} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </MessageBox>
        </div>
    )
}
