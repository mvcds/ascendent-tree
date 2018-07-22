import React from 'react'
import bem from 'bem-classname'

import Person from '../Components/Person'
import Notification from '../Components/Notification'

import './App.css'

const block = bem.bind(null, 'app')

function App () {
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
      <Person.Subject />
    </div>
  )
}

export default App
