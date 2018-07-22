import React from 'react'
import bem from 'bem-classname'

import './notification-center.css'

const block = bem.bind(null, 'notification-center')

function NotificationCenter () {
  return (
    <div className={block()}>
      <Notification type="message">
        <p>
          Welcome to the <strong>ascendent tree</strong> project.
        </p>
        <p>
          A place where you can find how many generations were necessary to make you, you
        </p>
      </Notification>
    </div>
  )
}

function Notification ({ children, type }) {
  return (
    <span className={block('item', [ type ])}>
      {children}
    </span>
  )
}

export default NotificationCenter
