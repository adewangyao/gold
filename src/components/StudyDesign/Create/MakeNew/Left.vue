<!-- 新建左侧组件 -->
<template>
    <div class="left-box">
        <div class="top-btn">
            <span class="task-group" @click="onCreateTaskGroup">建任务群</span>
            <span class="task" @mouseenter.stop="changeActiveTask($event)" @mouseleave.stop="removeActiveTask($event)" @click="onCreateTask('new')">创建任务</span>
        </div>
        <div class="list">
            <!-- <div class="list-item" @mouseenter="changeActiveItem($event)" @mouseleave="removeActiveItem($event)"> -->
            <template v-for="(item,i) in dataList"  >
            <div class="list-item"  :key='i' v-if="item.type==1">
                <!-- 第一层任务群 -->
                <div class="item-until" :class="{'item-selected':choiceId==item.gid}">
                    <span class="tip1"></span>
                    <span class="unit-title" :title="item.title" @click="onLeftClick('taskGroup',item)">
                        {{item.title}}
                    </span>
                    <span class="handle-btn">
                        <span class="btn-add" @click="onCreateTask(item)"></span>
                        <span class="btn-reduce" @click="delTask(item)"></span>
                        <span class="btn-up" @click="onHandlePosition(item,true)"></span>
                        <span class="btn-down" @click="onHandlePosition(item,false)"></span>
                    </span>
                </div>
                <!-- 任务 -->
                <div class="item-task "  v-for="(citem,ci) in item.tasks" :key='ci'>
                    <div class="item-task-inn" :class="{'item-selected':choiceId==citem.gid}">
                      <span class="tip2"></span>
                      <span class="unit-task" :title="citem.title" @click="onLeftClick('task',citem)">
                          {{citem.title}}
                      </span>
                      <span class="handle-btn">
                          <span class="btn-add" @click="onChildTask(citem)"></span>
                          <span class="btn-reduce" @click="delTask(citem)"></span>
                          <span class="btn-up" @click="onHandlePosition(citem,true)"></span>
                          <span class="btn-down" @click="onHandlePosition(citem,false)"></span>
                      </span>
                    </div>
                    <!-- 子任务 -->
                    <div class="item-inn" :class="{'item-selected':choiceId==ccitem.gid}" v-for="(ccitem,cci) in citem.tasks" :key='cci' :title="ccitem.title">
                        <span class="tip2"></span>
                        <span class="unit-inn" @click="onLeftClick('taskChildren',ccitem)">
                            {{ccitem.title}}
                        </span>
                        <span class="handle-btn">
                            <!-- <span class="btn-add"></span> -->
                            <span class="btn-reduce" @click="delTask(ccitem)"></span>
                            <span class="btn-up" @click="onHandlePosition(ccitem,true)"></span>
                            <span class="btn-down" @click="onHandlePosition(ccitem,false)"></span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="list-item" :key='i' v-if="item.type==2">
                <!-- 第一层任务群 -->
                <div class="item-until" :class="{'item-selected':choiceId==item.gid}">
                    <span class="tip1"></span>
                    <span class="unit-title" :title="item.title" @click="onLeftClick('task',item)">
                        {{item.title}}
                    </span>
                    <span class="handle-btn">
                        <span class="btn-add" @click="onChildTask(item)"></span>
                        <span class="btn-reduce" @click="delTask(item)"></span>
                        <span class="btn-up" @click="onHandlePosition(item,true)"></span>
                        <span class="btn-down" @click="onHandlePosition(item,false)"></span>
                    </span>
                </div>
                <!-- 任务 -->
                <div class="item-task "  v-for="(citem,ci) in item.tasks" :key='ci'>
                    <div class="item-task-inn" :class="{'item-selected':choiceId==citem.gid}">
                      <span class="tip2"></span>
                      <span class="unit-task" :title="citem.title" @click="onLeftClick('taskChildren',citem)">
                          {{citem.title}}
                      </span>
                      <span class="handle-btn">
                          <!-- <span class="btn-add" @click="onChildTask(citem)"></span> -->
                          <span class="btn-reduce" @click="delTask(citem)"></span>
                          <span class="btn-up" @click="onHandlePosition(citem,true)"></span>
                          <span class="btn-down" @click="onHandlePosition(citem,false)"></span>
                      </span>
                    </div>

                </div>
            </div>
            </template>
        </div>
    </div>
