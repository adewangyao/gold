<!--  -->
<template>
    <div class='task-title'>
      <el-input
         @input='nameChange'
         placeholder=""
         clearable
         v-model="name">
      </el-input>  
      <task-btn @handleBtn='handleBtn'></task-btn>       
    </div>
</template>

<script>

import TaskBtn from './Common/TaskBtn'
export default {
name:'tasktitle',
components: {
  TaskBtn,
},

data() {
  return {
    name:"",
  };
},

computed: {

},

watch: {

},

methods: {
  nameChange(){

  },
  // 操作按钮
  handleBtn(val){
    this.$emit(handleBtn,val)
  }
},

beforeCreate() { 

},
created() {

},
}
</script>
<style  scoped>
    .task-title {
      margin-top: 14px;
      background: #fff;
      
    }
    .task-title >>> .el-input{
        width:584px;
        /* height: 32px; */
    }
    .task-title >>> input{
        width:584px;
        /* height: 32px; */
        border: none;
    }
</style>