import React from "react"
import UpdatedComponent from './withCounter'
class ClickCounter extends React.Component {
    componentDidMount (){
        console.log("Clickk Mounted")
    }
  //note that name props is coming from
        //index.js => withComponent(hoc) => then here
  render() {
    const {count, incrementCount, name} = this.props
   return (
   <button  onClick={incrementCount}> {name} Clicked {count} times</button>
        )
        // return (
        //     <button  onClick={this.props.handleClickProp}>Clicked {this.props.clickCountProp} times</button>
        // )
  }
}

// export default ClickCounter
// export default UpdatedComponent(ClickCounter)
export default UpdatedComponent(ClickCounter)
