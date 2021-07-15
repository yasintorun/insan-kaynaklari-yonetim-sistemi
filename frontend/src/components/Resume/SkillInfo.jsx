import React, { useEffect, useState } from 'react'
import MessageBox from '../MessageBox'
import { Label } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { FormGroup, Form, Button, Divider } from 'semantic-ui-react'
import SkillDropDown from '../../utilities/dropdowns/SkillDropdown'
import SkillService from '../../services/SkillService'
export default function SkillInfo() {

    const [isEdit, setIsEdit] = useState(false)
    const [skills, setSkills] = useState([])
    const handleEditClick = () => {
        setIsEdit(!isEdit)
        formik.setValues = {

        }
    }
    const skillService = new SkillService()
    useEffect(() => {
        skillService.getByUserId(1).then(result => setSkills(result.data.data))
    }, [skills])


    const formik = useFormik({
        initialValues: {
            skillIds: [],
        },
        onSubmit: values => {
            values = { ...values, userId: 1 }
            skillService.update(values).then(r => console.log(r.data.message))
            handleEditClick()
            console.log(values)
        },
    });
    //console.log(skills)
    return (
        <div>
            <MessageBox >
                <div>Yetenekler</div>

                {
                    isEdit
                        ? <div>
                            <Form onSubmit={formik.handleSubmit} size="small">
                                <SkillDropDown onChangeEvent= {(event, data) => formik.setFieldValue("skillIds", data.value)} isMultiple={true} defaultValue = {skills?.map(skill => skill.skill.id)}/>

                                <Divider />
                                <Button positive type="submit">Kaydet</Button>
                                <Button negative type="button" onClick={() => handleEditClick()}>Vazgeç</Button>
                            </Form>
                        </div>
                        
                        : <div className="message-content anim" onClick={() => handleEditClick()}>
                            {
                                skills?.map(skill => (
                                    <Label color="teal" className="mb-2"><p className="h5">{skill?.skill?.skillName}</p></Label>
                                ))
                            }
                        </div>
                }
            </MessageBox>
        </div >
    )
}
