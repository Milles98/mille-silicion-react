import React from 'react'
import { NavLink } from 'react-router-dom'
import Silicon_Logo_Light from '../../images/logo/silicon-logo-light_theme.svg'
import Appstore from '../../images/appstore.svg'
import Googleplay from '../../images/googleplay.svg'


const FooterHome = () => {
  return (
    <footer className="footer-home">
        <div className="container">
            <img src={Silicon_Logo_Light} alt="Silicon Logo" className="footer-logo"/>
    
            <nav className="footer-nav">
                <NavLink className="nav-link" to="/">Overview</NavLink>
                <NavLink className="nav-link" to="/">Features</NavLink>
                <NavLink className="nav-link" to="/news">News</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                <NavLink className="nav-link" to="/error">Account</NavLink>
            </nav>
    
            <div className="app-stores">
                <img src={Appstore} alt="App Store"/>
                <img src={Googleplay} alt="Google Play"/>
            </div>
    
            <div className="social-icons">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
    
            <p className="copyright-text">
              2024. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra<br></br> aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.
            </p>
        </div>
    </footer>
  )
}

export default FooterHome