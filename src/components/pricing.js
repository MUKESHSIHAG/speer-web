import React from 'react';
import Button from './btn';
import Hamburger from './hamburger';
import '../styles/pricing.css'
import Footer from './footer';
import {Link} from 'react-router-dom';

function Pricing(props) {    
    return (
        <div className="pricing">
            <div style={{zIndex:"6"}}>
                <div className="row">
                    <Hamburger />
                </div>
                <h1 className="pricing-txt">pricing</h1>
                <p className="pricing-txt2">Test out our app today! Choose from three subscription Based payment models.</p>
                <div className="row col-md-12">
                    <div className="col-md-4">
                        <p className="col1-txt-basic">BASIC</p>
                        <hr style={{color: "#D34848", backgroundColor: "#D34848", height: 2, width:"20%", marginLeft:"8.5rem", marginBottom:"6%"}}
                        />
                        <p className="col1-txt-plan" style={{color:"#D34848"}}>MONTHLY <br></br><span className="price">$9</span></p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;Very good</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;Amazing</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;Perfect job</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;Love this</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;It's so good</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;Features</p>
                        
                        <Link to="/payment">
                            <button className="button-pricing" style={{background: "#D34848"}}>
                                <span>SELECT</span>
                            </button>  
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <p className="col1-txt-basic" style={{color:"#FFB33F"}}>ADVANCED</p>
                        <hr style={{color: "red", backgroundColor: "#FFB33F", height: 2, width:"20%", marginLeft:"8.5rem", marginBottom:"6%"}}
                        />
                        <p className="col1-txt-plan" style={{color:"#FFB33F"}}>YEARLY <br></br><span className="price">$99</span></p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;Very Very good</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;Even Amazing</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;Perfect job</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;Love this more</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;It's so so good</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;More Features</p>
                        
                        <Link to="/payment">
                            <button className="button-pricing" style={{background: "#FFB33F"}}>
                                <span>SELECT</span>
                            </button>  
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <p className="col1-txt-basic" style={{color:"#1FE1E9"}}>PRO</p>
                        <hr style={{color: "#FFB33F", backgroundColor: "#1FE1E9", height: 2, width:"20%", marginLeft:"8.5rem", marginBottom:"6%"}}
                        />
                        <p className="col1-txt-plan" style={{color:"#1FE1E9"}}>YEARLY <br></br><span className="price">$120</span></p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;Very Very good</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;Even More</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;Perfect job</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;Love this more</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;It's so so good</p>
                        <p className="pricing-music"><i class="fa fa-music" aria-hidden="true"></i>&nbsp;More Features</p>

                        <Link to="/payment">
                            <button className="button-pricing" style={{background: "#1FE1E9"}}>
                                <span>SELECT</span>
                            </button>  
                        </Link>
                    </div>
                </div>
            </div>
            <div style={{marginTop:"10rem"}} className="pricing-perks">
                <div className="row">
                    {/* <Hamburger />               */}
                    <p className="ham-icon-not-expand" style={{color:"white"}}><i class="fa fa-bars" aria-hidden="true"></i>&nbsp;<span>EXP|CON</span></p>                    
                </div>
                <h1 className="perks-txt" style={{marginTop:"-7rem"}}>PERKS</h1>
                <div className="row col-md-12">
                    <div className="col-md-4" style={{}}>
                        <hr style={{color: "#ffffff", backgroundColor: "#ffffff", height: 2, width:"20%", marginLeft:"8.5rem", marginBottom:"6%"}}
                        />
                        <p className="col1-txt" style={{color:"#ffffff"}}>Subscription Payment Model</p>
                        <p className="col1-txt2" style={{color:"black"}}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                    <div className="col-md-4">
                        <hr style={{color: "#ffffff", backgroundColor: "#ffffff", height: 2, width:"20%", marginLeft:"8.5rem", marginBottom:"6%"}}
                        />
                        <p className="col1-txt" style={{color:"#ffffff"}}>No Fee Cancelation Policy</p>
                        <p className="col1-txt2" style={{color:"black"}}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                    <div className="col-md-4">
                        <hr style={{color: "#FFFFFF", backgroundColor: "#FFFFFF", height: 2, width:"20%", marginLeft:"8.5rem", marginBottom:"6%"}}
                        />
                        <p className="col1-txt" style={{color:"#ffffff"}}>Subscription Payment Model</p>
                        <p className="col1-txt2" style={{color:"black"}}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Pricing;