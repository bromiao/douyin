import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
	modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default new Vuex.Store({
	modules: modules,
	plugins: [
		createPersistedState({
			storage: window.sessionStorage,
		}),
	]
})
