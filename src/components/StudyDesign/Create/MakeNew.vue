<!-- 新建任务界面 -->
<template>
    <div class='new-box'>
        <!-- 顶部 -->
        <top class="top"> </top>
        <div class="inner">
            <left class="left"></left>
            <div class="right">
                <div class="right-top">
                    <span @click='onAddComponent("预留")'>预留</span>
                    <span @click='onAddComponent("工具")'>工具</span>
                    <span @click='onAddComponent("量表")'>量表</span>
                    <span @click='onAddComponent("提交")'>提交</span>
                    <span @click='onAddComponent("学练")'>学练</span>
                    <span @click='onAddComponent("资源")'>资源</span>
                    <span @click='onAddComponent("文字")'>文字</span>
                    <span @click='onAddComponent("标题")'>标题</span>
                </div>
                <sum-unit></sum-unit>
                <!--addtype为上面文字按钮的功能  -->
                <task  :addtype='addType'></task>

            </div>
        </div>
    </div>
</template>

<script>

import top from './MakeNew/Top'
import left from './MakeNew/Left'
import SumUnit from './MakeNew/SumUnit'
import Task from './MakeNew/Task'
export default {

    name: "makenew",
    components: {
        top,
        left,
        SumUnit,
        Task,
    },

    data() {
        return {    
            addType:''  //添加的组件名称

        };
    },

    computed: {

    },

    watch: {

    },

    methods: {
        onAddComponent(val){
            this.addType = val
        },
        // 调试请求
        testRequest(){
            let params = {
                    content: "标3题",
                    taskId: 2
                }
                params = {
                    "tasks": [
                        {
                        "pattern": 1,
                        "contents": [
                            {
                            "eId": 1,
                            "dsId": 1,
                            "taskId": 1,
                            "position": 1
                            }
                        ],
                        "position": 1,
                        "level": 1,
                        "dsId": 1,
                        "parentId": 1,
                        "desc": "dd",
                        "eId": 1,
                        }
                    ],
                    "contents": [
                        {
                        "eId": 1,
                        "dsId": 1,
                        "taskId": 1,
                        "position": 1
                        }
                    ],
                    "position": 1,
                    "level": 1,
                    "dsId": 1,
                    "parentId": 1,
                    "desc": "string",
                    "eId": 1,
                }
                // this.$axios.post('/Task/create_task_group',
                //     params
                // )
                // .then(res=>{
                //     console.log('res=>',res);            
                // })
        }
    },

    beforeCreate() { 

    },
    created() {
        this.testRequest()
    },
}
</script>
<style  scoped>
    .left {
        float: left;
    }
    .right {
        float: left;
        width: 918px;
        height: 100%;
        margin-left: 12px;
    }
    .new-box{
        height: 100%;
    }
    .top {
        margin-top: 12px;
    }
    .inner {
        position: relative;
        margin-top:16px;
        height: 100%;
    }
    .right-top {
        height: 32px;

    }
    .right-top >span{
        float: right;
        display: block;
        background: #FFFFFF;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.04);
        border-radius: 1px;
        border-radius: 1px;
        width: 60px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        font-size: 14px;
        color: #4F4F4F;
        margin-left: 8px;
        cursor: pointer;
    }
    .right-top >span:hover {
        background: #6B92F4;
        color: #FFFFFF;
    }
</style>