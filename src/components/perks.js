import React, { Component } from 'react';
import Button from './btn';
import Hamburger from './hamburger';
import '../styles/perks.css'

class Perks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    hideHamburger = (e) => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        let data = {
        btnTxt:"TRY IT NOW",
        btnColor:"#D34848"
        }
        return (
            <div className="perks">
                <div className="row">                    
                    <div style={{overflow:"hidden"}}>   
                        {this.state.show ?              
                            <div className="hamburger-perks">
                                <p className="ham-icon-perks"><i class="fa fa-bars" aria-hidden="true" onClick={() => this.hideHamburger()}></i>&nbsp;<span>EXP|CON</span></p>
                                <p className="ham-txt1-perks">WHAT IS IT</p>
                                <p className="ham-txt2-perks" style={{color: "black"}}>PERKS</p>
                                <p className="ham-txt2-perks" >PRICING</p>
                            </div> :
                            <p className="ham-icon-not-expand" style={{color:this.props.color}}><i class="fa fa-bars" aria-hidden="true" onClick={() => this.hideHamburger()}></i>&nbsp;<span>EXP|CON</span></p>                    
                        }                
                    </div>
                    <Button {...data}/>                 
                </div>
                <h1 className="perks-txt">PERKS</h1>
                <div className="row col-md-12">
                    <div className="col-md-4">
                        <hr style={{color: "#D34848", backgroundColor: "#D34848", height: 2, width:"20%", marginLeft:"8.5rem", marginBottom:"6%"}}
                        />
                        <p className="col1-txt">Subscription Payment Model</p>
                        <p className="col1-txt2 text-light">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                    <div className="col-md-4">
                        <hr style={{color: "red", backgroundColor: "#1FE1E9", height: 2, width:"20%", marginLeft:"8.5rem", marginBottom:"6%"}}
                        />
                        <p className="col1-txt" style={{color:"#1FE1E9"}}>No Fee Cancelation Policy</p>
                        <p className="col1-txt2 text-light">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                    <div className="col-md-4">
                        <hr style={{color: "#FFB33F", backgroundColor: "#FFB33F", height: 2, width:"20%", marginLeft:"8.5rem", marginBottom:"6%"}}
                        />
                        <p className="col1-txt" style={{color:"#FFB33F"}}>Subscription Payment Model</p>
                        <p className="col1-txt2 text-light">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Perks;