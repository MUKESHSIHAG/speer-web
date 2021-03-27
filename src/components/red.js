import React, { Component } from 'react';
import Button from './btn';
import '../styles/red.css';
import dj1 from '../assets/dj1.png';
import dj2 from '../assets/dj2.png';
import Hamburger from './hamburger';

let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();

osc1.start();  

class Red extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false
        }
    }
    setPlayMusic = () => {
        console.log("je");
        this.setState({
            play: !this.state.play
        }, () => {
            console.log(this.state.play);
            this.playStopMusic()
        })
    }
    playStopMusic = () => {
        console.log("in play msuci");
        if(this.state.play) {
            osc1.connect(gain1);
            gain1.connect(out);
        }
        else {
            osc1.disconnect(gain1);
            gain1.disconnect(out);
        }
    }
    render() {
        
        let data = {
            btnTxt:"TRY IT NOW",
            btnColor:"#D34848"
        }
        return (
            <div className='red' style={{zIndex:"30"}}>
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