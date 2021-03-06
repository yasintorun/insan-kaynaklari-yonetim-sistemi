import React, { useEffect, useState } from 'react'
import MessageBox from '../MessageBox'
import { Label } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { FormGroup, Form, Button, Divider } from 'semantic-ui-react'
import SkillDropDown from '../../utilities/dropdowns/SkillDropdown'
import SkillService from '../../services/SkillService'
import { useDispatch, useSelector } from 'react-redux'
import { updateSkill } from '../../Store/actions/ResumeActions'
export default function SkillInfo() {

    const {skills} = useSelector(state => state.resume)

    const [isEdit, setIsEdit] = useState(false)
    const handleEditClick = () => {
        setIsEdit(!isEdit)
        formik.setValues = {

        }
    }

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            skillIds: [],
        },
        onSubmit: values => {
            //skillService.update(values).then(r => console.log(r.data.message))
            dispatch(updateSkill(26, values.skillIds))
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
                                <SkillDropDown onChangeEvent= {(event, data) => formik.setFieldValue("skillIds", data.value)} isMultiple={true} defaultValue = {skills?.map(skill => skill?.skill?.id)}/>

                                <Divider />
                                <Button positive type="submit">Kaydet</Button>
                                <Button negative type="button" onClick={() => handleEditClick()}>Vazgeç</Button>
                            </Form>
                        </div>
                        
                        : <div className="message-content anim" onClick={() => handleEditClick()}>
                            {
                                skills?.map((skill, index) => (
                                    <Label color="teal" className="mb-2" key={index}>
                                        <p className="h5">{skill?.skill?.skillName}</p>
                                    </Label>
                                ))
                            }
                        </div>
                }
            </MessageBox>
        </div >
    )
}
