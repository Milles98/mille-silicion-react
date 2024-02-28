import React from 'react'
import Brand_1 from '../../images/brands/brand_1.svg'
import Brand_2 from '../../images/brands/brand_2.svg'
import Brand_3 from '../../images/brands/brand_3.svg'
import Brand_4 from '../../images/brands/brand_4.svg'
import Brand_5 from '../../images/brands/brand_5.svg'
import Brand_6 from '../../images/brands/brand_6.svg'

const Brands = () => {
  return (
    <section id="brands">
        <div className="container">
            <div className="box">
              <img src={Brand_1} alt="brand 1" />
            </div>
            <div className="box">
              <img src={Brand_2} alt="brand 2" />
            </div>
            <div className="box">
              <img src={Brand_3} alt="brand 3" />
            </div>
            <div className="box">
              <img src={Brand_4} alt="brand 4" />
            </div>
            <div className="box">
              <img src={Brand_5} alt="brand 5" />
            </div>
            <div className="box">
              <img src={Brand_6} alt="brand 6" />
            </div>
        </div>
    </section>
  )
}

export default Brands