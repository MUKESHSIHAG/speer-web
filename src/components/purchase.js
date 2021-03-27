import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/purchase.css';
import Hamburger from './hamburger';

class Purchase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    showHideHamburger = (e) => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <div className="purchase">     
                {this.state.show ?                                         
                    <div className="hamburger-purchase">
                        <p className="ham-icon-purchase"><i class="fa fa-bars" aria-hidden="true" onClick={() => this.showHideHamburger()}></i>&nbsp;<span>EXP|CON</span></p>
                        <p className="ham-txt1-purchase">WHAT IS IT</p>
                        <p className="ham-txt2-purchase">PERKS</p>
                        <p className="ham-txt2-purchase">PRICING</p>
                    </div> :
                    <p className="ham-icon-not-expand"><i class="fa fa-bars" aria-hidden="true" onClick={() => this.showHideHamburger()}></i>&nbsp;<span>EXP|CON</span></p>                    
                }
                <div className="row col-md-12">
                    <div className="col-md-8">
                        <p className="purchase-txt">GET EXP|CON NOW</p>
                        <p className="purchase-txt2">Purchase and download the app.</p>
                    </div>
                    <div className="col">
                        <Link to="/pricing">
                            <button className="button-purchase">
                                <span>TRY IT NOW</span>
                            </button>  
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Purchase;