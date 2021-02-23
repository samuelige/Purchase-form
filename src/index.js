import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Reset/reset.css'
import App from './App';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Redux/Store/store';


ReactDOM.render(
  <Provider store = {store}>
    <Router>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

