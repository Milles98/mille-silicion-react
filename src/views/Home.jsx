import React from 'react'
import Showcase from './sections/Home/Showcase'
import Brands from './sections/Home/Brands'
import Features from './sections/Home/Features'
import HowItWorks from './sections/Home/HowItWorks'
import MakeYourMoney from './sections/Home/MakeYourMoney'
import ClientsLoveApp from './sections/Home/ClientsLoveApp'
import Faq from './sections/Home/Faq'
import NewsLetter from './sections/Home/NewsLetter'
import FooterHome from './sections/Home/FooterHome'

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