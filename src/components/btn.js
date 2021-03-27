import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/btn.css'

function Button(props) {
    return (
        <>
        <Link to="/pricing">
            <button className="button" style={{color: props.btnColor}}>
                <span>{props.btnTxt}</span>
            </button>  
        </Link>
        </>
    );
}

export default Button;