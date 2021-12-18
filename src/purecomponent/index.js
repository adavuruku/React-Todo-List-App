import React, { Component } from "react"
class ShalloWCompareComponent extends React.PureComponent {
    constructor() {
      super();
      this.state = {
        userArray: [1, 2, 3, 4, 5]
      }
      setInterval(() => {
        
        // Here we are creating the new Array Object during setState using "Spread" Operator
        
        this.setState({
          userArray: [...this.state.userArray, 6]
        });
      }, 1000);
    }
    
    render() {
      return <b>Array Length is: {this.state.userArray.length}</b>
    }
  }
  
export default ShalloWCompareComponent