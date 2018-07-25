import React from 'react'

const NOTIFICATIONS = {
  '1': {
    type: 'message',
    title: (
      <span>
        Welcome to the <strong>ascendent tree</strong> project.
      </span>
    ),
    children: (
      <React.Fragment>
        <p>
          This is the place where you can find how many generations were necessary to make you, you.
        </p>
        <p>
          The colorful ball you've just seen represents you. Click it to proceed.
        </p>
      </React.Fragment>
    )
  },
  '2': {
    type: 'message',
    title: 'Those are your parents',
    children: (
      <React.Fragment>
        <p>
          As far as science knows, everybody directly descends of two people with "opposite" genders.
        </p>
        <p>
          The first ball represents your father, the second your mother. They are your first ascedent generation.
        </p>
        <p>
          Click on you again to create the next generation.
        </p>
      </React.Fragment>
    )
  }
}

function notifications (state = NOTIFICATIONS, { type, payload }) {
  switch (type) {
    case 'CLOSE_NOTIFICATION':
      const notified = Object.assign({}, state)

      delete notified[payload.id]

      return notified
  }

  return state
}

export default notifications
