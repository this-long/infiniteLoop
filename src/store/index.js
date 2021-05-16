import Vue from 'vue'
import Vuex from 'vuex'
import allArticles from './moduleStore/allArticles'
import singUp from './moduleStore/singUp'
import createTopic from './moduleStore/createTopic'
import authorNews from './moduleStore/authorNews'
import myMessage from './moduleStore/myMessage'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    allArticles,
    singUp,
    createTopic,
    authorNews,
    myMessage,
  }
})

export default store
