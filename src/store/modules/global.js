const state = {
  // 用户是否已交互
  isUserInteractive: false,
}

const getters = {
  getIsUserInteractive: state => state.isUserInteractive
}

const mutations = {
  setIsUserInteractive(state, status) {
    state.isUserInteractive = status
  }
}

const actions = {
  
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}