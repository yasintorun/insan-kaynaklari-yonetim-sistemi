import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Input, Button, Label, Form, Dropdown, TextArea } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService';
import CityService from '../services/cityService';
import JobPositionService from '../services/jobPositionService'
import WorkStyleService from '../services/workStyleService';
import WorkTimeStyleService from '../services/workTimeService';
import RichTextEditor from '../components/RichTextEditor/RichTextEditor';

export default function NewJobAdvert() {


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
  }, [])

  const jobAdvertisementService = new JobAdvertisementService()




  const formik = useFormik({
    initialValues: {
      cityId: '',
      jobPositionId: '',
      maxPerson: '',
      minSalary: '',
      maxSalary: '',
      employerId: 2,
      deadline: '',
      description: '',
      workStyleId: 1,
      workTimeStyleId: 2
    },
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
      <div className="bordered shadow mb-5 w-75">
        <div className="row">
          <div className="col-md-5">
            <Form.Field>
              <Label className="mt-3">
                Lütfen Şehir seçiniz:
              </Label>
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
                  formik.setFieldValue("cityId", data.value)
                }
                //id="cityId"
                value={formik.values.cityId}
              />
            </Form.Field>



            <Form.Field>
              <Label className="mt-3">
                Lütfen kapasite giriniz
              </Label>
              <Input placeholder='Kontenjan'
                id="maxPerson"
                name="maxPerson"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.maxPerson}
              />
            </Form.Field>

            <Form.Field>
              <Label className="mt-3">
                Lütfen minimum maaşı giriniz
              </Label>
              <Input placeholder='Minimum maaş'
                id="minSalary"
                name="minSalary"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.minSalary}
              />
            </Form.Field>

            <Form.Field>
              <Label className="mt-3">
                Lütfen maksimum maaşı giriniz
              </Label>
              <Input placeholder='maksimum maaş'
                id="maxSalary"
                name="maxSalary"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.maxSalary}
              />
            </Form.Field>


          </div>

          <div className="col-md-2"></div>
          <div className="col-md-5">

            <Form.Field>
              <Label className="mt-3">
                Lütfen iş pozisyonunu giriniz
              </Label>
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
            </Form.Field>

            <Form.Field>
              <Label className="mt-3">
                Lütfen son başvuru tarihini giriniz
              </Label>
              <Input
                id="deadline"
                name="deadline"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.deadline}
              />
            </Form.Field>
            <Form.Field>
              <Label className="mt-3">
                Lütfen Çalışma şekli giriniz
              </Label>
              <Dropdown
                placeholder='Çalışma şekli'
                fluid
                selection
                options={workStyle.map((x, index) => {
                  return { text: x.name, key: x.index, value: x.id }
                })}
              />

            </Form.Field>

            <Form.Field>
              <Label className="mt-3">
                Lütfen çalışma zamanı özelliğini giriniz
              </Label>
              <Dropdown
                placeholder="çalışma zamanı "
                fluids
                selection
                options={workTimeStyle.map((x, index) => {
                  return { text: x.name, key: x.index, value: x.id }
                })}
              />

            </Form.Field>



          </div>

        </div>
        <Form.Field>
          <Label className="mt-3">
            Lütfen iş ilanı için açıklama giriniz
          </Label>
          <RichTextEditor
            textValue={handleRichTextEditorInput}
          />
        </Form.Field>

        <Button color='green' type="submit" className="mt-3">İlanı yayınla</Button>
      </div>
    </Form>
  );
};