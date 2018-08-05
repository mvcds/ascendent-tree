import React from 'react'
import bem from 'bem-classname'
import { Provider } from 'react-redux'

import Person from '../Components/Person'
import NotificationCenter from '../Components/NotificationCenter'
import AddGenerationButton from '../Components/AddGenerationButton'

import store from '../Infra/ReduxStore'

import './App.css'

const block = bem.bind(null, 'app')

function App () {
  return (
    <Provider store={store}>
      <div className={block()}>
        <NotificationCenter />
        <Person.Subject />
        <AddGenerationButton />
      </div>
    </Provider>
  )
}

export default App
