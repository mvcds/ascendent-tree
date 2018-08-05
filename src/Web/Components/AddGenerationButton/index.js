import React from 'react'
import bem from 'bem-classname'

import './add-generation-button.css'

const block = bem.bind(null, 'add-generation-button')

function AddGenerationButton ({ generation, onAddGeneration }) {
  return (
    <button className={block()} onClick={onAddGeneration}>
      Add Generation #{generation}
    </button>
  )
}

export default AddGenerationButton
