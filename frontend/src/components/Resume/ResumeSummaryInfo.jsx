import React, { useState } from 'react'
import MessageBox from '../MessageBox'
import { Form, Button, Icon, Divider } from 'semantic-ui-react'
import RichTextEditor from '../RichTextEditor/RichTextEditor'
import { useFormik } from 'formik'
import ResumeService from '../../services/resumeService'
import { useDispatch, useSelector } from 'react-redux'
import { updateResumeSummary } from '../../Store/actions/ResumeActions'
export default function ResumeSummaryInfo() {

    const {resume} = useSelector(state => state.resume)

    const dispatch = useDispatch()

    const [isEdit, setIsEdit] = useState(false)

    const handleEditClick = () => {
        setIsEdit(true)
    }

    const handleCancelEdit = () => {
        setIsEdit(false)
    }

    const handleRichTextEditorInput = (value) => {
        formik.setFieldValue("summary", value)
        //console.log(value)
    }

    const formik = useFormik({
        initialValues: {
            //languagesId: [],
        },
        onSubmit: values => {
            dispatch(updateResumeSummary(values))
            //resumeService.updateResumeSummary(26, values).then(result => console.log(result.data))
            handleCancelEdit()
        },
    });

    return (
        <div>
            <div>
                <MessageBox>
                    <div>
                        Özet
                    </div>
                    {
                        isEdit
                            ? <div>
                                <Form onSubmit={formik.handleSubmit}>
                                    <RichTextEditor
                                        textValue={handleRichTextEditorInput}
                                        defaultValue = {resume.summary}
                                    />
                                    <Divider />
                                    <Button positive type="submit">Kaydet</Button>
                                    <Button negative type="button" onClick={() => handleCancelEdit()}>Vazgeç</Button>
                                </Form>
                            </div>
                            : <div>
                                <div className="message-content p-2" onClick={() => handleEditClick()}>
                                    <div dangerouslySetInnerHTML={{ __html: resume.summary }} />
                                </div>
                            </div>
                    }
                </MessageBox>
            </div>
        </div>
    )
}

//{!!resume ? resume.summary : "Ön yazı eklenmedi"}    