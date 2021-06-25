import React, { useEffect, useState } from 'react'
import { Label, Dropdown, Segment, Checkbox, Button } from 'semantic-ui-react'
import CityService from '../services/cityService';
import JobPositionService from '../services/jobPositionService'
import WorkStyleService from '../services/workStyleService';
import WorkTimeStyleService from '../services/workTimeService';

export default function JobAdvertFiltering({ clickEvent }) {

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

    ///Filter elemanlarının değerlerini sakla
    const [cityIndexs, setCityIndexs] = useState([])
    const handleChangeCity = (e, { value }) => {
        setCityIndexs(value)
    }

    const [jobPosIndexs, setJobPosIndexs] = useState([])
    const handleChangeJobPosition = (e, { value, checked }) => {
        if (checked)
        jobPosIndexs.push(value)
        else {
            let idx = jobPosIndexs.indexOf(value)
            if (idx > -1) {
                jobPosIndexs.splice(idx, 1)
            }
        }
    }

    const [workStyleIndexs, setWorkStyleIndexs] = useState([])
    const handleChangeWorkStyle = (e, { value, checked }) => {
        if (checked)
            workStyleIndexs.push(value)
        else {
            let idx = workStyleIndexs.indexOf(value)
            if (idx > -1) {
                workStyleIndexs.splice(idx, 1)
            }
        }
    }

    const [workTimeStyleIndexs, setWorkTimeStyleIndexs] = useState([])
    const handleChangeWorkTimeStyle = (e, { value, checked }) => {



        if (checked)
            workTimeStyleIndexs.push(value)
        else {
            let idx = workTimeStyleIndexs.indexOf(value)
            if (idx > -1) {
                workTimeStyleIndexs.splice(idx, 1)
            }
        }
    }

    return (
        <div>
            <Segment color="teal" raised className="w-100">
                <Label attached="top" size="large">Şehir</Label>
                <Dropdown
                    placeholder='Şehir seçiniz'
                    fluid
                    selection
                    search
                    multiple
                    options={cities.map((x, index) => {
                        return { text: x.cityName, key: x.index, value: x.id }
                    })}
                    onChange={handleChangeCity}
                    value={cityIndexs}
                />
            </Segment>
            <Segment color="teal" raised className="w-100">
                <Label attached="top" size="large">İş Pozisyonu</Label>
                {
                    jobPositions.map(jobPos => (
                        <Checkbox
                            label={jobPos.jobName}
                            className="mt-4 d-block"
                            onChange={handleChangeJobPosition}
                            value={jobPos.id}
                        />
                    ))
                }
            </Segment>
            <Segment color="teal" raised className="w-100">
                <Label attached="top" size="large">Çalışma Şekli</Label>
                {
                    workStyle.map(style => (
                        <Checkbox
                            label={style.name}
                            className="mt-4 d-block"
                            onChange={handleChangeWorkStyle}
                            value={style.id}
                        />
                    ))
                }
            </Segment>
            <Segment color="teal" raised className="w-100">
                <Label attached="top" size="large">Çalışma zamanı</Label>
                {
                    workTimeStyle.map(style => (
                        <Checkbox
                            label={style.name}
                            className="mt-4 d-block"
                            onChange={handleChangeWorkTimeStyle}
                            value={style.id}
                        />
                    ))
                }
            </Segment>
            <Button
                type="button"
                fluid positive
                onClick={() => clickEvent({ cityId: cityIndexs, jobPositionId: jobPosIndexs, workStyleId: workStyleIndexs, workTimeStyleId: workTimeStyleIndexs })}
            >
                Filtrele
            </Button>
        </div>
    )
}
