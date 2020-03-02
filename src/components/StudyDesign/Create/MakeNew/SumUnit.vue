
<!-- 单元概述 -->
<template>
  <div>
    <div class="search">
      <el-input
          @input='handleChange'
          placeholder=""

          v-model="value">
      </el-input>
      <span class="save" @click="saveTitle">保存</span>
    </div>
    <div class="textarea">
      <rich-text :initInn='initInn' @getContent="getContent" ref="rt"></rich-text>
    </div>
  </div>
</template>

<script>

import RichText from "./Task/RichText"
export default {

components: {
  RichText
},

data() {
  return {
    value:'新建任务组',
    initInn:'<a>sas</a>'
  };
},

computed: {

},

watch: {

},

methods: {
  // 获取富文本内容
  getContent(val){
    this.initInn = this.$refs.rt.getContent()
    alert(this.initInn)
  },
  saveTitle(){
    this.getContent()
    let param = {
      title: this.value,
      content: this.initInn,
      dsId: 1,
      position: 0
    }
    this.sendRequest('/Task/create_task_group',param,(res)=>{
      console.log(res)
      if(res.retcode==0&&res.result.length){
      }
    })
  },
  handleChange(){}
},

beforeCreate() {

},
created() {

},
}
</script>
<style  scoped>
    .search >>> .el-input{
        width:822px;
        height: 40px;
    }
    .search >>> input{
        margin-top: 14px;
        width:822px;
        height: 40px;
        border: none;
    }
    .save {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      color: #fff;
      width: 78px;
      cursor: pointer;

      text-align: center;
      background: #87A6F4;
      margin-left: 12px;
    }
    .textarea {
      margin-top: 12px;
    }
    .textarea /deep/ textarea {
      border: none;
    }
</style>
