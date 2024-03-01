import React from 'react'
import { Link } from 'react-router-dom'
import Error_Image from '../../../images/ooops-side/404.svg'

const ErrorBody = () => {
    return (
        <section id="ooops">
            <div className="ooops-center">
                <img src={Error_Image} alt="404 Not Found Image" />
                <h2>Ooops!</h2>
                <p>The page you are looking for is not available.</p>
                <Link to="/">
                    <button className="btn-theme">
                        <i className="fa-regular fa-house"></i> Go to homepage
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default ErrorBody