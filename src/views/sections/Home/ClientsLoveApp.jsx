import React from 'react'
import Quote from '../../../images/clients-love-app/quotes.svg'
import Rating_Left from '../../../images/clients-love-app/rating-left.svg'
import Image_1_Left from '../../../images/clients-love-app/image-1-left.svg'
import Rating_Right from '../../../images/clients-love-app/rating-right.svg'
import Image_2_Right from '../../../images/clients-love-app/image-2-right.svg'

const ClientsLoveApp = () => {
  return (
    <section id="clients-love-app">
              <div className="container">
                <div className="header">
                  <h2>Clients are <br></br> Loving Our App</h2>
                  <div className="navigation">
                    <i className="fa-solid fa-less-than"></i>
                    <i className="fa-solid fa-greater-than"></i>
                  </div>
                </div>
                <div className="testimonials">
                  <div className="testimonial testimonial-left">
                    <img className="quote-1" src={Quote} alt="Quotation marks"/>
                    <img className="rating" src={Rating_Left} alt="Client rating"/>
                    <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                    <div className="client-info">
                      <img src={Image_1_Left} alt="Client avatar"/>
                      <div className="text-container">
                        <h6>Fannie Summers</h6>
                        <p>Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial testimonial-right">
                    <img className="quote-2" src={Quote} alt="Quotation marks"/>
                    <img className="rating" src={Rating_Right} alt="Client rating"/>
                    <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                    <div className="client-info">
                      <img src={Image_2_Right} alt="Client avatar"/>
                      <div className="text-container">
                        <h6>Albert Flores</h6>
                        <p>Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default ClientsLoveApp