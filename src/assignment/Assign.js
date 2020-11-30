import React from "react"
import AssignList from './AssignList'

import {answers, questions} from "../testData"
// const TextToSpeech = require ( "text-to-speech-js" ) ;  


class Assign extends React.Component {
    state = {
        answers, questions,"index":0
    }

    playsound=()=>{
        // TextToSpeech.talk("Hello Beautiful World!");
        console.log("before", this.state.index)
        this.setState({
            "index":this.state.index < 4 ? this.state.index+=1:1
        })
        console.log("after", this.state.index)
    }
render() {
    return (
      <div>
        {/* <AssignList questions={this.state.questions[0]} /> */}
        <div>
            <p>{this.state.questions[this.state.index].question}</p>
            <button onClick={this.playsound}>Yes</button>
            <button>No</button>
        </div>
      </div>
    );
  }
}

export default Assign