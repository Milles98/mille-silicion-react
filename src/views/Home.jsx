import React from 'react'
import Showcase from './sections/Showcase'
import Brands from './sections/Brands'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import MakeYourMoney from './sections/MakeYourMoney'
import ClientsLoveApp from './sections/ClientsLoveApp'
import Faq from './sections/Faq'
import NewsLetter from './sections/NewsLetter'
import FooterHome from './sections/FooterHome'

const Home = () => {
  return (
    <main>
      <Showcase />
      <Brands />
      <Features />
      <HowItWorks />
      <MakeYourMoney />
      <ClientsLoveApp />
      <Faq />
      <NewsLetter />
      <FooterHome />
    </main>
  )
}

export default Home