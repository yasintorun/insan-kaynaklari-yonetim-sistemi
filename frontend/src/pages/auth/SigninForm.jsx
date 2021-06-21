import React from 'react';
import { useFormik } from 'formik';
import { Input, Button, Label, Form , Icon} from 'semantic-ui-react'

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
    <div>
      <Form onSubmit={formik.handleSubmit} className="mt-5 page-center full-bg-image no-scroll" size="big" align="center" >
        <div className="bordered shadow w-25">


          <Form.Field className="w-100 m-auto" >
            <Label className="mt-3" color="grey">
              Lütfen eposta adresinizi giriniz:
            </Label>

            <Input placeholder='Eposta'
              id="email"
              name="email"
              type="email"
              icon="user"
              iconPosition="left"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Form.Field>

          <Form.Field className="w-100 m-auto">
            <Label className="mt-3" color="grey">
              Lütfen şifrenizi giriniz
            </Label>

            <Input placeholder='Şifre'
              id="password"
              name="password"
              type="password"
              icon="key"
              iconPosition="left"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

          </Form.Field>



          <Button color='green' type="submit" className="mt-3"><Icon name="sign-in"/>Giriş Yap</Button>
        </div>
      </Form>
    </div>
  );
};