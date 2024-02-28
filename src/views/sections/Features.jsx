import React from 'react'
import Appfeatures from '../../images/mobile-appfeatures.svg'
import Feature_1 from '../../images/icons/feature_1.svg'
import Feature_2 from '../../images/icons/feature_2.svg'
import Feature_3 from '../../images/icons/feature_3.svg'
import Feature_4 from '../../images/icons/feature_4.svg'
import Feature_5 from '../../images/icons/feature_5.svg'
import Feature_6 from '../../images/icons/feature_6.svg'

const Features = () => {
  return (
    <section id="features" className="container">
          <div className="features-header">
            <h2>App Features</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              numquam quaerat totam quod enim voluptates quasi similique dolore
              dolores nisi labore quos ex, omnis fugit beatae fugiat nihil
              minima eum!
            </p>
          </div>
          <div className="phone-display">
            <img src={Appfeatures} alt="features-mobile" />
          </div>
          <div className="features-grid">
            <div className="feature">
              <img src={Feature_1} alt="feature-1" />
              <h3>Easy Payments</h3>
              <p>
                Id mollis consectetur congue egestas egestas suspendisse blandit
                justo.
              </p>
            </div>
            <div className="feature">
              <img src={Feature_2} alt="feature-2" />
              <h3>Data Security</h3>
              <p>
                Augue pulvinar justo, fermentum fames aliquam accumsan
                vestibulum non.
              </p>
            </div>
            <div className="feature">
              <img src={Feature_3} alt="feature-3" />
              <h3>Cost Statistics</h3>
              <p>
                Mattis urna ultricies non amet, purus in auctor non. Odio
                vulputate ac nibh.
              </p>
            </div>
            <div className="feature">
              <img src={Feature_4} alt="feature-4" />
              <h3>Support 24/7</h3>
              <p>
                A elementum, imperdiet enim, pretium etiam facilisi in aenean
                quam mauris.
              </p>
            </div>
            <div className="feature">
              <img src={Feature_5} alt="feature-5" />
              <h3>Regular Cashback</h3>
              <p>
                Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                imperdiet eleifend.
              </p>
            </div>
            <div className="feature">
              <img src={Feature_6} alt="feature-6" />
              <h3>Top Standards</h3>
              <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>
          </div>
        </section>
  )
}

export default Features