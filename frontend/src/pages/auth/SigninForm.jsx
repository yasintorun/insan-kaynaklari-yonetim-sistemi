import React from 'react';
import { useFormik } from 'formik';
import { Icon, Input, Button, Label, Form , Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

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


          <Form.Field className="w-75 m-auto" >
            <Label className="mt-3" color="grey">
              Lütfen eposta adresinizi giriniz:
            </Label>

            <Input placeholder='Eposta'
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Form.Field>

          <Form.Field className="w-75 m-auto">
            <Label className="mt-3" color="grey">
              Lütfen şifrenizi giriniz
            </Label>

            <Input placeholder='Şifre'
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
    </div>
  );
};