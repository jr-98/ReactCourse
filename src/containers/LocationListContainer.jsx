import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from '../components/LocationList';
import { setSelectedCity, setWeather } from '../actions'
import { getCity, getWeatherCities } from '../reducers'

class LocationListContainer extends Component {
    componentDidMount() {
        // this.props.setWeather(this.props.cities);
        // this.props.setCity(this.props.city);
        const { setWeather, setCity, cities, city } = this.props
        setWeather(cities)
        setCity(city)

    }
    handleSelectedLocation = city => {
        //Establecer la accion al payload de store//Disparador de acciones 
        this.props.setCity(city)
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
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired
}

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),

})
const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
})
export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer)
