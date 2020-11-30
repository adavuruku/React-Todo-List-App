import React from 'react'

//the require paraeter can be one or more
const UpdatedComponent = (OriginalComponent, incrementVal=3)=>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                count:0
            }
        }
        
        componentDidMount (){
            console.log("Hover Mounted")
        }
      incrementCount=()=>{
          this.setState(prevState =>{ 
              return {count : prevState.count + incrementVal}
          })
      }
        render(){
            return <OriginalComponent count={this.state.count}
                incrementCount = {this.incrementCount} {...this.props}
            />
        }
    }
    return NewComponent
}
export default UpdatedComponent