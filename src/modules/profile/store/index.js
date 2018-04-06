const state = {
  name: 'Carlo Gino Catapang'
}

const getters = {
  NAME (state) {
    console.log('gino')
    return state.name
  }
}

export default {
  namespaced: true,
  state,
  getters
}
