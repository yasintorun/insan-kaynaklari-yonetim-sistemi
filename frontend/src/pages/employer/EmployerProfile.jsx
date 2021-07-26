import React, { useEffect, useState } from 'react'
import MessageBox from '../../components/MessageBox'
import YTInfoMessage from '../../utilities/messages/YTInfoMessage'
import { Form, Label, Button, FormField } from 'semantic-ui-react'
import { Formik, useFormik } from 'formik'
import PersonalService from '../../services/personalService'
import EmployerService from '../../services/employerService'
import { TextArea, Divider } from 'semantic-ui-react'
import UpdateEmployerInfoService from '../../services/UpdateEmployerInfoService'
import { toast } from 'react-toastify'
export default function EmployerProfile() {
    const [employer, setEmployer] = useState({})
    const [isWaitConfirm, setIsWaitConfirm] = useState(false)
    const id = 2
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getById(id).then(result => setEmployer(result.data.data))

        //onay bekliyor mu?
        let updateEmployerInfoService = new UpdateEmployerInfoService()
        updateEmployerInfoService.getById(id).then(result => setIsWaitConfirm(result.data.success))

    }, [employer])

    const [isEdit, setIsEdit] = useState(false)
    const handleEditClick = () => {
        setIsEdit(true)
        let val = employer
        delete val.id
        formik.setValues(val)
    }
    const handleEditCancel = () => {
        setIsEdit(false)
    }
    const formik = useFormik({
        initialValues: {
        },
        onSubmit: values => {
            console.log(values)
            //let employerService = new EmployerService()
            //employerService.update(values).then(r => console.log(r.data.message))
            let updateEmployerInfoService = new UpdateEmployerInfoService();
            updateEmployerInfoService.add(id, values).then(result => {
                console.log(result.data)
                if (result.data.success) {
                    toast.success(`Bilgiler Güncellendi. Onay bekleniyor..`)
                    handleEditCancel()
                } else {
                    toast.error("Hata: " + result.data.message)
                }
            })
            // handleEditCancel()
        },
    });


    return (
        <div>
            <div className="w-75 m-auto">
                <MessageBox>
                    <div>
                        Genel Şirket Bilgileri
                        <Label className="ms-4" color="green" content="Kayıt Onaylandı" />
                    </div>
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
                                            <Form.Input fluid placeholder="Şirket Adı" label='Şirket Adı' required name="companyName" onChange={formik.handleChange} value={formik.values?.companyName} />
                                            <Form.Input fluid placeholder="Telefon Numarası" label='Telefon Numarası' name="phone" required onChange={formik.handleChange} value={formik.values?.phone} />
                                        </Form.Group>
                                        <Form.Group widths='equal'>
                                            <Form.Input fluid placeholder="E-posta" label='E-posta' name="eposta" required onChange={formik.handleChange} value={formik.values?.eposta} />
                                            <Form.Input fluid placeholder="Website" label='Website' required name="website" onChange={formik.handleChange} value={formik.values?.website} />
                                        </Form.Group>
                                        <Divider hidden />
{/* 
                                        <Label color="red" size="tiny">Eğer şifre değiştirmek istemiyorsanız, şifre kısmını boş bırakın.</Label>
                                        <Form.Group widths='equal'>
                                            <Form.Input fluid placeholder="Şifre" label='Şifre' name="password" onChange={formik.handleChange} value={formik.values?.password} />
                                            <Form.Input fluid placeholder="Şifre tekrarı" label='Şifre Tekrarı' name="passwordCheck" onChange={formik.handleChange} value={formik.values?.passwordCheck} />
                                        </Form.Group> */}


                                        <Form.TextArea fluid placeholder="Özet bilgi" label="Şirket hakkında özet bilgi" name="summary" onChange={formik.handleChange} value={formik.values?.summary}>

                                        </Form.TextArea>


                                        <Divider />
                                        <Button positive>Kaydet</Button>
                                        <Button negative type="button" onClick={() => handleEditCancel()}>Vazgeç</Button>
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
                                        <h2>{employer?.companyName}  </h2>


                                        <div className="d-flex justify-content-between w-75 mb-4">
                                            <div>
                                                <YTInfoMessage info="E-posta adresi" text={employer.eposta} />
                                                <YTInfoMessage info="Website adresi" text={employer.website} />
                                                <YTInfoMessage info="Telefon Numarası" text={employer.phone} />
                                                <YTInfoMessage info="Şirket hakkında özet bilgi" text={employer.summary} />
                                            </div>
                                        </div>
                                        {
                                            isWaitConfirm
                                                ? <Label color="teal">Güncelleme onay bekleniyor</Label>
                                                : null
                                        }

                                    </div>
                                </div>
                            </div>

                    }
                </MessageBox>
            </div>
        </div>
    )
}
