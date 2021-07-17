import React from 'react';
import { useFormik } from 'formik';
import { Input, Button, Label, Form, Icon, Divider, Dropdown } from 'semantic-ui-react'
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import Links from '../../components/Links';
import { useDispatch, useSelector } from 'react-redux';
import UserService from '../../services/userService'
import { userLogin } from '../../Store/actions/userActions';
export default function SigninForm() {

  const dispatch = useDispatch()
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      eposta: '',
      password: '',
    },
    onSubmit: values => {
        dispatch(userLogin(values)).then(res => {
          history.push('/')
        })
      // alert(JSON.stringify(values, null, 2));
      // let userService = new UserService()
      // userService.login(values).then(result => console.log(result.data))
    },
  }); 
  return (
    <div className="login-panel full-panel">
      <div className="container">
        <div>
          <div className="row justify-content-center">
            <div className="col-md-2 mb-5 text-center">
              <a href="/"><h1 className="logo-header display-5  bolder cursor-pointer" >İKariyer</h1></a>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex p-5 w-100">
                <div className="w-50 login-register-panel text-wrap text-center d-flex align-items-center order-md-last">
                  <div className=" text w-100 p-5">
                    <h2 className="full-bold-text">Giriş Sayfasına Hoşgeldin!</h2>
                    <p>Üye değil misin? Hemen üye ol.</p>
                    <Dropdown
                    text='Kayıt ol'
                    icon='user'
                    floating
                    labeled
                    button
                    className='icon'
                    style={{marginLeft: '10px'}}
                >
                    <Dropdown.Menu>
                        <Dropdown.Item icon='user' text='iş arayan' as={NavLink} to={Links.JobSeekerRegister}/>
                        <Dropdown.Divider />
                        <Dropdown.Item icon='address book outline' text='İş veren'  as={NavLink} to={Links.EmployerRegister}/>
                    </Dropdown.Menu>
                </Dropdown>
                  </div>

                </div>
                <div className="w-50 login-wrap p-5 p-lg-5 bg-white">
                  <div className="mb-5">
                    <h2 className="text-secondary">Giriş Yap</h2>
                  </div>
                  <div>
                    <Form onSubmit={formik.handleSubmit} className="" size="large" >
                      <div className="w-100 register-card-text">


                        <Form.Field className="w-100 m-auto mb-4" >
                          <label className="mt-3" color="grey">
                            Lütfen eposta adresinizi giriniz:
                          </label>

                          <Input placeholder='Eposta'
                            id="email"
                            name="eposta"
                            type="email"
                            icon="user"
                            iconPosition="left"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                          />
                        </Form.Field>
                        <Form.Field className="w-100 m-auto">
                          <label className="mt-3" color="grey">
                            Lütfen şifrenizi giriniz
                          </label>

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

                        <Form.Field className="w-100 mt-2 mb-2 m-auto">
                          <div>
                            <span className="cursor-pointer btn-link text-danger">Şifremi unuttum</span>
                          </div>
                        </Form.Field>


                        <button type="submit" className="w-100 login-register-panel btn text-white text-big mt-4"><Icon name="sign-in" />Giriş Yap</button>
                      </div>
                    </Form>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      {/* <Form onSubmit={formik.handleSubmit} className="mt-5 page-center full-bg-image no-scroll" size="big" align="center" >
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
      </Form> */}
    </div>
  );
};