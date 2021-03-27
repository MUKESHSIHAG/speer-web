import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import Hamburger from './hamburger';
import '../styles/slider.css';
import { Link } from 'react-router-dom';

function Slider(props) {
    return (
        <div className="slider" fade>

            <Carousel nextIcon="" nextLabel="" prevIcon="" prevLabel="" fade={true} controls="">
                <Carousel.Item interval={10000} style={{height:"750px"}}> 
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        style={{top:"0",left:"0", minHeight:"750px", position:'absolute', background: "linearGradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"}}
                    />
                    <Hamburger />
                <Carousel.Caption >
                    <h3 className="carousel-txt" style={{zIndex:"1"}}>INTERACTIVE CONCERT EXPERIENCE</h3>
                    <p className="carousel-txt1">Experience your favourite artists like never before and from the comfort of your own home.</p>
                    <Link to="/pricing">
                        <button className="button-slider">
                                <span>TRY IT NOW</span>
                        </button> 
                    </Link>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000} style={{height:"750px"}}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    style={{top:"0",left:"0", minHeight:"750px", position:'absolute', background: "linearGradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"}}
                />
                <Hamburger />
                <Carousel.Caption>
                    <h3 className="carousel-txt">INTERACTIVE CONCERT EXPERIENCE</h3>
                    <p className="carousel-txt1">Experience your favourite artists like never before and from the comfort of your own home.</p>
                    <Link to="/pricing">
                        <button className="button-slider">
                                <span>TRY IT NOW</span>
                        </button> 
                    </Link>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000} style={{height:"750px"}}>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    style={{top:"0",left:"0", minHeight:"750px", position:'absolute', background: "linearGradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"}}
                />
                <Hamburger />
                <Carousel.Caption>
                    <h3 className="carousel-txt">INTERACTIVE CONCERT EXPERIENCE</h3>
                    <p className="carousel-txt1">Experience your favourite artists like never before and from the comfort of your own home.</p>
                    <Link to="/pricing">
                        <button className="button-slider">
                                <span>TRY IT NOW</span>
                        </button> 
                    </Link>
                </Carousel.Caption>
                </Carousel.Item>                          
            </Carousel>
        </div>
    );
}

export default Slider;