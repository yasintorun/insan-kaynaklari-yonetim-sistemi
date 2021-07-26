import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Input, Button, label, Form, Dimmer, Loader } from 'semantic-ui-react'
import * as Yup from 'yup';
import JobSeekerService from '../../services/jobSeekerService';
import { toast } from 'react-toastify';
import YTAlerts from '../../utilities/YTAlerts';
import MailService from '../../services/mailService';
import { useHistory } from 'react-router-dom';
export default function SignupForJobseeker() {
  const [loading, setLoading] = useState(false)
  const jobseekerService = new JobSeekerService()

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

  let history = useHistory()

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
      setLoading(true)
      jobseekerService.add(values).then(result => {
        setLoading(false)
        if (result.data.success) {
          console.log(result.data.data)
          YTAlerts.InfoAlert("Kayıt Başarılı", "Lütfen mail adresinizize gelen onay linkine tıklayınız.", null)
          history.push('/users/login')
          let mailService = new MailService()
          mailService.sendRegisterMail(result.data.data).then(r => {
            console.log(r.data)
          })
          //toast.success(`Kayıt başarılı: Yönlendiriliyorsunuz`, { onClose: () => {/*Burada sayfa  yüklenecek.*/ } })
        } else {
          YTAlerts.WarningAlert("Kayıt Başarısız!", result.data.message, null)
          //toast.error(`Kayıt başarısız: ${result.data.message}`)
        }
      })
    },
  });
  return (
    <div>
      <Dimmer active = {loading}>
        <Loader>Kayıt olunuyor...</Loader>
      </Dimmer>

      <Form onSubmit={formik.handleSubmit} size="big">
        <div className="register-card-text">
          <Form.Group widths="equal">
            <Form.Field>
              <label className="mt-3" color="grey">
                Lütfen isminizi giriniz
              </label>

              <Input placeholder='İsim'
                id="firstname"
                name="firstname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstname}
              />
              {formik.errors.firstname && formik.touched.firstname
                ? (
                  <label className="text-danger">
                    {formik.errors.firstname}
                  </label>
                )
                : null
              }
            </Form.Field>

            <Form.Field>
              <label className="mt-3" color="grey">
                Lütfen soyisminizi giriniz
              </label>

              <Input placeholder='soyisim'
                id="lastname"
                name="lastname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastname}
              />
              {formik.errors.lastname && formik.touched.lastname
                ? (
                  <label className="text-danger">
                    {formik.errors.lastname}
                  </label>
                )
                : null
              }

            </Form.Field>
          </Form.Group>



          <Form.Field>
            <label className="mt-3" color="grey">
              Lütfen Tc kimlik numaranızı giriniz
            </label>

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
                <label className="text-danger">
                  {formik.errors.tcNo}
                </label>
              )
              : null
            }
          </Form.Field>

          <Form.Field>
            <label className="mt-3" color="grey">
              Lütfen eposta adresinizi giriniz:
            </label>

            <Input placeholder='Eposta'
              id="eposta"
              name="eposta"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.eposta}
            />
            {formik.errors.eposta && formik.touched.eposta
              ? (
                <label className="text-danger">
                  {formik.errors.eposta}
                </label>
              )
              : null
            }
          </Form.Field>

          <Form.Group>

            <Form.Field>
              <label className="mt-3" color="grey">
                Lütfen şifrenizi giriniz
              </label>

              <Input placeholder='Şifre'
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password
                ? (
                  <label className="text-danger">
                    {formik.errors.password}
                  </label>
                )
                : null
              }
            </Form.Field>
            <Form.Field>
              <label className="mt-3" color="grey">
                Lütfen şifrenizi tekrar giriniz
              </label>

              <Input placeholder='Şifre'
                id="passwordCheck"
                name="passwordCheck"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.passwordCheck}
              />
              {formik.errors.passwordCheck && formik.touched.passwordCheck
                ? (
                  <label className="text-danger">
                    {formik.errors.passwordCheck}
                  </label>
                )
                : null
              }
            </Form.Field>

          </Form.Group>

          <Button color="blue large" type="submit" className="mt-3">Kayıt Ol</Button>
        </div>
      </Form>
    </div>
  );
};