import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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

    const {filter} = useSelector(state => state.jobAdvertFilter)
    
    useEffect(() => {
        handleApplyFilterClick()
        let cityService = new CityService()
        cityService.getCity().then(result => setCities(result.data.data))

        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))

        let workStyleService = new WorkStyleService()
        workStyleService.getWorkStyles().then(result => setWorkStyle(result.data.data))

        let workTimeStyleService = new WorkTimeStyleService()
        workTimeStyleService.getWorkTimeStyles().then(result => setWorkTimeStyle(result.data.data))
        //dispatch(ApplyFilter(filter))
       // filter = filter;
        //console.log("filteeer")
    }, [])

    const dispatch = useDispatch()
    
    function checkIndexData(data, checked, value) {
        if (checked)
            data.push(value)
        else {
            let idx = data.indexOf(value)
            if (idx > -1) {
                data.splice(idx, 1)
            }
        }
    }

    ///Filter elemanlarının değerlerini sakla
    const handleChangeCity = (e, { value }) => {
        filter.cityId = value
    }

    const handleChangeJobPosition = (e, { value, checked }) => {
        checkIndexData(filter.jobPositionId, checked, value)
    }

    const handleChangeWorkStyle = (e, { value, checked }) => {
        checkIndexData(filter.workStyleId, checked, value)
    }

    const handleChangeWorkTimeStyle = (e, { value, checked }) => {
        checkIndexData(filter.workTimeStyleId, checked, value)
    }

    const handleChangeFavorite = (e, { value, checked }) => {
        filter.isFavorite = checked
    }


    const handleApplyFilterClick = () => {
        clickEvent(filter)
        dispatch(ApplyFilter(filter))
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
                defaultValue = {filter.cityId}
                options={cities.map((x, index) => {
                    return { text: x.cityName, key: x.index, value: x.id }
                })}
                onChange={handleChangeCity}
               // value={filter?.cityId}
            />

            <h3 className="mt-5">İş pozisyonu</h3>
            {
                jobPositions.map(jobPos => (
                    <Checkbox
                        label={jobPos.jobName}
                        className="mt-4 d-block"
                        defaultChecked={filter.jobPositionId?.indexOf(jobPos.id) >= 0}
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
                        defaultChecked={filter.workStyleId?.indexOf(style.id) >= 0}
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
                        defaultChecked={filter.workTimeStyleId?.indexOf(style.id) >= 0}
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
