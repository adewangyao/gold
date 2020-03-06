<!--  -->
<template>
    <div class='rich-box'>
        <UE :defaultMsg="defaultMsg" :config="config" ref="hzue" @blur="ueBlur"></UE>
    </div>
</template>

<script>

import UE from '../../../Common/Ueditor'
export default {

components: {
    UE,
},
props:{
  // 默认内容
  initInn:{
    type:String,
    default:'<div>请输入内容...</div>'
  }
},
data() {
  return {
        defaultMsg:'',  //富文本内容 是html内容
        config: {       //富文本长宽度
            initialFrameWidth: 918,
            initialFrameHeight: 410
        },
  };
},

computed: {

},

watch: {
  defaultMsg(nVal,oVal){

  }
},

methods: {

    // 失去焦点
    ueBlur(){
      if(this.$store.state.choiceType != 'tasekGroupTitle'){
        this.createRichText()
      }
    },
    // 发送富文本请求
    createRichText(){
      let param = {
        position: 0,
        content: this.getContent(),
        taskId: 1
      }
      this.sendRequest('/TaskContent/create_word',param,res=>{

      })
    },


    // 标题时引用的富文本
    setContent(){
      this.$refs.hzue.setUEContent(this.initInn)
    },
    // 获取富文本内容
    getContent () {
      let val = this.$refs.hzue.getUEContent()
      console.log(val)
      return val.html
      // this.$emit('getUEContent',val)
    },
    init(){     //要做mounted中初始化
         //获取富文本的内容
        // this.$refs.hzue.setUEContent('<a>sas</a>') //设置富文本内容
    }
},

beforeCreate() {

},
mounted(){
    this.init()
    this.setContent()
},
created() {

    // this.init()
},
}
</script>
<style  scoped>
    .rich-box {
        margin-top: 14px;
    }
</style>
