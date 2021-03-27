import React from 'react';
import Hamburger from './hamburger';
import Footer from './footer';
import '../styles/payment.css';

function Payment(props) {
    return (
        <div className="Payment">            
            <div className="row">
                <Hamburger color="black"/>
            </div>
            <h1 className="payment-txt">Payment</h1>
            <h1 className="plan-select">1. Select your plan</h1>
            <div className="row col-md-12">
                <p className="basic-radio-btn" style={{color: "#D24848"}}><input type="radio"></input> BASIC</p>
                <p className="basic-radio-btn" style={{color: "#FFB33F"}}><input type="radio" checked></input> ADVANCED</p>
                <p className="basic-radio-btn" style={{color: "#1FE1E9"}}><input type="radio"></input> PRO</p>
            </div>
            <div className="row col-md-12" style={{marginTop: "5rem"}}>
                <div className="col-md-6">
                    <h1 className="plan-select">2. Billing Information</h1>                    
                    <div style={{marginLeft: "10rem"}}>
                        <label for="fname" className="form-label">FULL NAME</label><br></br>
                        <input type="text" className="col-md-9 form-input" id="fname" name="fname"></input><br></br>
                        <label for="address" className="form-label ">BILLING ADDRESS</label><br></br>
                        <input type="text" id="address" className="col-md-9 form-input" name="address"></input><br></br>
                        <div className="row">
                            <div className="col">
                                <label for="city" className="form-label">CITY</label><br></br>
                                <input type="text" className="col-md-9 form-input" id="city" name="city"></input><br></br>
                            </div> 
                            <div className="col">
                                <label for="postal" className="form-label" style={{marginLeft: "-4.4rem"}}>POSTAL CODE</label><br></br>
                                <input type="text" id="address" className="col-md-9 form-input" name="postal" style={{marginLeft: "-4.4rem"}}></input><br></br>
                            </div>
                        </div>
                        <label for="country" className="form-label">COUNTRY</label><br></br>
                        <select id="country" name="country" className="col-md-9 form-input">
                            <option value=""></option>
                            <option value="india">INDIA</option>
                            <option value="usa">USA</option>
                            <option value="england">ENGLAND</option>
                        </select>
                    </div>
                    <b><p className="policy col-md-9">By continuing, I acknowledge that I’ve read and agree to the Terms of Service & Privacy Policy.</p></b>
                    
                    <button className="button-payment">
                            <span>DOWNLOAD</span>
                    </button>  
                </div>
                <div className="col">
                    <h1 className="plan-select">3. Credit Card Information</h1>
                    <div style={{marginLeft: "10rem"}}>
                        <label for="cname" className="form-label">CARDHOLDER’S NAME</label><br></br>
                        <input type="text" className="col-md-9 form-input" id="cname" name="cname"></input><br></br>
                        <label for="cnum" className="form-label ">CARD NUMBER</label><br></br>
                        <input type="text" id="cnum" className="col-md-9 form-input" name="cnum"></input><br></br>
                        <div className="row">
                            <div className="col">
                                <label for="country" className="form-label">EXPIRY MONTH</label><br></br>
                                <select id="country" name="country" className="col-md-9 form-input">
                                    <option value=""></option>
                                    <option value="jan">JAN</option>
                                    <option value="feb">FEB</option>
                                    <option value="march">MARCH</option>
                                </select>
                            </div> 
                            <div className="col">
                                <label for="country" className="form-label" style={{marginLeft: "-4.4rem"}}>EXPIRY YEAR</label><br></br>
                                <select id="country" name="country" style={{marginLeft: "-4.4rem"}} className="col-md-9 form-input">
                                    <option value=""></option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                </select>
                            </div>
                        </div>
                        <label for="country" className="form-label">COUNTRY</label><br></br>
                        <select id="country" name="country" className="col-md-9 form-input">
                            <option value=""></option>
                            <option value="india">INDIA</option>
                            <option value="usa">USA</option>
                            <option value="england">ENGLAND</option>
                        </select>
                    </div>
                </div>
            </div>
            <div style={{marginTop:"20rem"}}>
                <Footer />
            </div>
        </div>
    );
}

export default Payment;