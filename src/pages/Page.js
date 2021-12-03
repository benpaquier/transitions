import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import '../App.css'

const Page = ({ children }) => {
  const [inProp, setInProp] = useState(false)

  useEffect(() => {
    setInProp(true)
  }, [])

  return (
    <CSSTransition
      in={inProp}
      timeout={3000}
      classNames="page"
    >
      <div>
        {children}
      </div>
    </CSSTransition>
  )
}

export default Page