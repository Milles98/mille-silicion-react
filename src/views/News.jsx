import React from 'react'
import NewsDontMissAnything from './sections/News/NewsDontMissAnything'
import DarkFooter from './sections/DarkFooter'
import NewsCard from './sections/News/NewsCard'
import NewsTop from './sections/News/NewsTop'

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