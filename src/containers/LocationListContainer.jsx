import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from '../components/LocationList';
// import { setSelectedCity, setWeather } from '../actions'
import * as actions from '../actions'
import { getCity, getWeatherCities } from '../reducers'

class LocationListContainer extends Component {
    componentDidMount() {
        // this.props.setWeather(this.props.cities);
        // this.props.setSelectedCity(this.props.city);
        const { setWeather, setSelectedCity, cities, city } = this.props
        setWeather(cities)
        setSelectedCity(city)

    }
    handleSelectedLocation = city => {
        //Establecer la accion al payload de store//Disparador de acciones 
        this.props.setSelectedCity(city)
    }
    render() {
        return (
            <LocationList
                cities={this.props.citiesWeather}
                onSelectedLocation={this.handleSelectedLocation}
            />
        )
    }
}
LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired
}

// const mapDispatchToPropsActions = dispatch => ({
//     setSelectedCity: value => dispatch(setSelectedCity(value)),
//     setWeather: cities => dispatch(setWeather(cities)),
// })
//El bindActionCreators es una propieda de reduxc que recibe como paramettros actions y dispatch
//fonde actions en el numero de ctciones que tenemos en la clase y dispact es un objeto que contiene 
//el valor de la actrion con el mismo nombre que la accion, lo cual no permite reducir codigo
const mapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch)

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
})
export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer)
