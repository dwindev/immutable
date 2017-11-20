const immutable = {
  push (state, data) {
    return typeof(data) === 'string' ? [...state, data] : [...state].concat(data)
  },
  delete (state, id) {
    return state.filter(item => item.id !== id)
  },
  update (state, data) {
    return state.map(item => item.id !== data.id ? item : data )
  },
  set (state, data) {
    return Object.assign(state, data)
  }
}
