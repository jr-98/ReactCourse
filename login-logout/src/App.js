import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import './Styles/foundation.min.css';
import './Styles/custom.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: 'Chatboot',
      home: false,
    }
  }
  render() {
    return (
      <div className='off-canvas-wrapper'>
        <div className='off-canvas-wrapper-inner' data-off-canvas-wrapper>
          <div className='off-canvas-content' data-aff-canvas-content>
            <Header name={this.state.appName} />
            <Profile />
          </div>
        </div>
      </div>
    );
  }
}
export default App;


