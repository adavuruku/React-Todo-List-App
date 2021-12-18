import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ToDoContainer from './functionalComponent/TodoContainer'
import AppContainer from './commentPractice.js/AppContainer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<Fragment>
    <AppContainer/>
    </Fragment>, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
