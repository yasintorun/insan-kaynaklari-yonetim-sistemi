import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Label, Dropdown, Segment, Checkbox, Button } from 'semantic-ui-react'
import CityService from '../services/cityService';
import JobPositionService from '../services/jobPositionService'
import WorkStyleService from '../services/workStyleService';
import WorkTimeStyleService from '../services/workTimeService';
import { ApplyFilter } from '../Store/actions/jobAdvertFilterActions';

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

    const dispatch = useDispatch()

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

    
    const [isFavorite, setIsFavorite] = useState(false)
    const handleChangeFavorite = (e, { value, checked }) => {
        setIsFavorite(checked)
    }


    const handleApplyFilterClick = () => {

        

        const filterOption = { cityId: cityIndexs, jobPositionId: jobPosIndexs, workStyleId: workStyleIndexs, workTimeStyleId: workTimeStyleIndexs, isFavorite: isFavorite }
        
        if (filterOption.cityId.length == 0)
            filterOption.cityId = null
        if (filterOption.jobPositionId.length == 0)
            filterOption.jobPositionId = null
        if (filterOption.workStyleId.length == 0)
            filterOption.workStyleId = null
        if (filterOption.workTimeStyleId.length == 0)
            filterOption.workTimeStyleId = null
        if(filterOption.isFavorite)
            filterOption.userIdForFavorite = 1

        dispatch(ApplyFilter(filterOption))

        //clickEvent(filterOption)

    }

    return (
        <div className="rounded-w bg-light-blue p-5">

            <h3>Şehir</h3>
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

            <h3 className="mt-5">İş pozisyonu</h3>
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
            <h3 className="mt-5">Çalışma Şekli</h3>
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
            <h3 className="mt-5">Çalışma zamanı</h3>
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
            <h3 className="mt-5">İlan Özellikleri</h3>
            {
                <Checkbox
                    label="Favorilere eklediğim ilanlar"
                    className="mt-4 d-block"
                    onChange={handleChangeFavorite}
                    value={1}
                />
            }

            <Button
            className="mt-5"
                type="button"
                fluid positive
                onClick={() => handleApplyFilterClick()}
            >
                Filtrele
            </Button>
        </div>
    )
}
