import React from 'react'
import bem from 'bem-classname'

import Person from '../Components/Person'
import NotificationCenter from '../Components/NotificationCenter'

import './App.css'

const block = bem.bind(null, '!app')

function App () {
  return (
    <div className={block()}>
      <NotificationCenter />
      <Person.Subject />
    </div>
  )
}

export default App
