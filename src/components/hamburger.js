import React, { Component } from 'react';
import '../styles/hamburger.css'

class Hamburger extends Component {
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
        return (
            <div>   
                {this.state.show ?              
                    <div className="hamburger">
                        <p className="ham-icon"><i class="fa fa-bars" aria-hidden="true" onClick={() => this.hideHamburger()}></i>&nbsp;<span>EXP|CON</span></p>
                        <p className="ham-txt1">WHAT IS IT</p>
                        <p className="ham-txt2">PERKS</p>
                        <p className="ham-txt2">PRICING</p>
                    </div> :
                    <p className="ham-icon-not-expand" style={{color:this.props.color}}><i class="fa fa-bars" aria-hidden="true" onClick={() => this.hideHamburger()}></i>&nbsp;<span>EXP|CON</span></p>                    
                }                
            </div>
        );
    }
}

export default Hamburger;