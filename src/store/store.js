import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    visibility: {
      discussion_user: true,
      discussion_add: false,
      discussion_item: false,
      discussion_footer: false,
      showformdiscussion: false
    },
    user: {
      name: '',
      avatar: ''
    },
    msg: 'Bienvenido a la aplicacion de comentarios con Vue.js',
    discussions: []
  },
  mutations: {
    updateName (state, name) {
      state.user.name = name
      console.log(state, name)
    },
    updateAvatar (state, avatar) {
      state.user.avatar = avatar
    },
    hideDiscussionUser (state) {
      state.visibility.discussion_user = false
      state.visibility.showformdiscussion = true
    },
    newComment (state, comment) {
      state.discussions.push(comment)
    }
  },
  getters: {
    name (state) {
      return state.user.name
    },
    avatar (state) {
      return state.user.avatar
    },
    discussion_user (state) {
      return state.visibility.discussion_user
    },
    showformdiscussion (state) {
      return state.visibility.showformdiscussion
    }
  }
})
