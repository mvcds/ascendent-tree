import React from 'react'

import Person from './Person'

function AscendentTree ({ generations }) {
  return (
    <Person.Subject>
      <Family treeLevel={generations} />
    </Person.Subject>
  )
}

function Family ({ treeLevel }) {
  if (treeLevel === 0) return null

  if (treeLevel === 1) return [
    <Person.Father key="father" />,
    <Person.Mother key="mother" />
  ]

  const family = <Family treeLevel={treeLevel - 1} />

  return [
    <Person.Father key="father">
      {family}
    </Person.Father>,
    <Person.Mother key="mother">
      {family}
    </Person.Mother>,
  ]
}

export default AscendentTree
