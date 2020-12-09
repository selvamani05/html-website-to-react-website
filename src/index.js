import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"; 
import './assets/layout/styles/layout.css'
/* import './assets/layout/scripts.jquery.backtotop.js'
import './assets/layout/scripts.jquery.min.js'
import './assets/layout/scripts.jquery.mobilemenu.js' */



ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
