import React from 'react'

class Timer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            play: false,
            runningTime: 0,
            seconds:0,
            hours:0,
            minutes:0
        }
      
        setInterval(
            () => {
            if(this.state.play){ 
            this.setState({
                runningTime: this.state.runningTime + 1000
            })
            this.msToHMS(this.state.runningTime)
        } 
        },
            1000
            )
        }
    
    
    msToHMS = ( ms ) => {
        this.setState({
        hours: Math.floor(ms / 3600000),
        minutes: Math.floor((ms - (this.state.hours * 3600000)) / 60000),
        seconds: parseInt((ms - (this.state.hours * 3600000) - (this.state.minutes * 60000)) / 1000)
        })
    }

    Click = () => {
        this.setState( {play: !this.state.play} )
    }
  
    Reset = () => {
        this.setState({ play:false, runningTime: 0, seconds:0, hours:0, minutes:0 });
    };
    

    render() {
    return (<div className="container">
                <div className="full-timer-container">
                    <div className="time-container">
                        <p className="timer-form">{String(this.state.hours).padStart(2, '0')}:</p>
                        <p className="timer-comment">hours</p>
                    </div>
                    <div className="time-container">
                        <p className="timer-form">{String(this.state.minutes).padStart(2, '0')}:</p>
                        <p className="timer-comment">Minute</p>
                    </div>
                    <div className="time-container">
                        <p className="timer-form">{String(this.state.seconds).padStart(2, '0')}</p>
                        <p className="timer-comment">second</p>
                    </div>
                </div>
                <div>
                    <button className="btn" onClick={this.Click}>{this.state.play ? 'Stop' : 'Start'}</button>
                    <button className="btn" onClick={this.Reset}>Reset</button>
                </div>
            </div>
)
}
}

export default Timer;