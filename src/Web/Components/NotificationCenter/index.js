import React from 'react'
import bem from 'bem-classname'
import { connect } from 'react-redux'

import './notification-center.css'

const block = bem.bind(null, 'notification-center')

function NotificationCenter ({ notifications }) {
  return (
    <div className={block()}>
      {notifications.map(Notification)}
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

function mapStateToProps (state) {
  return {
    notifications: Object.values(state)
  }
}

export default connect(
  mapStateToProps,
)(NotificationCenter)