</template>

<script>


export default {
    // props:{
    //   data:Array,
    // },
    components: {

    },

    data() {
      return {
        dataList:[],
        dsId:this.$route.query.id,
        choiceId:'',
      };
    },

    computed: {

      },

    watch: {
      data (nva,ol) {
      }

    },

    methods: {
        changeActiveTask(e){
            e.currentTarget.className="task-over"
        },
        removeActiveTask(e){
            e.currentTarget.className="task"
        },
        // 编辑查看对应信息
        onLeftClick(type,val){
          val.isEdit = true
          this.choiceId = val.gid
          this.$store.commit('changeType',type)
          this.$store.commit('changeLeftInfo',val)
        },

        // 创建任务群
        onCreateTaskGroup(){
          this.$store.commit('changeType','taskGroup')
          this.$store.commit('changeLeftInfo',{})
        },
        // 创建任务
        onCreateTask(item){
          this.choiceId = item.gid
          if(item!='new'){
            item.isEdit = false
          }
          this.$store.commit('changeLeftInfo',item)
          this.$store.commit('changeType','task')


        },
        // 创建子任务
        onChildTask(val){
          this.choiceId = val.gid
          this.$store.commit('changeType','taskChildren')

          let param = {
              parentId: val.gid,
              dsId: this.dsId,
              title:'2务',
              // gid:'',
          }
          this.sendRequest('/Task/child_task_mgr',param,res=>{
            console.log(res)
            this.getTaskTree()
          })

        },
        // 删除任务
        delTask(val){
          let param = {
            dsId:this.dsId,
            taskId:val.gid
          }
          console.log(val)
          this.sendRequest('/Task/Del',param,res =>{
            this.getTaskTree()
          })
        },
        // 操作位置
        onHandlePosition(val,isUp){
          this.choiceId = val.gid
          console.log(val,isUp)
          let param = {
            taskId:val.gid,
            direction:isUp,
          }
          this.sendRequest('/Task/update_position',param,res => {
            console.log(res)
            this.getTaskTree()
          })
        },
        // 树结构获取
        getTaskTree(){
          this.sendRequest(`/Query/design_task_tree/${this.dsId}`,'',res => {
            console.log(res)
            this.dataList = res.result[0]
          })
        }
    },

    beforeCreate() {

    },
    beforeDestroy(){
      this.$event.$off('updateLeft',);
    },
    created() {
      this.getTaskTree()
      this.$event.$on('updateLeft',()=>{
        // alert(2223)
        this.getTaskTree()
        // alert(2323)
      })
    },
}
</script>
<style  scoped>
    .left-box {
       width: 350px;
       min-height: 90%;
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
    .unit-task {
      padding-left: 12px;
      width: 140px;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
    .item-selected {
        background: #fff;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.08);
        border-radius: 2px;
        color: #6B92F4!important;
    }
    .item-until:hover {
        background: #fff;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,0.08);
        border-radius: 2px;
        color: #6B92F4;
    }
    .unit-title {
      width: 140px;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 30px;
    }
    .unit-inn {
      width: 140px;
      padding-left: 12px;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 30px;
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
        height: 20px;
        background: #6B92F4;
    }
    .tip2 {
        width:4px;
        position: absolute;
        top: 48%;
        /* left: 0; */
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
        /* width: 284px; */
        position: relative;
        height: 40px;
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
        padding-left: 30px;
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
