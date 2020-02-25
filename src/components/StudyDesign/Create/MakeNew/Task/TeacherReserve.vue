<!--  -->
<template>
    <div class='reserve-box'>
        <div class="reserve-top">
            <span>教师预留区域(仅教师可见)</span>

            <span class="edit-reserve">编辑</span>
            <task-btn @handleBtn='handleBtn'></task-btn>                
        </div>
        <!-- 图文区 -->
        <div class="reserve-graphic">
            <span>图文区</span>
        </div>
        <div class="reserve-resource">
            <span>资源区</span>
            <div class="reserve-resource-btn">
                <span>资源库选择</span>
                <span>本地上传</span>
            </div>
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
    .reserve-top {
        height: 40px;
        line-height: 40px;
        font-family: SourceHanSansCN-Regular;
        font-size: 16px;
        color: #4F4F4F;
        letter-spacing: 0;
        background: #fff;
        padding-left: 20px;
    }
    .radio {
        margin-left: 20px;
    }
    .reserve-top /deep/ .el-radio__input.is-checked+.el-radio__label{
        color: #87A6F4;
    }
    .reserve-top /deep/ .el-radio__input.is-checked .el-radio__inner{
        background: #87A6F4;
        border-color:#87A6F4;
    }
    .reserve-box {
        margin-top: 14px;
        /* background: #fff; */
        /* padding-left: 20px; */
    }
    .edit-reserve {
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        color: #5A7CC4;
        letter-spacing: 0;
        text-align: center;
        cursor: pointer;
        position: absolute;
        right: 150px;
    }
    .reserve-graphic {
        padding-left: 20px;
        background: #fff;
        height: 40px;
        line-height: 40px;
        margin-top: 4px;
        background: #fff;
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        color: #757575;
        letter-spacing: 0;
    }
    .reserve-resource {
        padding-left: 20px;
        background: #fff;
        height: 40px;
        line-height: 40px;
        margin-top: 4px;
        background: #fff;
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        color: #757575;
        letter-spacing: 0;
    }
    .reserve-resource-btn {
        float: right;
        margin-right: 26px;
    }
    .reserve-resource-btn span {
        margin-left: 40px;
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        color: #5A7CC4;
        letter-spacing: 0;
        text-align: center;
        cursor: pointer;
    }
</style>