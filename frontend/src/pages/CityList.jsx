import React, { Component } from 'react'
import CityService from '../services/cityService'

export default class CityList extends Component {

    constructor(props) {
        super(props)
        this.state = {cities: []}

        let cityService = new CityService()
        cityService.getCity().then(result => this.setState({cities: result.data.data}))
    }


    get() {
        return this.state.cities;
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}


