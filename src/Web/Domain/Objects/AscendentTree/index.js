const DEFAULT = {
  generation: 0
}

class AscendentTree {
  constructor (raw, injection = DEFAULT) {
    Object.assign(this, injection, raw)
  }

  addGeneration () {
    return new AscendentTree({
      ...this,
      generation: this.generation + 1
    })
  }
}

export default AscendentTree
