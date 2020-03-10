<!-- 任务界面 -->
<template>
    <div class="task-box">
        <div class="task-top" v-if="nowType!='tasekGroupTitle'">
            <el-input
                @input='handleChange'
                placeholder=""
                clearable
                v-model="value">
            </el-input>
            <span class="task-top-font">
                手动开启
            </span>
            <el-switch
                active-value="100"
                inactive-value="0"
                v-model="openVal"
                >
            </el-switch>
            <span class="task-top-font">
                闯关模式
            </span>
            <el-switch
                v-model="breakVal"
                active-value="100"
                inactive-value="0"
                >
            </el-switch>
            <span class="task-save" @click="onSaveClick">
                保存
            </span>
        </div>
        <div class="task-inner">
            <!-- <task-title></task-title>
            <rich-text></rich-text>
            <Trainer></Trainer>
            <subject-tool></subject-tool>
            <task-scale></task-scale>
            <teacher-reserve></teacher-reserve> -->
            <component v-for="(item,i) in componentData" :key="i" :is="item.type" :data="item.itemData"  @handleBtn='handleBtn'></component>
        </div>
    </div>
</template>

<script>

import TaskTitle from "./Task/TaskTitle"
import RichText from "./Task/RichText"
import Trainer from "./Task/Trainer"
import SubjectTool from "./Task/SubjectTool"
import TaskScale from "./Task/TaskScale"
import TeacherReserve from "./Task/TeacherReserve"

export default {

components: {
    TaskTitle,
    RichText,
    Trainer,
    SubjectTool,
    TaskScale,
    TeacherReserve,
},
props:{
    addtype:{
        type:String,
        default:''
    },
    addClick:Number,  //点击一次触发一次
},
data() {
  return {
      value:"",
      openVal:"",
      breakVal:"",
      componentData:[],   //循环组件
  };
},

computed: {
  nowType:function(){     //当前选中的左侧菜单位置
    return this.$store.state.choiceType
  },

},

watch: {
    addClick(nVal,oVal){
      console.log(this.addtype)
      this.addtypeChange(this.addtype)
    }
},

methods: {
    handleChange(val){
        this.$emit('searchBtn',val)

    },
    // 动态添加组件函数
    addtypeChange(val){
        let addEl = ''
        console.log(val)
        switch(val){
            case '标题':
                addEl='task-title'
                break;
            case '文字':
                addEl='rich-text'
                break;
            case '资源':
                addEl='task-title'
                break;
            case '学练':
                addEl='trainer'
                break;
            case '提交':
                break;
            case '量表':
                addEl='task-scale'
                break;
            case '工具':
                addEl='subject-tool'
                break;
            case '预留':
                addEl='teacher-reserve'
                break;

        }
        this.componentData.push(
            {
                type:addEl,
                itemData:'1'
            }
        )
    },
    // 操作按钮
    handleBtn(){

    },
    // 保存
    onSaveClick(){
      let item = this.$store.state.leftInfo
      console.log(item)
      return
      let parentId = ''
      let dsid = ''
      if(item=='new'){     //如果是点击上册新建任务 传o如果是任务群下新建传父eid
        parentId = 0
        dsid = 0
      }else{
        parentId = item.gid
        dsid = item.dsId
      }
      let param = {
        parentId:parentId,    //pattern =1, 手工开启， 2：闯关模式
        dsId: dsid,
        pattern:2,
        position: 1,
        title:this.value,
        completedStd :3,
      }
      this.sendRequest('/Task/create_task',param,(res)=>{
        console.log(res)
      })
    },

    // 任务标题
    creteTitle(){

    }
},

beforeCreate() {

},
created() {

},
}
</script>
<style  scoped>
    .task-box {
        margin-top: 14px;
    }
    .task-top >>> .el-input{
        width:584px;
        /* height: 32px; */
    }
    .task-top >>> input{
        width:584px;
        /* height: 32px; */
        border: none;
    }
    .task-top /deep/ .el-switch.is-checked .el-switch__core{
        background: #87A6F4;
    }
    .task-top-font {
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        color: #4F4F4F;
        letter-spacing: 0;
        margin-left: 18px;
    }
    .task-save {
        background: #87A6F4;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.04);
        border-radius: 1px;
        border-radius: 1px;
        height: 40px;
        width: 60px;
        color: #fff;
        line-height: 40px;
        text-align: center;
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
        margin-left: 20px;
    }
</style>
