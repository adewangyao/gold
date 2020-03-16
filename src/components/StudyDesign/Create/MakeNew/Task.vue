<!-- 任务界面 -->
<template>
    <div class="task-box">
        <div class="task-top" v-if="nowType=='task'||nowType=='tasekChild'">
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
                active-value=1
                inactive-value=0
                v-model="openVal"
                >
            </el-switch>
            <el-tooltip placement="top">
              <div slot="content" class="tip-text">
                完成标准：<br>
                文字阅读，打开该页面即达成；<br>
                资源查看：打开该资源可以达成，注意记录打开次数与时长；<br>
                错题订正：完成所有错题订正后可以完成；<br>
                作品提交：完成个人、小组提交动作后可达成；<br>
                量表评价：三种量表评价，完成自评后可达成；
            </div>
              <span class="task-top-font">
                  闯关模式
              </span>
            </el-tooltip>
            <el-switch
                v-model="breakVal"
                active-value=1
                inactive-value=0
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
      openVal:false,
      breakVal:false,
      componentData:[],   //循环组件
  };
},

computed: {
  nowType:function(){     //当前选中的左侧菜单位置
    return this.$store.state.choiceType
  },
  leftClick:function(){
    return this.$store.state.leftInfo
    //  this.addtypeChange(this.addtype)
  }

},

watch: {
    addClick(nVal,oVal){
      this.addtypeChange(this.addtype)
    },
    leftClick(nVal,oVal){
      if(nVal.type==2){
        this.value = nVal.title
      }else {
        this.value = ''
      }

      this.getTaskContent()
    }

},

methods: {
    handleChange(val){
        this.$emit('searchBtn',val)

    },
    // 动态添加组件函数
    addtypeChange(val){
        let addEl = ''
        // console.log(val)
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
                itemData:{}
            }
        )
    },
    // 操作按钮
    handleBtn(){

    },
    // 顶部人名称处保存
    onSaveClick(){
      // 处理是否是新建或者编辑的一些逻辑
      let item = this.$store.state.leftInfo
      console.log(item)
      let gid = ''
      item.isEdit?gid = item.gid:gid = ''
      let parentId = ''
      // let dsid = ''
      if(item=='new'){     //如果是点击上面新建任务 传o如果是任务群下新建传父eid
        parentId = ''
      }else{
        parentId = item.gid
      }

      console.log(gid)
      // return
      let param = {
        parentId: parentId,
        dsId: this.$route.query.id,
        manual: Boolean(this.openVal),
        breakThrough: Boolean(this.breakVal),
        completedStd: 1,
        title: this.value,
        // gid:gid,
      }
      if(item.isEdit){param.gid=item.gid}
      if(item=='new'){delete param.parentId}  //新建同级时删除parengis属性
      this.sendRequest('/Task/task_mgr',param,(res)=>{
        this.$event.$emit('updateLeft',);
      })
    },
    // 右侧内容
    getTaskContent(){
      this.componentData = []
      console.log(this.$store.state.leftInfo)
      let param = {
        taskId:this.$store.state.leftInfo.gid,
        dsId:this.$route.query.id,
      }
      // "标题": 1,
      // "工具": 64,
      // "量表": 32,
      // "提交": 16,
      // "文字": 2,
      // "学练": 8,
      // "预留": 128,
      // "资源": 4
      this.sendRequest('/Query/task_content',param,res => {
        console.log(res)

        if(res.retcode==0&&res.result[0]){

          // 处理应该东右侧应该渲染的组件
          this.delRightData(res.result[0])

        }
      })
    },
    // 处理应该东右侧应该渲染的组件
    delRightData(val){
      this.componentData = []
      val.forEach((item,i)=>{
        let addInfo = {}
        addInfo.itemData = item
        switch(item.type){
          case 1 :    //标题
            addInfo.type = 'task-title'
            break;
          case 64 :    //工具
            addInfo.type = 'subject-tool'
            break;
          case 32 :    //量表
            addInfo.type = 'task-scale'
            break;
          case 16 :    //提交
            // addInfo.type = 'task-trainer'
            break;
          case 2 :    //文字
            addInfo.type = 'rich-text'
            break;
          case 8 :    //学练
            addInfo.type = 'trainer'
            break;
          case 128 :    //预留
            addInfo.type = 'teacher-reserve'
            break;
          case 4 :    //资源
            // addInfo.type = 'task-trainer'
            break;
        }
        this.componentData.push(addInfo)
      })
    },
    // 任务标题
    creteTitle(){

    }
},

  beforeDestroy(){
    console.log(2)
    // this.$event.$off('updateLeft',);
  },
  created() {
    // this.getTaskContent()
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
    .tip-text {
      line-height: 20px;
    }
</style>
