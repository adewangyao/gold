<!--  -->
<template>
    <div class='trainer-box'>
        <div class="trainer-top">
            <span>学练批阅方式</span>
            <span class="radio">
                <el-radio v-model="studypra" label="1">教师批阅</el-radio>
                <el-radio v-model="studypra" label="2">学生自批</el-radio> 
            </span>
            <span class="edit-trainer">编辑学练</span>
            <task-btn @handleBtn='handleBtn'></task-btn>                
        </div>
        <div></div>
    </div>
</template>

<script>

import TaskBtn from './Common/TaskBtn'
export default {

    components: {
        TaskBtn,
    },

    data() {
    return {
        studypra:'',      //学练批阅方式
    };
    },

    computed: {

    },

    watch: {

    },

    methods: {
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
    .trainer-top {
        height: 40px;
        line-height: 40px;
        font-family: SourceHanSansCN-Regular;
        font-size: 16px;
        color: #4F4F4F;
        letter-spacing: 0;
    }
    .radio {
        margin-left: 20px;
    }
    .trainer-top /deep/ .el-radio__input.is-checked+.el-radio__label{
        color: #87A6F4;
    }
    .trainer-top /deep/ .el-radio__input.is-checked .el-radio__inner{
        background: #87A6F4;
        border-color:#87A6F4;
    }
    .trainer-box {
        margin-top: 14px;
        background: #fff;
        padding-left: 20px;
    }
    .edit-trainer {
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        color: #5A7CC4;
        letter-spacing: 0;
        text-align: center;
        cursor: pointer;
        position: absolute;
        right: 150px;
    }
</style>