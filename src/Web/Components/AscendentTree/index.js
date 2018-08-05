import React from 'react'

import Person from './Person'

const LEAF = [
  <Person.Father key="father" />,
  <Person.Mother key="mother"  />
]

function AscendentTree ({ generations }) {
  return (
    <Person.Subject>
      {!!generations.length && LEAF}
    </Person.Subject>
  )
}

export default AscendentTree
