import React from 'react'
import ContactUsTop from './sections/Contact/ContactUsTop'
import ContactUsMiddle from './sections/Contact/ContactUsMiddle'
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