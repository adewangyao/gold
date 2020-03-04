import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
  choiceType:'',
  createDesign:'',  //创建成功状态
}
const mutations = {
  changeType(state,val){
    state.choiceType = val
  },
  changeCreate(state,val){
    state.createDesign = val
  }
}
export default new Vuex.Store({
  state,
  mutations,

})
