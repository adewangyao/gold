import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
  choiceType:''
}
const mutations = {
  changeType(state,val){
    state.choiceType = val
  }
}
export default new Vuex.Store({
  state,
  mutations,

})
