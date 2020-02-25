<!--  -->
<template>
    <div class="u-box">
        <el-container>
            <el-aside width="240px">
                <div class="u-title u-title-selected">初中数学八年级上 <span class="title1-img"></span></div>
                <div class="u-title">第一单元<span class="title2-img"></span></div>
                <div class="u-title"></div>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>


export default {

    components: {

    },

    data() {
    return {

    };
    },

    computed: {

    },

    watch: {

    },

    methods: {

    },

    beforeCreate() { 

    },
    created() {

    },
}
</script>
<style  scoped>
    .u-box {
        background: #f7f7f7;
        height: 100%;
    }
    .u-box /deep/ .el-aside{
        background: #fff;
        margin-right: 8px;
    }
    .u-box /deep/ .el-header{
        background: #fff;
        margin-bottom: 8px;
    }
    .u-box /deep/ .el-main{
        background: #fff;
    }
    .u-title {
        position: relative;
        height: 60px;
        line-height: 60px;
        padding-left: 12px;
        font-size: 16px;
        color: #4F4F4F;
        border-bottom: 1px solid #E7E7E7;
        cursor: pointer;
    }
    .u-title:hover {
        background: #81A5FF ;
        transition: background .4s ease-in;
        color: #fff;
    }
    .u-title-selected {
        font-size: 18px;
        background: #6B92F4;
        font-family: SourceHanSansCN-Regular;
        font-size: 16px;
        color: #fff;
    }
    .title2-img {
        display: inline-block;
        width: 18px;
        height: 16px;
        right: 20px;
        top: 32%;
        position: absolute;
        background: url('/static/image/arrow_2.png')
    }
</style>