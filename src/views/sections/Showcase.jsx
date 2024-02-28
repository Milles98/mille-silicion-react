import React from 'react'
import { Link } from 'react-router-dom'
import AppstoreImage from '../../images/appstore.svg'
import GoogleplayImage from '../../images/googleplay.svg'
import ShowcaseMobilesImage from '../../images/showcase-mobiles.svg'

const Showcase = () => {
    return (
        <section id="showcase">
            <div className="container">
                <div className="content">
                    <h1>Manage All Your Money in One App</h1>
                    <p>
                        We offer you a new generation of the mobile banking. Save, spend
                        & manage money in your pocket.
                    </p>

                    <div className="download-app">
                        <Link className="appstore" to="/downloads/appstore">
                            <img src={AppstoreImage} alt="Download on Appstore" />
                        </Link>
                        <Link className="googleplay" to="/downloads/googleplay">
                            <img src={GoogleplayImage} alt="Download on Google Play" />
                        </Link>
                    </div>

                    <Link className="more" to="services/manage-all-your-money">
                        <i className="fa-solid fa-chevron-down"></i> Discover more
                    </Link>
                </div>
                <img id="showcase-image" src={ShowcaseMobilesImage} alt="two mobile phones" />
            </div>
        </section>
    )
}

export default Showcase