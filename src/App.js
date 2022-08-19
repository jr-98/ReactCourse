/* eslint-disable no-console */
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import ForecastExtended from './components/ForecastExtended';
import LocationListContainer from './containers/LocationListContainer';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,co',
  'Mexico,mx',
  'Madrid,es'
];

class App extends Component {
  constructor() {
    super();
    this.state = { city: null };
  }

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title="Weather App" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities} />
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className='detail'>
                  {
                    city &&
                    <ForecastExtended city={city}></ForecastExtended>
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}
// el mapDispatchToProps como normalmente se conoce a esta función, 
//nos permite trabajar directanente con las acciones
export default App;
