import React from 'react'
import bem from 'bem-classname'
import { Provider } from 'react-redux'

import AscendentTree from '../Components/AscendentTree'
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
        <AddGenerationButton />
        <AscendentTree />
      </div>
    </Provider>
  )
}

export default App
