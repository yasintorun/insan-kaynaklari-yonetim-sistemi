import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Icon, Input, Button, Label, Form, Dropdown, TextArea } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService';
import CityService from '../services/cityService';
import JobPositionService from '../services/jobPositionService'
export default function NewJobAdvert() {

  const [cities, setCities] = useState([])
  const [jobPositions, setJobPositions] = useState([])
  useEffect(() => {
    let cityService = new CityService()
    cityService.getCity().then(result => setCities(result.data.data))

    let jobPositionService = new JobPositionService()
    jobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))
  }, [])

  const jobAdvertisementService = new JobAdvertisementService()

  const workOption = [
    { text: 'Uzaktan', key: 1, value: 1 },
    { text: 'Yüzyüze', key: 2, value: 2 }
  ]

  const workTimeOp = [
    { text: 'Sürekli / Tam zamanlı', key: 1, value: 1},
    { text: 'Yarı zamanlı / part time', key: 2, value: 2},
    { text: 'Stajyer', key: 3, value: 3},
    { text: 'Dönemsel / Proje bazlı', key: 4, value: 4},
    { text: 'Serbest zamanlı', key: 5, value: 5}
  ]

  const formik = useFormik({
    initialValues: {
      cityId: 4,
      jobPositionId: 1,
      maxPerson: '',
      minSalary: '',
      maxSalary: '',
      employerId: 2,
      deadline: '',
      description: '',
    },
    onSubmit: values => {
       cities.map(x => console.log(x))
      jobAdvertisementService.add(values).then();
    },
  });
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
                options={cities.map( (x) => {
                  return {text: x.cityName, key:x.id, value: x.id}
                })}
              />
            </Form.Field>

            <Form.Field>
              <Label className="mt-3">
                Lütfen iş pozisyonunu giriniz
              </Label>
          {/* <Input placeholder='iş pozisyonu'
                id="jobPosition"
                name="jobPosition"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.jobPosition}
              />*/}
              <Dropdown
                placeholder='İş pozisyonunu seçiniz'
                fluid
                selection
                search
                multiple  
                options={jobPositions.map( (x) => {
                  return {text: x.jobName, key:x.id, value: x.id}
                })}
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
                options={workOption}
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
                options={workTimeOp}
              />

            </Form.Field>

            <Form.Field>
              <Label className="mt-3">
                Lütfen iş ilanı için açıklama giriniz
              </Label>
              <TextArea
              rows={10}
                id="description"
                name="description"
                type="textarea"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </Form.Field>

          </div>

        </div>



        <Button color='green' type="submit" className="mt-3">İlanı yayınla</Button>
      </div>
    </Form>
  );
};