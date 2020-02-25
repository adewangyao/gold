<!--  -->
<template>
    <div class='scale-box'>
        <div class="scale-top">
            <span>任务评价量表</span>
            <span class="edit-scale">编辑</span>
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
    .scale-top {
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
    .scale-top /deep/ .el-radio__input.is-checked+.el-radio__label{
        color: #87A6F4;
    }
    .scale-top /deep/ .el-radio__input.is-checked .el-radio__inner{
        background: #87A6F4;
        border-color:#87A6F4;
    }
    .scale-box {
        margin-top: 14px;
        background: #fff;
        padding-left: 20px;
    }
    .edit-scale {
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