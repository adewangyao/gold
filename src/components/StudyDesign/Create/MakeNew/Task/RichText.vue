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
  initInn:String,
  data:Object
},
data() {
  return {
    nowContent:'',
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
    console.log(nVal,oVal)
  }
},

methods: {

    // 失去焦点
    ueBlur(){   //判断不为任务群的描述时执行
      let content = this.getContent()  //增加内容判断看内容是否改变 改变的话则不发送请求
      if(this.nowContent == content){return}
      this.nowContent = content
      if(this.$store.state.choiceType != 'taskGroup'){
        this.createRichText()
      }
    },
    // 发送富文本请求
    createRichText(){
      let {gid} = this.$store.state.leftInfo
      if(!this.getContent()){return}
      let param = {
        content: this.getContent(),
        taskId: gid,
        // cId:'',
      }
      if(this.data.gid){param.cId=this.data.gid}
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
      return val.html
      // this.$emit('getUEContent',val)
    },

},

beforeCreate() {

},
mounted(){

  this.initInn = this.data.content
  this.setContent()
},
created() {
    console.log(this.data)
    // this.init()
},
}
</script>
<style  scoped>
    .rich-box {
        margin-top: 14px;
    }
</style>
