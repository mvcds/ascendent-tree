import React from 'react'
import bem from 'bem-classname'

import './notification.css'

const block = bem.bind(null, 'notification')

function Notification ({ children, type }) {
  return (
    <span className={block([ type ])}>
      {children}
    </span>
  )
}

export default Notification
