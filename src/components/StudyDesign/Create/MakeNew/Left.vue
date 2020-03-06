<!-- 新建左侧组件 -->
<template>
    <div class="left-box">
        <div class="top-btn">
            <span class="task-group" @click="onCreateTaskGroup">建任务群</span>
            <span class="task" @mouseenter.stop="changeActiveTask($event)" @mouseleave.stop="removeActiveTask($event)" @click="onCreateTask('new')">创建任务</span>
        </div>
        <div class="list">
            <!-- <div class="list-item" @mouseenter="changeActiveItem($event)" @mouseleave="removeActiveItem($event)"> -->
            <div class="list-item" v-for="(item,i) in data" :key='i'>
                <!-- 名称 -->
                <div class="item-until">
                    <span class="tip1"></span>
                    <span class="unit-title">
                        单元概述
                    </span>
                    <span class="handle-btn">
                        <span class="btn-add" @click="onCreateTask(item.eId)"></span>
                        <span class="btn-reduce"></span>
                        <span class="btn-up"></span>
                        <span class="btn-down"></span>
                    </span>
                </div>
                <!-- 任务 -->
                <div class="item-task">
                    <div class="item-task-inn">
                      <span class="tip2"></span>
                      <span class="unit-task">
                          单元概述
                      </span>
                      <span class="handle-btn">
                          <span class="btn-add" @click="onChildTask(item.eId)"></span>
                          <span class="btn-reduce"></span>
                          <span class="btn-up"></span>
                          <span class="btn-down"></span>
                      </span>
                    </div>
                    <!-- 任务内容 -->
                    <div class="item-inn">
                        <span class="tip2"></span>
                        <span class="unit-inn">
                            单元概述
                        </span>
                        <span class="handle-btn">
                            <!-- <span class="btn-add"></span> -->
                            <span class="btn-reduce"></span>
                            <span class="btn-up"></span>
                            <span class="btn-down"></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props:{
      data:Array,
    },
    components: {

    },

    data() {
    return {

    };
    },

    computed: {
      },

    watch: {
      data (nva,ol) {
        console.log(nva)
      }

    },

    methods: {
        changeActiveTask(e){
            e.currentTarget.className="task-over"
        },
        removeActiveTask(e){
            e.currentTarget.className="task"
        },
        // 创建任务群
        onCreateTaskGroup(){
          this.$store.commit('changeType','tasekGroupTitle')
          console.log(this.$store.state.choiceType)
          return

        },
        // 创建任务
        onCreateTask(val){
          let parentId = ''
          if(val=='new'){     //如果是点击上册新建任务 传o如果是任务群下新建传父eid
            parentId = 0
          }else{
            parentId = val
          }
          let param = {
            parentId:parentId,
            dsId: 1,
            pattern:2,
            position: 0,
            compeletedStd:1,
          }
          this.sendRequest('/Task/create_task',param,(res)=>{
            console.log(res)
          })
        },
        // 创建子任务
        onChildTask(){
          let param = {
              parentId: 0,
              position: 0,
              dsId: 0
          }
          this.sendRequest('/Task/create_child_task',param,res=>{
            console.log(res)
          })

        },

    },

    beforeCreate() {

    },
    created() {
    },
}
</script>
<style  scoped>
    .left-box {
       width: 350px;
       height: 90%;
       background: #FCFCFC;
       box-sizing: border-box;
       padding-top: 12px;
       padding-left:20px;
    }
    .top-btn >span{
        display: inline-block;
        text-align: center;
        line-height: 32px;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.04);
        border-radius: 2px;
        width: 150px;
        cursor: pointer;
        height: 32px;
        font-family: SourceHanSansCN-Regular;
        font-size: 16px;
    }
    .task-group {
        background: #6B92F4;
        color: #fff;
        margin-right: 6px;
    }
    .task {
        background: #EAEAEA;
        color: #4F4F4F;
    }
    .task-over {
        background: #6B92F4;
        color: #fff;
    }
    .list-item {
        margin-top: 12px;
    }
    .list-item>div{
        position: relative;
    }
    .item-inn:hover {
        background: #fff;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.08);
        border-radius: 2px;
        color: #6B92F4;
    }
    .item-until:hover {
        background: #fff;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.08);
        border-radius: 2px;
        color: #6B92F4;
    }
    .item-task-inn:hover{
        background: #fff;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.08);
        border-radius: 2px;
        color: #6B92F4;
    }
    /* 列表样式 */
    .tip1 {
        display: inline-block;
        width: 3px;
        height: 10px;
        background: #6B92F4;
    }
    .tip2 {
        display: inline-block;
        width:4px;
        height:4px;
        border-radius: 50%;
        background: #757575;
    }
    .tip2-choice {
        display: inline-block;
        width:4px;
        height:4px;
        border-radius: 50%;
        background: #6E94F4;
    }
    .item-until{
        cursor: pointer;
        padding-left: 20px;
        width: 312px;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
    }
    .choice {
        box-sizing: border-box;
        width: 312px;
        height: 40px;
        line-height: 40px;
        background: #FFFFFF;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.08);
        border-radius: 2px;
        border-radius: 2px;
        background: #6B92F4;
    }
    .selected {
        box-sizing: border-box;
        width: 312px;
        height: 40px;
        line-height: 40px;
        background: #FFFFFF;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.08);
        border-radius: 2px;
        border-radius: 2px;
        background: #6B92F4;
    }
    .color {
        background: #6B92F4;
    }
    /* 任务  */
    .item-task{
        cursor: pointer;
        padding-left: 20px;
        width: 312px;
        /* height: 40px; */
        line-height: 40px;
        box-sizing: border-box;
        font-size: 16px;
        color: #4F4F4F;
        letter-spacing: 0;
    }
    .item-task-inn{
        cursor: pointer;
        width: 284px;
        /* height: 40px; */
        padding-left: 10px;
        line-height: 40px;
        box-sizing: border-box;
        font-size: 16px;
        color: #4F4F4F;
        letter-spacing: 0;
    }
    /* 任务内容 */
    .item-inn{
      position: relative;
        cursor: pointer;
        padding-left: 20px;
        width: 292px;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        font-size: 16px;
        color: #4F4F4F;
        letter-spacing: 0;
    }
    /* 操作按钮样式 */
    .handle-btn{
        position: absolute;
        right: 10px;
        top: 4px;
    }
    .handle-btn>span{
        margin-left: 8px;
        display: inline-block;
        width: 19px;
        height: 19px;
    }
    .btn-add {
        background:url('/static/image/btn_new.png') no-repeat ;
        background-position: 0px 0px;
    }
    .btn-add:hover {
        background:url('/static/image/btn_new.png') no-repeat ;
        background-position: 0px -19px;
    }
    .btn-reduce {
        background:url('/static/image/btn_new.png') no-repeat ;
        background-position: -19px 0px;
    }
    .btn-up {
        background:url('/static/image/btn_new.png') no-repeat ;
        background-position: -38px 0px;
    }
    .btn-down {
        background:url('/static/image/btn_new.png') no-repeat ;
        background-position: -57px 0px;
    }
    .btn-reduce:hover {
        background:url('/static/image/btn_new.png') no-repeat ;
        background-position: -19px -19px;
    }
    .btn-up:hover {
        background:url('/static/image/btn_new.png') no-repeat ;
        background-position: -38px -19px;
    }
    .btn-down:hover {
        background:url('/static/image/btn_new.png') no-repeat ;
        background-position: -57px -19px;
    }
</style>
