import React from 'react'

import circle from './circle'

function GeometricForm (form) {
  const hoc = class GeometricForm extends React.Component {
    constructor (props) {
      super(props)

      this.componentDidMount = form.bind(this)
    }

    render () { return null }
  }

  hoc.displayName = form.name

  return hoc
}

export default {
  Circle: GeometricForm(circle)
}
