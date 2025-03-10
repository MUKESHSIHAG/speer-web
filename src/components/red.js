import React, { Component } from 'react';
import Button from './btn';
import '../styles/red.css';
import dj1 from '../assets/dj1.png';
import dj2 from '../assets/dj2.png';
import Hamburger from './hamburger';

let actx = new AudioContext();
let out = actx.destination;
var osc = null;
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();

// osc1.start();  

class Red extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false
        }
    }
    setPlayMusic = () => {
        this.setState({
            play: !this.state.play
        }, () => {
            console.log(this.state.play);
            this.playStopMusic()
        })
    }
    playStopMusic = () => {
        if(this.state.play) {
            osc = actx.createOscillator();
            osc.frequency.value = 1000;
    
            osc.start(actx.currentTime);
            osc.connect(actx.destination);
        }
        else {
            osc.stop(actx.currentTime);
            osc.disconnect(actx.destination);
            osc = null;
        }
    }
    render() {
        
        let data = {
            btnTxt:"TRY IT NOW",
            btnColor:"#D34848"
        }
        return (
            <div className='red'>
                <div className="row">
                    <Hamburger />
                    <Button {...data}/>
                </div>
                <div class="row">
                    <div id="cursor"></div>
                    <div class="column">
                        <p className="first-half-sup">SUPERIOR SOUND</p>
                        <p className="first-half-exp">Experience live versions of your favourite songs.</p>
                        
                        <button className="btn">
                            <span>SEE DEMO</span>
                        </button>              
                    </div>
                    <div class="column-right">
                        <div>
                            <img src={dj1} className="img-dj1" alt="dj1" onClick={() => this.setPlayMusic()}></img>
                            <img src={dj2} className="img-dj2" alt="dj2" onClick={() => this.setPlayMusic()}></img>
                        </div>
                    </div>
                </div>                    
            </div>
        );
    }
}

export default Red;