import React from 'react'
import NewsDontMissAnything from './sections/News/NewsDontMissAnything'
import DarkFooter from './sections/DarkFooter'
import NewsCard from './sections/News/NewsCard'
import NewsTop from './sections/News/NewsTop'
import Header from './sections/Header'

const News = () => {
  return (
    <main>
      <Header showShadow={true} />
      <NewsTop />
      <NewsCard />
      <NewsDontMissAnything />
      <DarkFooter />
    </main>
  )
}

export default News