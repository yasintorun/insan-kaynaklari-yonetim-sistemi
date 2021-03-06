import React, { useEffect, useState } from 'react'
import MessageBox from '../MessageBox'
import { FormField, Label, Popup, Rating } from 'semantic-ui-react'
import { Formik, useFormik } from 'formik'
import { FormGroup, Form, Button, Divider, Table, Icon } from 'semantic-ui-react'
import SkillDropDown from '../../utilities/dropdowns/SkillDropdown'
import UserLanguageService from '../../services/userLanguageService'
import { StaticRouter } from 'react-router-dom'
import Swal from 'sweetalert2'
import Helper from '../../utilities/Helper'
import { useDispatch, useSelector } from 'react-redux'
import { addLanguage, deleteLanguage, updateLanguage } from '../../Store/actions/ResumeActions'
import YTFormField from '../../utilities/messages/YTFormField'
import * as Yup from 'yup';
import YTAlerts from '../../utilities/YTAlerts'
export default function LanguageInfo() {

    //const {resume} = useSelector(state => state.resume)
    //let languages = resume.languages
    const { languages } = useSelector(state => state.resume)
    const [isEdit, setIsEdit] = useState(false)

    const [isNew, setIsNew] = useState(false)

    const dispatch = useDispatch()
    const handleEditClick = (val) => {
        setIsNew(false)
        setIsEdit(true)

        formik.setValues({
            id: val.id,
            languageName: val.languageName,
            level: val.level,
        })
    }

    const handleCancelEdit = () => {
        setIsEdit(false)
        setIsNew(false)
    }

    const handleAddClick = () => {
        setIsNew(true)
        setIsEdit(true)
        formik.setValues({

        })
    }
    const addLanguageSchema = Yup.object().shape({
        languageName: Yup.string()
            .required(),
        level: Yup.number()
            .required(),
    });

    const formik = useFormik({
        initialValues: {
            //languagesId: [],
        },
        validationSchema: addLanguageSchema,

        onSubmit: values => {
            values = { ...values, resume: {id: 26 } }
            isNew
                ? dispatch(addLanguage(values))
                //languageService.add(values).then(r => console.log(r.data))
                : dispatch(updateLanguage(values))
            //languageService.update(values).then(r => console.log(r.data))
            handleCancelEdit()
            //console.log(values)
        },
    });

    const handleLanguageDeleteClick = (id) => {
        // Helper.DeleteModalBox("Dil bilgisi", null, () => dispatch(deleteLanguage(id))).then(() => {

        // })
        YTAlerts.DeleteAlert("Dil bilgisi", null, () => dispatch(deleteLanguage(id)))
    }

    //console.log(languages)
    return (
        <div>
            <MessageBox >
                <div>
                    Dil bilgileri
                    <Button className="ms-4" disabled={isEdit} color="vk" onClick={() => handleAddClick()}>Yeni dil bilgisi ekle</Button>
                </div>

                {
                    isEdit
                        ? <div>
                            <Form onSubmit={formik.handleSubmit} size="small">
                                <Form.Group widths="equal">
                                    <YTFormField formik={formik} value="languageName" labeled   >
                                        <Form.Input fluid placeholder="Dil ad??" label='Dil Ad??' name="languageName" onChange={formik.handleChange} value={formik.values?.languageName} required/>

                                    </YTFormField>
                                    {/* <Form.Input fluid placeholder="Seviye" label='Seviye*' name="level" onChange={formik.handleChange} value={formik.values?.level} /> */}
                                    <YTFormField formik={formik} value="level">
                                        <label className="mb-2">Seviye</label>
                                        <Rating className="mt-2" defaultRating={formik.values.level} maxRating={5} onRate={(e, { rating }) => { formik.setFieldValue("level", rating) }} icon="star" />
                                    </YTFormField>
                                </Form.Group>
                                <Divider />
                                <Button positive type="submit">Kaydet</Button>
                                <Button negative type="button" onClick={() => handleCancelEdit()}>Vazge??</Button>
                            </Form>
                        </div>

                        : <div  >

                            <Table basic='very' celled collapsing className="w-100">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell><span className="text-secondary bold-header">Dil</span></Table.HeaderCell>
                                        <Table.HeaderCell><span className="text-secondary bold-header">Seviye</span></Table.HeaderCell>
                                        <Table.HeaderCell><span className="text-secondary bold-header"></span></Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {
                                        languages?.map((language, index) => (
                                            <Table.Row className="message-content hover-shadow" key={index}>
                                                <Table.Cell>
                                                    <span className="bolder text-bb">{language.languageName}</span>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {
                                                        <StarLevel level={language.level} />
                                                    }
                                                </Table.Cell>
                                                <Table.Cell collapsing textAlign="right">
                                                    <Popup content='D??zenle' trigger={<Button icon="edit" color="green" onClick={() => handleEditClick(language)} />} />
                                                    <Popup content="Sil" trigger={<Button icon="delete" color="red" onClick={() => handleLanguageDeleteClick(language.id)} />} />

                                                </Table.Cell>
                                            </Table.Row>

                                        ))
                                    }
                                </Table.Body>

                            </Table>

                        </div>
                }
            </MessageBox>
        </div >
    )
}

const StarLevel = ({ level }) => {
    const star = [1, 2, 3, 4, 5]
    return (
        <div>
            {
                star.map((s, index) => (
                    <Icon name="favorite" color={s <= level ? "red" : "black"} key={index} />
                ))
            }
        </div>
    )
}
