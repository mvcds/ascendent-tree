import React from 'react'
import bem from 'bem-classname'

import './person.css'

const block = bem.bind(null, 'person')

function Person ({ children, kind }) {
  return (
    <div className={block()}>
      <div className={block('self', [ kind ])}></div>
      <div className={block('descendents')}>
        {children}
      </div>
    </div>
  )
}

export default {
  Father: (props) => Person({ ...props, kind: 'father' }),
  Mother: (props) => Person({ ...props, kind: 'mother' }),
  Subject: (props) => Person({ ...props, kind: 'subject' })
}
