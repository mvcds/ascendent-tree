import React from 'react'
import bem from 'bem-classname'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Person from '../Components/Person'
import NotificationCenter from '../Components/NotificationCenter'

import rootReducer from '../reducers'

import './App.css'

const block = bem.bind(null, 'app')
const store = createStore(rootReducer)

function App () {
  return (
    <Provider store={store}>
        <div className={block()}>
          <NotificationCenter />
          <Person.Subject />
        </div>
    </Provider>
  )
}

export default App
