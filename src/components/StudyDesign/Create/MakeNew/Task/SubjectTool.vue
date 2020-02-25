<!--  -->
<template>
    <div class='tool-box'>
        <div class="tool-top">

            <span class="edit-tool">学科工具</span>
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
    .tool-top {
        height: 40px;
        line-height: 40px;
        font-family: SourceHanSansCN-Regular;
        font-size: 16px;
        color: #4F4F4F;
        letter-spacing: 0;
    }
    .tool-top /deep/ .el-radio {

    }
    .radio {
        margin-left: 20px;
    }
    .tool-top /deep/ .el-radio__input.is-checked+.el-radio__label{
        color: #87A6F4;
    }
    .tool-top /deep/ .el-radio__input.is-checked .el-radio__inner{
        background: #87A6F4;
        border-color:#87A6F4;
    }
    .tool-box {
        margin-top: 14px;
        background: #fff;
        padding-left: 20px;
    }
    .edit-tool {
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