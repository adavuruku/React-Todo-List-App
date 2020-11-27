import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import ToDoContainer from './components/TodoContainer'
// import ToDoContainer from './componentsHook/TodoContainer'
// import Form from './learning/Form'
// import Assign from './assignment/Assign'
import RecorderContainer from './recorder/RecorderContainer'
import reportWebVitals from './reportWebVitals';


const element = <h1>Hello from Create React App</h1>

ReactDOM.render(<RecorderContainer/>, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
