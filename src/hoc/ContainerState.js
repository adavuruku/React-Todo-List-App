import React from 'react'

import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

class ContainerState extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            countClick:0,
            countHover:0
        }
    }

    incrementClickCount=()=>{
        this.setState(prevState =>{ 
            return {countClick : prevState.countClick + 1}
        })
    }
    incrementHowerCount=()=>{
        this.setState(prevState =>{ 
            return {countHover : prevState.countHover + 1}
        })
    }

    render(){
        return(
            <div>
                <ClickCounter handleClickProp = {this.incrementClickCount} clickCountProp = {this.state.countClick}/>
                <HoverCounter handleHoverClickProp = {this.incrementHowerCount} hoverCountProp = {this.state.countHover}/>
            </div>
        )
    }
}

export default ContainerState