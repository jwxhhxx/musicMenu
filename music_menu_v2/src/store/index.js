import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)

import { reqLogin, reqNowUser, reqOutLogin } from '@/api'
const state = {
  userinfo: {},
  logged: false
}
const mutations = {
  USERINFO (state, userinfo) {
    state.userinfo = userinfo
    state.logged = true
  },
  CLEAR (state) {
    state.userInfo = {}
    state.logged = false
  }
}

const actions = {
  async loginAccount ({ commit }, params) {
    let result = await reqLogin(params)
    console.log(result)
    if (result.errorCode == 0) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async getNowUser ({ commit }) {
    let result = await reqNowUser()
    console.log(result)
    if (result.errorCode == 0) {
      commit("USERINFO", result.data)
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async getOutLogin ({ commit }) {
    let result = await reqOutLogin()
    console.log(result, '退出')
    if (result.errorCode == 0) {
      commit("CLEAR")
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  }
}

const getters = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})