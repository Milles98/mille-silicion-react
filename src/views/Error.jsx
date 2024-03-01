import React from 'react'
import ErrorBody from './sections/Error/ErrorBody'
import ErrorFooter from './sections/Error/ErrorFooter'

const Error = () => {
  return (
    <div className="wrapper-error">
      <main>
        <ErrorBody />
        <ErrorFooter />
      </main>
    </div>
  )
}

export default Error