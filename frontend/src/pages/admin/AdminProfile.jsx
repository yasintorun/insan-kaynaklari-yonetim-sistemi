import React, { useEffect, useState } from 'react'
import MessageBox from '../../components/MessageBox'
import YTInfoMessage from '../../utilities/messages/YTInfoMessage'
import { Form, Label , Button, FormField} from 'semantic-ui-react'
import { Formik, useFormik } from 'formik'
import PersonalService from '../../services/personalService'
export default function AdminProfile() {
    const [personel, setPersonel] = useState({})

    let personelService = new PersonalService()
    useEffect(() => {
        
        personelService.getById(3).then(result => setPersonel(result.data.data))

    }, [personel])

    const [isEdit, setIsEdit] = useState(false)
    const handleEditClick = () => {
        setIsEdit(true)
        formik.setValues(personel)
    }
    const handleEditCancel = () => {
        setIsEdit(false)
    }
    const formik = useFormik({
        initialValues: {
        },
        onSubmit: values => {
            console.log(values)
            //personelService.update(values).then(r => console.log(r.data.message))
            handleEditCancel()
        },
    });
    

    return (
        <div>
            <div className="alert alert-info" role="alert">
                Sadece req20 isteri için yazıldı.<br />
                <strong>Bu sayfa modern bir şekilde dizayn edilecek.</strong>
            </div>
            <div className="mt-8">
                <MessageBox>
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
                                            <Form.Input fluid placeholder="İsim" label='İsim*' name="firstname" onChange={formik.handleChange} value={formik.values?.firstname}/>
                                            <Form.Input fluid placeholder="Soyisim" label='Soyisim*' name="lastname" onChange={formik.handleChange}  value={formik.values?.lastname}/>
                                        </Form.Group>
                                        <Form.Group widths='equal'>
                                            <Form.Input fluid placeholder="E-posta" label='E-posta*' name="eposta" onChange={formik.handleChange}  value={formik.values?.eposta}/>
                                            <Form.Input type="password" fluid placeholder="şifre" label='Şifre*' name="password" onChange={formik.handleChange}  value={formik.values?.password}/>
                                        </Form.Group>
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
                                <h2>{personel?.firstname + " " + personel?.lastname}  <Label color="red" content="Admin" /></h2>
                                

                                <div className="d-flex justify-content-between w-75">
                                    <div>
                                        <YTInfoMessage info="E-posta adresi" text={personel?.eposta} />
                                        <YTInfoMessage info="Rol (Yetki) " text={"Admin"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            
                    }
                </MessageBox>
            </div>
        </div>
    )
}
