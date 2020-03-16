import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {

  /**
   @ taskGroup 选中的是任务群
   @ tasek 选中的是任务
   @ taskChildren 选中的是子任务
   */
  choiceType:'',    //内容的状态
  createDesign:'',  //创建成功状态
  leftInfo:{},  //左侧选中的数据等
}
const mutations = {
  changeType(state,val){
    state.choiceType = val
  },
  changeCreate(state,val){
    state.createDesign = val
  },
  changeLeftInfo(state,val){
    state.leftInfo = val
  }
}
export default new Vuex.Store({
  state,
  mutations,

})
