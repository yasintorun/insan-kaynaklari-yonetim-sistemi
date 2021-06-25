import React, { useEffect, useState } from 'react'
import MessageBox from '../MessageBox'
import { Label } from 'semantic-ui-react'
import UserSkillService from '../../services/userSkillService'
import { useFormik } from 'formik'
import { FormGroup, Form, Button, Divider } from 'semantic-ui-react'
import SkillDropDown from '../../utilities/dropdowns/SkillDropdown'
export default function SkillInfo({ skills }) {

    const [isEdit, setIsEdit] = useState(false)
    const [values, setValues] = useState([])
    const handleEditClick = () => {
        setIsEdit(!isEdit)
    }
    useEffect(() => {
    }, [isEdit])

    const userSkillService = new UserSkillService()

    const formik = useFormik({
        initialValues: {
            skillId: '',
        },
        onSubmit: values => {
            values = { ...values, userId: 1 }
            //userSkillService.update(10, values).then(r => console.log(r.data.message))
            //handleEditClick()
            console.log(values)
        },
    });
    const addClick = () => {
        values.push({
            skillId: formik.values.skillId,
        })
        console.log(values)
    }
    console.log(skills)
    return (
        <div>
            <MessageBox >
                <div>Yetenekler</div>
                <div className="row">
                    {
                        isEdit
                            ? <div className="col-md-6">
                                <Form onSubmit={formik.handleSubmit} size="small">

                                    <Form.Field><SkillDropDown onChangeEvent={(event, data) => formik.setFieldValue("skillId", data.value)} /></Form.Field>
                                    <Button fluid type="button" onClick= {() => addClick()}>Ekle</Button>

                                <Divider />
                                <Button positive type="submit">Kaydet</Button>
                                <Button negative type="button" onClick={() => handleEditClick()}>Vazgeç</Button>
                                </Form>
                            </div>
                : <div></div>
                    }

                <div className="d-s col-md-6 message-content" onClick={() => handleEditClick()}>
                    {
                        skills?.map(skill => (
                            <Label color="teal"><p className="h5">{skill?.skillName}</p></Label>
                        ))
                    }
                    {
                        isEdit
                            ? values.map(val => (
                                <Label color="teal"><p className="h5">{skills[val.skillId].skillName}</p></Label>
                            ))
                            : null
                    }
                </div>
                </div>
            </MessageBox>
        </div >
    )
}
