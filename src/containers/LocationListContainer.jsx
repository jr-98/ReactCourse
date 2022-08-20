import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from '../components/LocationList';
import { setSelectedCity, setWeather } from '../actions'
class LocationListContainer extends Component {
    componentDidMount() {
        this.props.setWeather(this.props.cities)
    }
    handleSelectedLocation = city => {
        //Establecer la accion al payload de store//Disparador de acciones 
        this.props.setCity(city)
    }
    render() {
        return (
            <LocationList
                cities={this.props.cities}
                onSelectedLocation={this.handleSelectedLocation}
            />
        )
    }
}
LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
}

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
})

export default connect(null, mapDispatchToPropsActions)(LocationListContainer)
