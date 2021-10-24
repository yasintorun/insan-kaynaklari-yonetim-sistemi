import React, { useState } from 'react'
import MessageBox from '../MessageBox'
import YTInfoMessage from '../../utilities/messages/YTInfoMessage'
import { Formik, useFormik } from 'formik'
import { Form, Button, Input, Divider, Popup, Image, Segment, Dimmer, Loader, FormField } from 'semantic-ui-react'
import { useEffect } from 'react'
import ResumeService from '../../services/resumeService'
import GenderDropdown from '../../utilities/dropdowns/GenderDropdown'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { deleteResumePhoto, updateResume, updateResumePhoto } from '../../Store/actions/ResumeActions'
import CityDropDown from '../../utilities/dropdowns/CityDropDown'
import { createRef } from 'react'
import YTAlerts from '../../utilities/YTAlerts'
import Helper from '../../utilities/Helper'
import * as Yup from 'yup';
import YTNumberDropdown from '../../utilities/YTNumberDropdown'
import YTFormField from '../../utilities/messages/YTFormField'
export default function PersonalInfo() {

    const { resume } = useSelector(state => state.resume)



    const [isEdit, setIsEdit] = useState(false)

    const [isPhotoLoading, setIsPhotoLoading] = useState(false)

    let fileRef = createRef()


    const handleEditClick = () => {
        setIsEdit(!isEdit)
        formik.setValues({
            ...resume
        })
    }

    const dispatch = useDispatch()

    const personelValidationSchema = Yup.object().shape({
        birthDate: Yup.date()
            .required(),
        genderId: Yup.number()
            .required(),
        cityId: Yup.number()
            .required(),
        github: Yup.string()
            .required(),
        linkedin: Yup.string()
            .required(),
        phone: Yup.string()
            .required(),
    });

    const formik = useFormik({
        initialValues: {
        },
        //validationSchema: personelValidationSchema,
        onSubmit: values => {
            //dispatch(updateResume(values))
            //resumeService.update(1, values).then(r => console.log(r.data.message))
           
            handleEditClick()
            console.log(resume)
        },
    });

    const uploadPhotoFile = e => {

        setIsPhotoLoading(true)
        // dispatch(updateResumePhoto(e.target.files[0]))
        const fileData = new FormData()
        fileData.append("photoFile", e.target?.files[0])

        Helper.setMyCallBack(() => dispatch(updateResumePhoto(fileData))).then(() => {
            setTimeout(() => {
                setIsPhotoLoading(false)

            }, 500)
        })

        //console.log("Foto yüklendi")
    }

    const deletePhoto = () => {
        YTAlerts.DeleteAlert("Fotoğraf", "Özgeçmişinde fotoğraf olması başvurularında daha iyi bir sonuç sağlayabilir.", () => dispatch(deleteResumePhoto()))
    }

    return (
        <div >
            <MessageBox className="">
                <div>Kişisel Bilgiler</div>
                {
                    isEdit
                        ?

                        <div className="row">
                            <div className="col-lg-3">
                                <div className="imageUpload ">
                                    <Segment basic>
                                        <div className="w-100">
                                            <Dimmer active={isPhotoLoading} >
                                                <Loader content='Fotoğraf Yükleniyor' />
                                            </Dimmer>
                                            <Image loading src={resume?.image?.imagePath} alt="pp" circular fluid />
                                        </div>
                                        <div className="imageUpload-btn">
                                            <Popup
                                                content="Fotoğraf yükle"
                                                trigger={<Button icon="image big" size="mini" onClick={() => fileRef.current.click()} type="button" color="blue" />}
                                            />
                                            {
                                                resume?.image?.id != 1
                                                    ? <Popup
                                                        content="Fotoğrafı kaldır"
                                                        trigger={<Button icon="delete big" size="mini" type="button" color="red" onClick={() => deletePhoto()} />}
                                                    />
                                                    : <></>
                                            }
                                            <input
                                                ref={fileRef}
                                                type="file"
                                                hidden
                                                accept="image/png, image/gif, image/jpeg"
                                                onChange={uploadPhotoFile}
                                            />
                                        </div>
                                    </Segment>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <Form onSubmit={formik.handleSubmit} size="small">
                                    {/* <Form.Group widths='equal'>
                                        <Form.Field>
                                            <Form.Input fluid placeholder="İsim" label='İsim*' name="jobSeeker.firstname" onChange={formik.handleChange} value={formik.values?.user?.firstname} required/>
                                        </Form.Field>
                                        <YTFormField formik={formik} value="lastname">
                                            <Form.Input fluid placeholder="Soyisim" label='Soyisim*' name="jobSeeker.lastname" onChange={formik.handleChange} value={formik.values?.user?.lastname} required/>
                                        </YTFormField>
                                    </Form.Group> */}
                                    <Form.Group widths='equal'>
                                        <YTFormField formik={formik} value="genderId">
                                            <GenderDropdown onChangeEvent={(event, data) => formik.setFieldValue("genderId", data.value)} value={formik.values?.genderId} />
                                        </YTFormField>
                                        <YTFormField formik={formik} value="birthDate">
                                            <Form.Input type="input" fluid placeholder="Doğum tarihi" label='Doğum tarihi*' name="birthDate" onChange={formik.handleChange} value={formik.values?.birtdate} />
                                        </YTFormField>
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <YTFormField formik={formik} value="phone">
                                            <Form.Input fluid placeholder="Telefon" label='Telefon' name="phone" onChange={formik.handleChange} value={formik.values?.phone} />
                                        </YTFormField>
                                        <YTFormField formik={formik} value="lastname">
                                            <Form.Field><CityDropDown onChangeEvent={(event, data) => formik.setFieldValue("city.id", data.value)} value={formik.values?.city?.id} /> </Form.Field>
                                        </YTFormField>
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <YTFormField formik={formik} value="github">
                                            <Form.Input fluid placeholder="Github Link" label='Github' name="github" onChange={formik.handleChange} value={formik.values?.github} />
                                        </YTFormField>
                                        <YTFormField formik={formik} value="linkedin">
                                            <Form.Input fluid placeholder="Linkedin Link" label='Linkedin' name="linkedin" onChange={formik.handleChange} value={formik.values?.linkedin} />
                                        </YTFormField>
                                    </Form.Group>
                                    <Button positive type="submit" >Kaydet</Button>
                                    <Button negative type="button" onClick={() => handleEditClick()}>Vazgeç</Button>
                                </Form>
                            </div>
                        </div>

                        :

                        <div className="d-flex message-content" onClick={() => isEdit ? null : handleEditClick()}>
                            <div className="w-25 d-block">
                                <img src={resume?.image?.imagePath} alt="pp" className="rounded-circle w-100 img-fluid img-thumbnail" />
                            </div>
                            <div className="w-100 ms-4">
                                <div>
                                    <h2>{resume.jobSeeker?.firstname + " " + resume.jobSeeker?.lastname}</h2>
                                    <div className="d-flex justify-content-between w-75">
                                        <div>
                                            <YTInfoMessage info="E-posta adresi" text={resume.jobSeeker?.eposta} />
                                            <YTInfoMessage info="Telefon" text={resume.phone} />
                                            <YTInfoMessage info="Yaşadığım şehir" text={resume?.city?.cityName} />
                                            <YTInfoMessage info="Github" text={resume.github} />
                                        </div>
                                        <div>
                                            <YTInfoMessage info="Doğum tarihi" text={resume.birtdate} />
                                            <YTInfoMessage info="Cinsiyet" text={resume.gender?.name} />
                                            <YTInfoMessage info="Uyruk" text={resume.nationality?.name} />
                                            <YTInfoMessage info="Linkedin" text={resume.linkedin} />
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
