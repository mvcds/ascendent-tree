import React from 'react'
import bem from 'bem-classname'
import { connect } from 'react-redux'

import './notification-center.css'

const block = bem.bind(null, 'notification')

function NotificationCenter ({ notifications }) {
  return (
    <div className="notification-center">
      {notifications.map(Notification)}
    </div>
  )
}

function Notification ([ id, { children, title, type } ]) {
  return (
    <div className={block([ type ])} role="dialog" key={id}>
      <header>
        <span className={block('title')}>
          {title}
        </span>
        <span className={block('close-button')} role="button">
          &times;
        </span>
      </header>
      <span >
        {children}
      </span>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    notifications: Object.entries(state)
  }
}

export default connect(
  mapStateToProps,
)(NotificationCenter)
