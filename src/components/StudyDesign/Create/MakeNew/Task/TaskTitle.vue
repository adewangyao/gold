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
props:{
  data:Object
},
data() {
  return {
    name:"",
  };
},

computed: {

},

watch: {
  data:function(n,v){
    console.log(n)
  }
},

methods: {
  nameBlur(){
      let {gid} = this.$store.state.leftInfo
      console.log(gid)
      // return
      let param = {
        content: this.name,
        taskId: gid,
        cId:this.data.gid,
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
  this.name=this.data.title
  console.log(this.data)
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
