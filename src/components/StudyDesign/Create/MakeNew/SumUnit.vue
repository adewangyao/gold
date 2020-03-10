
<!-- 单元概述新建任务群 -->
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
  },
  saveTitle(){
    this.getContent()
    let param = {
      title: this.value,
      content: this.initInn,
      dsId: this.$route.query.id,
      position: 2
    }
    this.sendRequest('/Task/create_task_group',param,(res)=>{
      if(res.retcode==0&&res.result.length){
        this.$notify({
          // title: '创建成功',
          message: '创建成功',
          type: 'success',
          duration:1000,
        });
      }else {
        this.$notify.error({
          // title: '创建失败',
          message: '创建失败',
          duration:1000,
        });
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
