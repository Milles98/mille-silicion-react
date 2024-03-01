import React from 'react'
import HowItWorks_img_1 from '../../../images/mobile-howdoesitwork_1.svg'
import Iphone12Pro from '../../../images/iPhone 12 Pro-new.svg'
import HowItWorks_img_2 from '../../../images/mobile-howdoesitwork_3.svg'

const HowItWorks = () => {
    return (
        <section id="how-does-it-work">
            <div className="container">
                <div className="how-it-works-header">
                    <h2>How Does It Work?</h2>
                </div>

                <div className="slider-container">
                    <div className="how-it-works-navigation left-nav">
                        <i className="fa-solid fa-less-than"></i>
                    </div>

                    <div className="phone-images">
                        <img className="how-it-works-img-1" src={HowItWorks_img_1} alt="How it works image 1" />
                        <img src={Iphone12Pro} alt="How it works image 2" />
                        <img className="how-it-works-img-2" src={HowItWorks_img_2} alt="How it works image 3" />
                    </div>

                    <div className="how-it-works-navigation right-nav">
                        <i className="fa-solid fa-greater-than"></i>
                    </div>

                    <div className="how-it-works-bottom">
                        <h3>Step 2. Latest transaction history</h3>
                        <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique<br></br> quisque hac in consectetur condimentum.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks