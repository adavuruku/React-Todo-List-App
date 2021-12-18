import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ToDoContainer from './components/TodoContainer'
import ToDoContainer from './functionalComponent/TodoContainer'
// import Form from './learning/Form'
// import DifferentiateThis from './learning/DifferentiateThis'
import ClickCounter from './hoc/ClickCounter'
import HoverCounter from './hoc/HoverCounter'
// import ContainerState from './hoc/ContainerState'

import Norm from './learning/NormalComponent'
import Game from './tictoe/Game'


import ShalloWCompareComponent from './purecomponent/index'
import Assign from './assignment/Assign'
import RecorderContainer from './recorder/RecorderContainer'
import reportWebVitals from './reportWebVitals';


const element = <h1>Hello from Create React App</h1>

//in hoc any props pass from here goes to 
// the hoc component - the hoc component then pass it to 
// the parameter components

ReactDOM.render(<Fragment>
    <HoverCounter name="Sherif"/>
    <ClickCounter/>
    <Norm/>
    <Tictoe/>
    {/* <Assign/> */}
    <ShalloWCompareComponent/>
    </Fragment>, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
