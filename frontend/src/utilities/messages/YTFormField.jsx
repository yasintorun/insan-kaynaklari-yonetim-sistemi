import { useField } from 'formik'
import React from 'react'
import { Children } from 'react'
import { Form, Label, Dropdown } from 'semantic-ui-react'

export default function YTFormField({ value, children, formik, labeled = false }) {
    return (
        <>
            { 
                <Form.Field error={!!formik.errors[value] && formik.touched[value]}>
                    {children}
                    {formik.errors[value] && formik.touched[value] && labeled
                        ? (
                            <Label basic color='red' pointing>
                                {formik.errors[value]}
                            </Label>
                        )
                        : null
                    }
                </Form.Field>
            }
        </>
    )
}
