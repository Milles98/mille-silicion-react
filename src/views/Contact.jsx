import React from 'react'
import ContactUsTop from './sections/ContactUsTop'
import ContactUsMiddle from './sections/ContactUsMiddle'
import DarkFooter from './sections/DarkFooter'

const Contact = () => {
  return (
    <div className="wrapper-contact">
      <ContactUsTop />
      <ContactUsMiddle />
      <DarkFooter />
    </div>
  )
}

export default Contact