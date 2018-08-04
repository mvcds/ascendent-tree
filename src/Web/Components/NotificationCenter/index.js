import React from 'react'
import bem from 'bem-classname'
import { connect } from 'react-redux'

import './notification-center.css'

const block = bem.bind(null, 'notification')

function NotificationCenter ({ notifications, onCloseNotification }) {
  if (!notifications.length) return null

  return [
    <div className="notification-center__background" key="background"/>,
    <div className="notification-center" key="notification-center">
      {notifications.map(Notification, { onCloseNotification })}
    </div>
  ]
}

function Notification ([ id, { children, title, type } ]) {
  return (
    <div className={block([ type ])} role="dialog" key={id}>
      <header>
        <span className={block('title')}>
          {title}
        </span>
        <span className={block('close-button')} role="button" onClick={this.onCloseNotification(id)}>
          &times;
        </span>
      </header>
      <span >
        {children}
      </span>
    </div>
  )
}

function mapStateToProps ({ notifications }) {
  return {
    notifications: Object.entries(notifications)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onCloseNotification: closeNotification.bind(null, dispatch)
  }
}

function closeNotification (dispatch, id) {
  return () => dispatch({
    type: 'CLOSE_NOTIFICATION',
    payload: { id }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationCenter)
