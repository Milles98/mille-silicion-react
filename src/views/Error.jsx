import React from 'react'
import ErrorBody from './sections/ErrorBody'
import ErrorFooter from './sections/ErrorFooter'

const Error = () => {
  return (
    <div className="wrapper">
      <main>
        <ErrorBody />
        <ErrorFooter />
      </main>
    </div>
  )
}

export default Error