import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backlog: null,
    todo: null,
    doing: null,
    done: null
  },
  mutations: {
    setBackLog (state, payload) {
      state.backlog = payload
    },
    setTodo (state, payload) {
      state.todo = payload
    },
    setDoing (state, payload) {
      state.doing = payload
    },
    setDone (state, payload) {
      state.done = payload
    }
  },
  actions: {
  },
  getters: {
    getBacklogs: state => {
      return state.backlog
    },
    getTodos: state => {
      return state.todo
    },
    getDoing: state => {
      return state.doing
    },
    getDone: state => {
      return state.done
    }
  }
})
