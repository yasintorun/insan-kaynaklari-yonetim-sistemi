import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Input, Button, Label, Form, Dropdown } from 'semantic-ui-react'
import JobAdvertisementService from '../../services/jobAdvertisementService';
import CityService from '../../services/cityService';
import JobPositionService from '../../services/jobPositionService'
import WorkStyleService from '../../services/workStyleService';
import WorkTimeStyleService from '../../services/workTimeService';
import RichTextEditor from '../../components/RichTextEditor/RichTextEditor';
import * as Yup from 'yup';
export default function NewJobAdvert(props) {


  const [cities, setCities] = useState([])
  const [jobPositions, setJobPositions] = useState([])
  const [workStyle, setWorkStyle] = useState([])
  const [workTimeStyle, setWorkTimeStyle] = useState([])

  useEffect(() => {
    let cityService = new CityService()
    cityService.getCity().then(result => setCities(result.data.data))

    let jobPositionService = new JobPositionService()
    jobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))

    let workStyleService = new WorkStyleService()
    workStyleService.getWorkStyles().then(result => setWorkStyle(result.data.data))

    let workTimeStyleService = new WorkTimeStyleService()
    workTimeStyleService.getWorkTimeStyles().then(result => setWorkTimeStyle(result.data.data))

    console.log(props.location?.initialVal)

  }, [])

  const jobAdvertisementService = new JobAdvertisementService()

  const SignupSchema = Yup.object().shape({
    cityId: Yup.string()
      .required('Zorunlu Alan'),
    jobPositionId: Yup.string()
      .required('Zorunlu alan'),
    maxPerson: Yup.number()
      .min(1, 'kontenjan sayısı minimum 1 olabilir.')
      .max(100, 'kontenjan sayısı maksimum 100 olabilir.')
      .required('Zorunlu alan'),
    minSalary: Yup.number()
      .min(0, 'minimum maaş en az 0 olabilir.')
      .max(100000, 'minimum maaş en fazla 100 bin olabilir.')
      .required('Zorunlu alan'),
    maxSalary: Yup.number()
      .min(0, 'maksimum maaş en az 0 olabilir.')
      .max(1000000, 'maksimum maaş en fazla 1 milyon olabilir.')
      .required('Zorunlu alan'),
    deadline: Yup.date()
      .min(new Date(), "Son başvuru tarihi bugünden itibaren olmalıdır.")
      .required('Zorunlu alan'),
    workStyleId: Yup.number()
      .required('Zorunlu alan'),
    workTimeStyleId: Yup.number()
      .required('Zorunlu alan'),
    description: Yup.string()
      .required('Zorunlu Alan'),
    //email: Yup.string().email('Invalid email').required('Required'),
  });

  let initialVal = props.location?.initialVal
  const formik = useFormik({
    initialValues: {
      cityId: initialVal?.city?.id,
      jobPositionId: initialVal?.jobPosition?.id,
      maxPerson: initialVal?.maxPerson,
      minSalary: initialVal?.minSalary,
      maxSalary: initialVal?.maxSalary,
      employerId: 2,
      deadline: initialVal?.deadline,
      description: initialVal?.description,
      workStyleId: initialVal?.workStyle?.id,
      workTimeStyleId: initialVal?.workTimeStyle?.id
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      jobAdvertisementService.add(values).then();
      //alert(JSON.stringify(values, null, 2))
    },
  });

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  }

  const handleRichTextEditorInput = (value) => {
    formik.setFieldValue("description", value)
  }

  return (
    <Form onSubmit={formik.handleSubmit} className="mt-5 page-center" align="center">
      <div className="mb-5 w-75 ">
      <Label className="mb-2" color="red">Lütfen tüm alanları eksiksiz doldurunuz.<strong> İlanınız sistem personelinin onayı ile yayına alınacaktır.</strong></Label>
        <div className="row text-left">
          <div className="col-md-5 ">
            <Form.Field>
              <label className="mt-3 text-left" >
                Lütfen Şehir seçiniz:
              </label>
              <Dropdown
                placeholder='Şehir seçiniz'
                fluid
                selection
                search
                options={cities.map((x, index) => {
                  return { text: x.cityName, key: x.index, value: x.id }
                })}
                //onBlur={formik.onBlur}
                onChange={(event, data) =>
                  formik.setFieldValue("workingTime.id", data.value)
                }
                //id="cityId"
                value={formik.values.cityId}
              />
              {formik.errors.cityId && formik.touched.cityId
                ? (
                  <Label basic color='red' pointing>
                    {formik.errors.cityId}
                  </Label>
                )
                : null
              }
            </Form.Field>



            <Form.Field>
              <label className="mt-3">
                Lütfen kapasite giriniz
              </label>
              <Input placeholder='Kontenjan'
                id="maxPerson"
                name="maxPerson"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.maxPerson}
              />
              {formik.errors.maxPerson && formik.touched.maxPerson
                ? (
                  <Label basic color='red' pointing>
                    {formik.errors.maxPerson}
                  </Label>
                )
                : null
              }
            </Form.Field>

            <Form.Field>
              <label className="mt-3">
                Lütfen minimum maaşı giriniz
              </label>
              <Input placeholder='Minimum maaş'
                id="minSalary"
                name="minSalary"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.minSalary}
              />
              {formik.errors.minSalary && formik.touched.minSalary
                ? (
                  <Label basic color='red' pointing>
                    {formik.errors.minSalary}
                  </Label>
                )
                : null
              }
            </Form.Field>

            <Form.Field>
              <label className="mt-3">
                Lütfen maksimum maaşı giriniz
              </label>
              <Input placeholder='maksimum maaş'
                id="maxSalary"
                name="maxSalary"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.maxSalary}
              />
              {formik.errors.maxSalary && formik.touched.maxSalary
                ? (
                  <Label basic color='red' pointing>
                    {formik.errors.maxSalary}
                  </Label>
                )
                : null
              }
            </Form.Field>


          </div>

          <div className="col-md-2"></div>
          <div className="col-md-5">
            <Form.Field>
              <label className="mt-3">
                Lütfen iş pozisyonunu giriniz
              </label>
              <Dropdown
                placeholder='İş pozisyonunu seçiniz'
                fluid
                selection
                search
                options={jobPositions.map((x) => {
                  return { text: x.jobName, key: x.id, value: x.id }
                })}

                onChange={(event, data) =>
                  formik.setFieldValue("jobPositionId", data.value)
                }
                //id="cityId"
                value={formik.values.jobPositionId}
              />
              {formik.errors.jobPositionId && formik.touched.jobPositionId
                ? (
                  <Label basic color='red' pointing>
                    {formik.errors.jobPositionId}
                  </Label>
                )
                : null
              }
            </Form.Field>

            <Form.Field>
              <label className="mt-3">
                Lütfen son başvuru tarihini giriniz
              </label>
              <Input
                id="deadline"
                name="deadline"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.deadline}
              />
              {formik.errors.deadline && formik.touched.deadline
                ? (
                  <Label basic color='red' pointing>
                    {formik.errors.deadline}
                  </Label>
                )
                : null
              }
            </Form.Field>
            <Form.Field>
              <label className="mt-3">
                Lütfen Çalışma şekli giriniz
              </label>
              <Dropdown
                placeholder='Çalışma şekli'
                fluid
                selection
                options={workStyle.map((x, index) => {
                  return { text: x.name, key: x.index, value: x.id }
                })}
                onChange={(event, data) =>
                  formik.setFieldValue("workStyleId", data.value)
                }
                //id="cityId"
                value={formik.values.workStyleId}
              />
              {formik.errors.workStyleId && formik.touched.workStyleId
                ? (
                  <Label basic color='red' pointing>
                    {formik.errors.workStyleId}
                  </Label>
                )
                : null
              }

            </Form.Field>

            <Form.Field>
              <label className="mt-3">
                Lütfen çalışma zamanı özelliğini giriniz
              </label>
              <Dropdown
                placeholder="çalışma zamanı "
                fluids
                selection
                options={workTimeStyle.map((x, index) => {
                  return { text: x.name, key: x.index, value: x.id }
                })}
                onChange={(event, data) =>
                  formik.setFieldValue("workTimeStyleId", data.value)
                }
                //id="cityId"
                value={formik.values.workTimeStyleId}
              />
              {formik.errors.workTimeStyleId && formik.touched.workTimeStyleId
                ? (
                  <Label basic color='red' pointing>
                    {formik.errors.workTimeStyleId}
                  </Label>
                )
                : null
              }
            </Form.Field>



          </div>

        </div>
        <Form.Field>
          <label className="mt-5 text-left">
            Lütfen iş ilanı için açıklama giriniz
          </label>
          <RichTextEditor
            textValue={handleRichTextEditorInput}
            defaultValue={formik.values.description}
          />
          {formik.errors.description && formik.touched.description
                ? (
                  <Label basic color='red' pointing>
                    {formik.errors.description}
                  </Label>
                ) 
                : null
              }
        </Form.Field>

        <Button color='green' type="submit" className="mt-3">İlanı yayınla</Button>
      </div>
    </Form>
  );
};