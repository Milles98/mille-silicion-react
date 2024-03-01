import React from 'react'
import Make_Your_Money_Img_1 from '../../../images/make-your-money/image-1.svg'
import Make_Your_Money_Img_2 from '../../../images/make-your-money/image-2.svg'
import Make_Your_Money_Img_3 from '../../../images/make-your-money/image-3.svg'
import Make_Your_Money_Img_4_Card from '../../../images/make-your-money/image-4-card.svg'
import Make_Your_Money_Icon_1 from '../../../images/make-your-money/icon-1.svg'
import Make_Your_Money_Icon_2 from '../../../images/make-your-money/icon-2.svg'

const MakeYourMoney = () => {
  return (
    <section id="make-your-money">
      <div className="container">
        <div className="card top-left">
          <h2>Make your money <br></br>transfer simple and clear</h2>
          <p><i className="fa-regular fa-circle-check"></i> Banking transactions are free for you</p>
          <p><i className="fa-regular fa-circle-check"></i> No monthly cash commission</p>
          <p><i className="fa-regular fa-circle-check"></i> Manage payments and transactions online</p>
          <button className="btn-theme">Learn more</button>
        </div>

        <div className="card top-right">
          <img className="money-forecast" src={Make_Your_Money_Img_1} alt="Image 1" />
          <img className="send-money-to" src={Make_Your_Money_Img_2} alt="Image 2" />
        </div>

        <div className="card bottom-left">
          <img src={Make_Your_Money_Img_3} alt="Image 3" />
          <img className="visa-card" src={Make_Your_Money_Img_4_Card} alt="Image 4" />
        </div>

        <div className="card bottom-right">
          <h2>Receive payment from international bank details</h2>
          <div className="info-container">
            <div className="info-group">
              <img className="icon" src={Make_Your_Money_Icon_1} alt="Icon 1" />
              <p>Manage your payments online.<br></br> Mollis congue egestas fermentum fames.</p>
            </div>
            <div className="info-group">
              <img className="icon" src={Make_Your_Money_Icon_2} alt="Icon 2" />
              <p>A elementum and imperdiet enim,<br></br> pretium etiam facilisi aenean quam mauris.</p>
            </div>
          </div>
          <button className="btn-theme">Learn more</button>
        </div>
      </div>
    </section>
  )
}

export default MakeYourMoney