import React from 'react'
import { NavLink } from 'react-router-dom'
import Silicon_Logo_Light from '../../images/logo/silicon-logo-light_theme.svg'
import Appstore from '../../images/appstore.svg'
import Googleplay from '../../images/googleplay.svg'


const FooterHome = () => {
  return (
    <footer class="footer-home">
        <div class="container">
            <img src={Silicon_Logo_Light} alt="Silicon Logo" class="footer-logo"/>
    
            <nav class="footer-nav">
                <NavLink class="nav-link" to="#">Overview</NavLink>
                <NavLink class="nav-link" to="#">Features</NavLink>
                <NavLink class="nav-link" to="#">News</NavLink>
                <NavLink class="nav-link" to="#">Contact</NavLink>
                <NavLink class="nav-link" to="#">Account</NavLink>
            </nav>
    
            <div class="app-stores">
                <img src={Appstore} alt="App Store"/>
                <img src={Googleplay} alt="Google Play"/>
            </div>
    
            <div class="social-icons">
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
    
            <p class="copyright-text">
              2024. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra<br></br> aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.
            </p>
        </div>
    </footer>
  )
}

export default FooterHome