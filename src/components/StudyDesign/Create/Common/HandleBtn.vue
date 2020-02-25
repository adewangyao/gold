<!-- 点击更多操作按钮 -->
<template>
    <div class='handle-box'>
        <el-dropdown trigger="click"  size="small">
        <span v-if="btnVal" @click="handleBtn" class="more-btn">更 多</span>
        <span v-else class="down" @click="handleBtn"><img src="/static/image/arrow_4.png" alt=""></span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item >导出</el-dropdown-item>
            <el-dropdown-item >复制</el-dropdown-item>
            <el-dropdown-item >分享</el-dropdown-item>
            <el-dropdown-item >共享</el-dropdown-item>
            <el-dropdown-item >移动到</el-dropdown-item>
            <el-dropdown-item >删除</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>


export default {

components: {

},

data() {
  return {
    btnVal:1,
  };
},

computed: {

},

watch: {

},

methods: {
    // 更多操作按钮
    handleBtn(){
        this.btnVal = !this.btnVal
    }
},

beforeCreate() { 

},
created() {

},
}
</script>
<style  scoped>
    .handle-box {
        display: inline-block;
        margin-left: 16px;
    }
    /deep/ .el-dropdown-menu__item{
        padding: 0 12px;
        color: #85898C ;
    }
    /deep/.el-popper[x-placement^=bottom]{
        margin-top: 6px;
    }
    >>> .popper__arrow{
        display: none;
    }

    .handle-box span{
        outline:none;
        color: #5A7CC4;
        font-size: 12px;
        float: left;
        display: block;
        /* margin-left: 16px; */
        cursor: pointer;
        text-align: center;
        line-height: 24px;
        width: 62px;
        height: 24px;
        border: 1px solid #CCD7EE ;
    }
    .more-btn{
       animation: 0.5s opacity2 0s; 
    }
    .down {
        background: #6B92F4 ;
        animation: 0.5s opacity 0s;
        
    }

     @keyframes opacity2{
         0%{opacity:0}
         50%{opacity:.8;}
         100%{opacity:10;}
     }
     @-webkit-keyframes opacity2{
         0%{opacity:0}
         50%{opacity:.8;}
         100%{opacity:10;}
     }
     @-moz-keyframes opacity2{
         0%{opacity:0}
         50%{opacity:.8;}
         100%{opacity:10;}
     }
     @keyframes opacity{
         0%{opacity:0}
         50%{opacity:.8;}
         100%{opacity:10;}
     }
     @-webkit-keyframes opacity{
         0%{opacity:0}
         50%{opacity:.8;}
         100%{opacity:10;}
     }
     @-moz-keyframes opacity{
         0%{opacity:0}
         50%{opacity:.8;}
         100%{opacity:10;}
     }
</style>