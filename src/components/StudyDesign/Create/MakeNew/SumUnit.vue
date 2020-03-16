
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
    value:'',
    initInn:''
  };
},

computed: {
  leftClick:function(){
    return this.$store.state.leftInfo
    //  this.addtypeChange(this.addtype)
  }
},

watch: {
  leftClick:function(nVal,oVal){

    if(nVal.isEdit){
      this.value = nVal.title
    }else {
      this.value = ''
    }
  }
},

methods: {
  // 获取富文本内容
  getContent(val){
    this.initInn = this.$refs.rt.getContent()
  },
  saveTitle(){
    this.getContent()
    if(!this.value){
      this.$alert('请输入名称', {
        confirmButtonText: '确定',
      });
      return
    }
    if(!this.initInn){
      console.log(this.initInn)
      this.$alert('请输入介绍', {
        confirmButtonText: '确定',
      });
      return

    }

    let param = {
      title: this.value,
      content: this.initInn,
      dsId: this.$route.query.id,
      gid:this.leftClick.gid,
    }
    console.log(param)
    // return
    this.sendRequest('/Task/task_group_mgr',param,(res)=>{
      let resText = ''
      this.leftClick.gid?resText='修改':resText='创建'
      if(res.retcode==0&&res.result.length){
        this.$event.$emit('updateLeft',);
        this.$notify({
          // title: '创建成功',
          message: `${resText}成功`,
          type: 'success',
          duration:1000,
        });
      }else {
        this.$notify.error({
          // title: '创建失败',
          message: `${resText}失败`,
          duration:1000,
        });
      }
    })
  },
  handleChange(){}
},

beforeDestroy(){
  // this.$event.$off('updateLeft',);
},
created() {
 this.value = this.$store.state.leftInfo.title
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
