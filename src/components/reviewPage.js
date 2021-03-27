import React, { Component } from 'react';
import Review from './review';
import { Link } from 'react-router-dom';
import '../styles/reviewPage.css'
import ss1 from '../assets/ss1.png';
import ss2 from '../assets/ss2.png';

class ReviewPage extends Component {
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
      <div className="review-page">
        <div className="row col-md-12">
          <div className="col-md-8">
              <div>   
                  {this.state.show ?              
                      <div className="hamburger-review">
                          <p className="ham-icon-review"><i class="fa fa-bars" aria-hidden="true" onClick={() => this.hideHamburger()}></i>&nbsp;<span>EXP|CON</span></p>
                          <p className="ham-txt1-review">WHAT IS IT</p>
                          <p className="ham-txt2-review">PERKS</p>
                          <p className="ham-txt2-review">PRICING</p>
                      </div> :
                      <p className="ham-icon-not-expand" style={{color:this.props.color}}><i class="fa fa-bars" aria-hidden="true" onClick={() => this.hideHamburger()}></i>&nbsp;<span>EXP|CON</span></p>                    
                  }                
              </div>
          </div>
          <div className="col">
            <Link to="/pricing">
              <button className="button-review" style={{color: "#1FE1E9"}}>
                <span>TRY IT KNOW</span>
              </button>  
            </Link>
          </div>
        </div>
        <div className="row col-md-12 review-row">
          <div className="col">
            <img src={ss1} className="img-ss1" alt="ss1"></img> <br></br>
            <img src={ss2} className="img-ss2" alt="dj2"></img>
          </div>
          <div className="col">
            <h1 className="review-txt">REVIEWS</h1>
            <Review name="ARTIST"/>
          </div>
          <div className="col col-prod  ">
            <Review name="PRODUCER"/>
          </div>
          <div className="col col-music">
            <Review name="MUSIC FAN"/>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewPage;