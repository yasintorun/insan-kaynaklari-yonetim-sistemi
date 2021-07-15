import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Input, Button, label, Form, TextArea } from 'semantic-ui-react'
import EmployerService from '../../services/employerService';
import * as Yup from 'yup';
import { toast } from 'react-toastify'

export default function SignupForEmployer() {

  const employerService = new EmployerService()


  const SignupSchema = Yup.object().shape({
    companyName: Yup.string()
      .required('Zorunlu Alan')
      .min(6, "Şirket adı en az 10 karakter olmalı")
      .max(50, "Şirket adı en fazla 50 karakter olabilir"),
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
    phone: Yup.string()
      .min(10, 'Telefon numarası en az 11 haneli olmalı')
      .max(13, 'Telefon numarası en fazla 13 haneli olabilir')
      .required('Zorunlu alan'),
    summary: Yup.string()
      .min(20, "Şirketiniz hakkında en az 1 cümle açıklama yazısı yazınız.")
      .max(250, " sadece özet açıklama yazısı giriniz.")
      .required('Zorunlu alan'),
    website: Yup.string()
      .matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter correct url!')
      .required("Zorunlu alan"),
  });

  const [result, setResult] = useState({})

  const formik = useFormik({
    initialValues: {
      companyName: '',
      eposta: '',
      password: '',
      passwordCheck: '',
      phone: '',
      summary: '',
      website: ''
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      employerService.add(values).then(r => setResult(r.data));
      console.log(result)
      if (result.success) {
        toast.success(`Kayıt başarılı: Yönlendiriliyorsunuz`, { onClose: () => {/*Burada sayfa geri gelcek.*/ } })
      } else {
        toast.error(`Kayıt başarısız: ${result.message}`)
      }
      //toast.success(`${jobAdvertisement.id} onaylandı`, {onClose: () => {/*Burada sayfa geri gelcek.*/}})
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit} size="large">
      <div className="register-card-text">
        <Form.Field>
          <label className="mt-3" color="grey">
            eposta adresinizi giriniz:
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
              <label basic color='red' pointing>
                {formik.errors.eposta}
              </label>
            )
            : null
          }
        </Form.Field>

        <Form.Group widths="equal">
          <Form.Field>
            <label className="mt-3" color="grey">
              şifrenizi giriniz
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
                <label basic color='red' pointing>
                  {formik.errors.password}
                </label>
              )
              : null
            }
          </Form.Field>
          <Form.Field>
            <label className="mt-3" color="grey">
              şifrenizi tekrar giriniz
            </label>

            <Input placeholder='Şifre tekrarı'
              id="passwordCheck"
              name="passwordCheck"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.passwordCheck}
            />
            {formik.errors.passwordCheck && formik.touched.passwordCheck
              ? (
                <label basic color='red' pointing>
                  {formik.errors.passwordCheck}
                </label>
              )
              : null
            }
          </Form.Field>

        </Form.Group>

        <Form.Field>
          <label className="mt-3" color="grey">
            şirket adını giriniz
          </label>

          <Input placeholder='şirket adı'
            id="companyName"
            name="companyName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.companyName}
          />
          {formik.errors.companyName && formik.touched.companyName
            ? (
              <label basic color='red' pointing>
                {formik.errors.companyName}
              </label>
            )
            : null
          }
        </Form.Field>
        <Form.Group widths="equal">


          <Form.Field>
            <label className="mt-3" color="grey">
              website adresinizi giriniz
            </label>

            <Input placeholder='website adresi'
              id="website"
              name="website"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.website}
            />

            {formik.errors.website && formik.touched.website
              ? (
                <label basic color='red' pointing>
                  {formik.errors.website}
                </label>
              )
              : null
            }
          </Form.Field>


          <Form.Field>
            <label className="mt-3" color="grey">
              telefon numaranızı giriniz
            </label>

            <Input placeholder='Telefon numarası'
              id="phone"
              name="phone"
              type="number"
              maxLength="11"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.errors.phone && formik.touched.phone
              ? (
                <label basic color='red' pointing>
                  {formik.errors.phone}
                </label>
              )
              : null
            }

          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label className="mt-3" color="grey">
            şirketiniz hakkında mesaj giriniz
          </label>

          <TextArea placeholder='Şirket hakkında özet açıklama'
            id="summary"
            name="summary"
            maxLength={2}
            onChange={formik.handleChange}
            value={formik.values.summary}
          />

          {formik.errors.summary && formik.touched.summary
            ? (
              <label basic color='red' pointing>
                {formik.errors.summary}
              </label>
            )
            : null
          }
        </Form.Field>


        <Button color='blue' type="submit" className="mt-3">Kayıt Ol</Button>
      </div>
    </Form>
  );
};