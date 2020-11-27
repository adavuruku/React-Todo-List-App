import React from "react"
import {Recorder} from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'

import {answers, questions} from "../testData"
// const TextToSpeech = require ( "text-to-speech-js" ) ;  


class RecorderContainer extends React.Component {
    state = {
        audioDetails: {
            url: null,
            blob: null,
            chunks: null,
            duration: {
              h: 0,
              m: 0,
              s: 0
            }
          }
    }
    handleAudioStop(data){
        console.log(data)
        this.setState({ audioDetails: data });
    }
    handleAudioUpload(file) {
        console.log(file);
    }
    handleRest() {
        const reset = {
          url: null,
          blob: null,
          chunks: null,
          duration: {
            h: 0,
            m: 0,
            s: 0
          }
        };
        this.setState({ audioDetails: reset });
      }

    playsound=()=>{
        // TextToSpeech.talk("Hello Beautiful World!");
        this.setState({
            "index":this.state.index < 4 ? this.state.index+=1:1
        })
    }
render() {
    return (
        <Recorder
            record={true}
            title={"New recording"}
            audioURL={this.state.audioDetails.url}
            showUIAudio
            handleAudioStop={data => this.handleAudioStop(data)}
            handleAudioUpload={data => this.handleAudioUpload(data)}
            handleRest={() => this.handleRest()} 
        />
    );
  }
}

export default RecorderContainer