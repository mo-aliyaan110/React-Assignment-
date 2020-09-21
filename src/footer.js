import React from 'react';
import './footer.css'

const Footer = () =>{
    return(
        
        <footer className="footer-color">
        <div className="container ">
            <div className="inline margin-right">
                Overview
            </div>
            <div className="inline">
                Contact
            </div>
            <hr/><br/>
            <div className="phone">
                <h3> Phone Number </h3>
                <tt> +91 114004566 </tt>
            </div>
            <br/> 
            <br/>
            <div className="address">
            <p className="rest-name"> The Big Chill Cakery</p>
            <p className="rest-add">Shop 1, Plot D, Samruddhi Complex, Chincholi, 
            Mumbai-400002, Maharashtra</p>
            </div>
        </div>
        </footer>
        
    )
}
export default Footer;