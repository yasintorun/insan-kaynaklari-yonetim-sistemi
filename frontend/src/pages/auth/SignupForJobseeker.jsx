import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Input, Button, Label, Form } from 'semantic-ui-react'
import * as Yup from 'yup';
import JobSeekerService from '../../services/jobSeekerService';
import { toast } from 'react-toastify';
export default function SignupForJobseeker() {

  const jobseekerService = new JobSeekerService()
  const [result, setResult] = useState({})

  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .required('Zorunlu Alan')
      .min(2, "İsim en az 2 karakterden oluşabilir")
      .max(30, "İsim en fazla 30 karakter olabilir"),
    lastname: Yup.string()
      .required('Zorunlu Alan')
      .min(2, "Soyisim en az 2 karakter olmalı")
      .max(30, "Soyisim en fazla 30 karakter olabilir"),
    eposta: Yup.string()
      .required('Zorunlu alan')
      .email('Geçersiz mail adresi'),
    password: Yup.string()
      .min(6, 'Şifre en az 6 karakterden oluşmalıdır')
      .max(30, 'Şifre en fazla 30 karakterden oluşabilir')
      .required('Zorunlu alan'),
    passwordCheck: Yup.string()
      .min(6, 'Şifre en az 6 karakterden oluşmalıdır')
      .max(30, 'Şifre en fazla 30 karakterden oluşabilir')
      .required('Zorunlu alan'),
      tcNo: Yup.string()
      .min(11, 'Tc kimlik numarası 11 haneli olmalı')
      .max(11, 'Tc kimlik numarası 11 haneli olmalı')
      .required('Zorunlu alan'),
  });


  const formik = useFormik({
    initialValues: {
      eposta: '',
      password: '',
      passwordCheck: '',
      firstname: '',
      lastname: '',
      tcNo: ''
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      jobseekerService.add(values).then(r => setResult(r.data))
      if (result.success) {
        toast.success(`Kayıt başarılı: Yönlendiriliyorsunuz`, { onClose: () => {/*Burada sayfa  yüklenecek.*/ } })
      } else {
        toast.error(`Kayıt başarısız: ${result.message}`)
      }
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
          {formik.errors.firstname && formik.touched.firstname
            ? (
              <Label basic color='red' pointing>
                {formik.errors.firstname}
              </Label>
            )
            : null
          }
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
          {formik.errors.lastname && formik.touched.lastname
            ? (
              <Label basic color='red' pointing>
                {formik.errors.lastname}
              </Label>
            )
            : null
          }

        </Form.Field>


        <Form.Field>
          <Label className="mt-3" color="grey">
            Lütfen Tc kimlik numaranızı giriniz
          </Label>

          <Input placeholder='TC kimlik numarası'
            id="tcNo"
            name="tcNo"
            type="number"
            maxLength="11"
            onChange={formik.handleChange}
            value={formik.values.tcNo}
          />

          {formik.errors.tcNo && formik.touched.tcNo
            ? (
              <Label basic color='red' pointing>
                {formik.errors.tcNo}
              </Label>
            )
            : null
          }
        </Form.Field>

        <Form.Field>
          <Label className="mt-3" color="grey">
            Lütfen eposta adresinizi giriniz:
          </Label>

          <Input placeholder='Eposta'
            id="eposta"
            name="eposta"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.eposta}
          />
          {formik.errors.eposta && formik.touched.eposta
            ? (
              <Label basic color='red' pointing>
                {formik.errors.eposta}
              </Label>
            )
            : null
          }
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
          {formik.errors.password && formik.touched.password
            ? (
              <Label basic color='red' pointing>
                {formik.errors.password}
              </Label>
            )
            : null
          }
        </Form.Field>
        <Form.Field>
          <Label className="mt-3" color="grey">
            Lütfen şifrenizi tekrar giriniz
          </Label>

          <Input placeholder='Şifre'
            id="passwordCheck"
            name="passwordCheck"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.passwordCheck}
          />
          {formik.errors.passwordCheck && formik.touched.passwordCheck
            ? (
              <Label basic color='red' pointing>
                {formik.errors.passwordCheck}
              </Label>
            )
            : null
          }
        </Form.Field>

        <Button color='green' type="submit" className="mt-3">Kayıt Ol</Button>
      </div>
    </Form>
  );
};