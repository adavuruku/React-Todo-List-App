import React from 'react'
import UpdatedComponent from './withCounter'
class HoverCounter extends React.Component{
    componentDidMount (){
            console.log("Hover Mounted")
        }

        //note that name props is coming from
        //index.js => withComponent(hoc) => then here
  render() {
      const {count, incrementCount, name} = this.props
   return (
       <div>
           <h1 onMouseOver={incrementCount}> {name} Hover {count} times</h1>
       </div>
        )
    // return(
    //     <div>
    //         <h1 onMouseOver={this.props.handleHoverClickProp}>Hover {this.props.hoverCountProp} times</h1>
    //   </div>
    // )
  }
}

// export default HoverCounter 
// export default UpdatedComponent(HoverCounter)
export default UpdatedComponent(HoverCounter,5)