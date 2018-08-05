import React from 'react'
import bem from 'bem-classname'

import './person.css'

const block = bem.bind(null, 'person')

function Person ({ children, relationship }) {
  return (
    <div className={block()}>
      <div className={block('self', [ relationship ])}></div>
      <div className={block('descendents')}>
        {children}
      </div>
    </div>
  )
}

export default {
  Father: (props) => Person({ ...props, relationship: 'father' }),
  Mother: (props) => Person({ ...props, relationship: 'mother' }),
  Subject: (props) => Person({ ...props, relationship: 'subject' })
}
