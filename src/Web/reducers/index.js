import React from 'react'

const NOTIFICATIONS = {
  '1': {
    type: 'message',
    title: 'test',
    children: (
      <p>Hello from notifications</p>
    )
  }
}

function notifications (state = NOTIFICATIONS, action) {
  return state
}

export default notifications
