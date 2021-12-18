import React from "react"

class NormalComponent extends React.Component {
    handleClick(id){

    }

    render(){
       return( <>
        <button onClick={()=> this.handleClick(20)}/>
        <button onClick={this.handleClick(20)}/>
        <button onClick={this.handleClick.bind(20)}/>
        <button onClick={this.handleClick.bind(this,20)}/>
        </>)
    }
}


export default NormalComponent