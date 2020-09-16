import Vue from 'vue'
import Vuex from 'vuex'

import db from '@/db/db'

Vue.use(Vuex)

const objToday = new Date()
const monthnum = objToday.getMonth()
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'Dectember']
const daynum = String(objToday.getDate()).padStart(2, '0')
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dayOfWeek = weekday[objToday.getDay()]
const todos = []

const state = {
  todos,
  month: months[monthnum],
  daynum,
  dayOfWeek,
  todosNum: todos.filter(i => i.tododate.month === months[monthnum] && i.tododate.day === dayOfWeek && !i.finished).length
}
export default new Vuex.Store({
  state,
  mutations: {
    ADD_TODO (state, payload) {
      let newTodo = payload
      state.todos = [...state.todos, newTodo]
    },
    DELETE_ALL_TODOS (state) {
      state.todos = []
    },
    GET_ALL_TODOS_FROM_DB (state, payload) {
      state.todos = payload
    },
    CHANGE_STATUS (state, payload) {
      state.todos.map(i => {
        if (i.todoname === payload.todoname) {
          i.finished = payload.status
          db.get('todos').find({ todoname: payload.todoname }).set('finished', payload.status).write()
        }
      })
    },
    REMOVE_TODOS (state, payload) {
      state.todos = state.todos.filter(i => i.todoname !== payload)
    }
  },
  actions: {
    addTodo ({commit}, payload) {
      db.get('todos').push(payload).write()
      commit('ADD_TODO', payload)
    },
    delAllTodos ({commit}) {
      commit('DELETE_ALL_TODOS')
    },
    changeStatus ({commit}, payload) {
      commit('CHANGE_STATUS', payload)
    },
    getAllTodosFromDb ({commit}) {
      let payload = db.get('todos').value()
      commit('GET_ALL_TODOS_FROM_DB', payload)
    },
    removeTodo ({commit}, payload) {
      db.get('todos').remove({todoname: payload}).write()
      commit('REMOVE_TODOS', payload)
    }
  },
  getters: {
    getTodos (state) {
      return state.todos
    },
    getMonth (state) {
      return state.month
    },
    getDay (state) {
      return state.daynum
    },
    getWeekDay (state) {
      return state.dayOfWeek
    },
    getLeftTodos (state) {
      return state.todosNum
    }
  },
  plugins: [],
  strict: process.env.NODE_ENV !== 'production'
})
