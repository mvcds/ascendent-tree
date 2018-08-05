import AscendentTree from '../../../Domain/Objects/AscendentTree';

const ASCENDENT_TREE = new AscendentTree()

function ascendentTree (state = ASCENDENT_TREE, { type, payload }) {
  switch (type) {
    case 'ADD_GENERATION': return state.addGeneration()
  }

  return state
}

export default ascendentTree
