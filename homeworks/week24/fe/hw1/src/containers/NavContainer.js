import React from 'react';
import Nav from '../components/nav'
import { getWeatherData } from '../actions'
import { connect } from 'react-redux'

const NavContainer = props => {
    return <Nav {...props} />
}

const mapStateToProps = state => {
    return {
        weatherData: state.getWeatherReducer.weatherData
    }
}

const mapDispatchToProps = {
    getWeatherData
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer)