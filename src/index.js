import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Spy from './Modules/Spy';

ReactDOM.render(
  <React.StrictMode>
    <Spy />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();