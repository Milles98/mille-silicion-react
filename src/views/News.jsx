import React from 'react'
import NewsDontMissAnything from './sections/NewsDontMissAnything'
import DarkFooter from './sections/DarkFooter'
import NewsCard from './sections/NewsCard'
import NewsTop from './sections/NewsTop'

const News = () => {
  return (
    <main>
      <NewsTop />
      <NewsCard />
      <NewsDontMissAnything />
      <DarkFooter />
    </main>
  )
}

export default News