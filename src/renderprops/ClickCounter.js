import React from "react"
import UpdatedComponent from './withCounter'
class ClickCounter extends React.Component {
    
  
  render() {
    const {count, incrementCount, name} = this.props
   return (
   <button  onClick={this.incrementCount}> Clicked {count} times</button>
        )
        // return (
        //     <button  onClick={this.props.handleClickProp}>Clicked {this.props.clickCountProp} times</button>
        // )
  }
}

// export default ClickCounter
// export default UpdatedComponent(ClickCounter)
export default UpdatedComponent(ClickCounter)
