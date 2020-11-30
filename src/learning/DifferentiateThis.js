import React, {useState} from "react"
class DifferentiateThis extends React.Component {
    shoot = () => {
      console.log("From Arrow Function - ",this);
      /*
      The 'this' keyword refers to the component object
      */
    }
    handleShoot(){
      console.log("From Function - ",this);
    }
    render() {
      return (
        <div>
          <button onClick={this.shoot}>Take the shot!</button>
          <button onClick={this.handleShoot}>Take Function shot!</button>
        </div>
        
      );
    }
  }
  

  export default DifferentiateThis