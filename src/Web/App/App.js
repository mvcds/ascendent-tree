import React from 'react'

import './App.css'

import Subject from '../Components/Subject'
import Person from '../Components/Person'

function App () {
  return (
    <Person.Subject>
      <Person.Father />
      <Person.Mother />
    </Person.Subject>
  )
}

export default App
