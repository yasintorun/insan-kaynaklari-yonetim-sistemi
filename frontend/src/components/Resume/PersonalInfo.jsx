import React, { useState } from 'react'
import MessageBox from '../MessageBox'
import YTInfoMessage from '../../utilities/messages/YTInfoMessage'
import { Formik, useFormik } from 'formik'
import { Form, Button, Input, Divider, Popup } from 'semantic-ui-react'
import { useEffect } from 'react'
import ResumeService from '../../services/resumeService'
import GenderDropdown from '../../utilities/dropdowns/GenderDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { deleteResumePhoto, updateResume, updateResumePhoto } from '../../Store/actions/ResumeActions'
import CityDropDown from '../../utilities/dropdowns/CityDropDown'
import { createRef } from 'react'
import YTAlerts from '../../utilities/YTAlerts'
export default function PersonalInfo() {

    const { resume } = useSelector(state => state.resume)

    const [isEdit, setIsEdit] = useState(false)
    const [photoFile, setPhotoFile] = useState()
    let fileRef = createRef()

    const resumeService = new ResumeService()

    const handleEditClick = () => {
        setIsEdit(!isEdit)
        formik.setValues({
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
            cityId: resume?.city?.id,
            birtdate: resume?.birtdate,
            imageId: resume?.image?.id,
        })
    }

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
        },
        onSubmit: values => {
            dispatch(updateResume(values))
            //resumeService.update(1, values).then(r => console.log(r.data.message))
            console.log(values)
            handleEditClick()
        },
    });

    const uploadPhotoFile = e => {
        const file = e.target?.files[0]

        // dispatch(updateResumePhoto(e.target.files[0]))
        const fileData = new FormData()
        fileData.append("photoFile", e.target?.files[0])

        dispatch(updateResumePhoto(fileData))
        //console.log("Foto yüklendi")
    }

    const deletePhoto = () => {
        YTAlerts.DeleteAlert("Fotoğraf", "Özgeçmişinde fotoğraf olması başvurularında daha iyi bir sonuç sağlayabilir.", null)
            .then(result => {
                if (result) {
                    dispatch(deleteResumePhoto())
                }
            })
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
                                <div className="imageUpload">
                                    <img src={resume?.image?.imagePath} alt="pp" className="rounded-circle w-100 img-fluid img-thumbnail" />
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
                                            onChange={uploadPhotoFile}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <Form onSubmit={formik.handleSubmit} size="small">
                                    <Form.Group widths='equal'>
                                        <Form.Input fluid placeholder="İsim" label='İsim*' name="user.firstname" onChange={formik.handleChange} value={formik.values?.user?.firstname} />
                                        <Form.Input fluid placeholder="Soyisim" label='Soyisim*' name="user.lastname" onChange={formik.handleChange} value={formik.values?.user?.lastname} />
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <Form.Field><GenderDropdown onChangeEvent={(event, data) => formik.setFieldValue("genderId", data.value)} value={formik.values?.genderId} /></Form.Field>
                                        <Form.Input type="date" fluid placeholder="Doğum tarihi" label='Doğum tarihi*' name="birthDate" onChange={formik.handleChange} value={formik.values?.birtdate} />
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <Form.Input fluid placeholder="Telefon" label='Telefon' name="phone" onChange={formik.handleChange} value={formik.values?.phone} />
                                        <Form.Field><CityDropDown onChangeEvent={(event, data) => formik.setFieldValue("cityId", data.value)} value={formik.values?.cityId} /> </Form.Field>
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <Form.Input fluid placeholder="Github Link" label='Github' name="githubLink" onChange={formik.handleChange} value={formik.values?.githubLink} />
                                        <Form.Input fluid placeholder="Linkedin Link" label='Linkedin' name="linkedinLink" onChange={formik.handleChange} value={formik.values?.linkedinLink} />
                                    </Form.Group>
                                    <Button positive>Kaydet</Button>
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
                                    <h2>{resume.user?.firstname + " " + resume.user?.lastname}</h2>
                                    <div className="d-flex justify-content-between w-75">
                                        <div>
                                            <YTInfoMessage info="E-posta adresi" text={resume.user?.eposta} />
                                            <YTInfoMessage info="Telefon" text={resume.phone} />
                                            <YTInfoMessage info="Yaşadığım şehir" text={resume?.city?.cityName} />
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
