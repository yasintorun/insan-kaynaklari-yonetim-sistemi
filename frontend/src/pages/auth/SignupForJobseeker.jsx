import React from 'react';
import { useFormik } from 'formik';
import { Icon, Input, Button, Label, Form } from 'semantic-ui-react'

export default function SignupForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      tc: ''
    },
    onSubmit: values => {
      (JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit} className="mt-5 page-center full-bg-image2" size="big" align="center">
      <div className="bordered shadow w-25">




        <Form.Field>
          <Label className="mt-3" color="grey">
            Lütfen isminizi giriniz
          </Label>

          <Input placeholder='İsim'
            id="firstname"
            name="firstname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />

        </Form.Field>

        <Form.Field>
          <Label className="mt-3" color="grey">
            Lütfen soyisminizi giriniz
          </Label>

          <Input placeholder='soyisim'
            id="lastname"
            name="lastname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />


        </Form.Field>


        <Form.Field>
          <Label className="mt-3" color="grey">
            Lütfen Tc kimlik numaranızı giriniz
          </Label>

          <Input placeholder='TC kimlik numarası'
            id="tc"
            name="tc"
            type="number"
            maxLength="11"
            onChange={formik.handleChange}
            value={formik.values.tc}
          />


        </Form.Field>

        <Form.Field>
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

        <Form.Field>
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
        <Form.Field>
          <Label className="mt-3" color="grey">
            Lütfen şifrenizi tekrar giriniz
          </Label>

          <Input placeholder='Şifre'
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

        </Form.Field>

        <Button color='green' type="submit" className="mt-3">Kayıt Ol</Button>
      </div>
    </Form>
  );
};