<!--  -->
<template>
    <div class='task-title'>
      <el-input
         @blur='nameBlur'
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
  nameBlur(){
      let param = {
        position: 0,
        content: "string",
        taskId: 1,
      }
      this.sendRequest('/TaskContent/create_title',param,res=>{
        console.log(res)
      })
  },
  // 操作按钮
  handleBtn(val){
    this.$emit(handleBtn,val)
  },
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
