import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)

import { reqLogin, reqNowUser, reqOutLogin, reqGetMenu } from '@/api'
const state = {
  userinfo: {},
  logged: false,
  tableData: [],
  total: 0
}
const mutations = {
  USERINFO (state, userinfo) {
    state.userinfo = userinfo
    state.logged = true
  },
  CLEAR (state) {
    state.userInfo = {}
    state.logged = false
  },
  GETMUSICLIST (state, data) {
    state.tableData = data.list
    state.total = data.total
  }
}

const actions = {
  //登录
  async loginAccount ({ commit }, params) {
    let result = await reqLogin(params)
    console.log(result)
    if (result.errorCode == 0) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //获取用户信息
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
  //退出登录
  async getOutLogin ({ commit }) {
    let result = await reqOutLogin()
    console.log(result, '退出')
    if (result.errorCode == 0) {
      commit("CLEAR")
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //获取列表信息
  async getMusicList ({ commit }, params) {
    let result = await reqGetMenu(params)
    console.log('请求列表', result)
    if (result.errorCode == 0) {
      commit('GETMUSICLIST', result.data)
      return "ok"
    } else {
      return Promise.reject(new Error("faile"))
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