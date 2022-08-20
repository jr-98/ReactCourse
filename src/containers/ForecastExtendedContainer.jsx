import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';
import { getForecasDataFromCities } from '../reducers/cities'
class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            city &&
            <ForecastExtended city={city} forecastData={forecastData} />
        );
    }
}
ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
}

// const mapStateToProps = state => ({
//     city: state.city
// })
const mapStateToProps = state => ({ city: state.city, forecastData: getForecasDataFromCities(state.cities, state.city) })
export default connect(mapStateToProps, null)(ForecastExtendedContainer);
