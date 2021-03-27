import React from 'react';
import '../styles/footer.css'

function Footer(props) {
    return (
        <div>
            <div className="footer">
                <p className="footer-mail"><i class="fa fa-envelope" aria-hidden="true" style={{color:"white"}}></i> 
                &nbsp;support@experienceconcerts.co</p>
                <center><p className="footer-exp">EXP|CON </p></center>
                <center><p className="footer-rights">2019 © All Rights Reserved | Speer Technologies Incorporated</p></center>
            </div>
        </div>
    );
}

export default Footer;