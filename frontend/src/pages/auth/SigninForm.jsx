import React from 'react';
import { useFormik } from 'formik';
import { Icon, Input, Button, Label, Form } from 'semantic-ui-react'

export default function SigninForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
        (JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit} className="mt-5 page-center" size="big" align="center">
      <div className="bordered shadow">


        <Form.Field>
          <Label className="mt-3">
            Lütfen eposta adresinizi giriniz:
          </Label>

          <Input placeholder='Eposta' className="d-block"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Form.Field>

        <Form.Field>
          <Label className="mt-3">
            Lütfen şifrenizi giriniz
          </Label>

          <Input placeholder='Şifre' className="d-block"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

        </Form.Field>



        <Button color='green' type="submit" className="mt-3">Giriş Yap</Button>
      </div>
    </Form>
  );
};