<!-- 创建列表展示页面 -->
<template>
    <div class='box'>
        <div class="search">
            <search @searchBtn='searchBtn' class="search-box"></search>
            <div class="designLib" @mouseover="changeActiveDesign($event)" @mouseout="removeActiveDesign($event)">设计库</div>
            <div class="makeNew" @mouseover="changeActiveNew($event)" @mouseout="removeActiveNew($event)" @click="onNewClick">新建</div>
        </div>
        <div class="main">
            <div class="item">
                <div class="item-left">
                    <div class="item-title">第一单元处识鲁迅学习设计</div>
                    <div class="item-msg">
                        <span class="msg-tip">2020-02-18</span>
                        <span class="msg-tip">任务：18</span>
                        <span class="msg-tip">创建：王老师</span>
                        <span class="msg-tip">未共享</span>
                        
                    </div>
                </div>
                <div class="item-right">
                    <span>发 布</span>
                    <span>编 辑</span>
                    <handle-btn></handle-btn>
                </div>
            </div>
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            custom-class=“new-dialog”
            width="1220px"
            :before-close="handleClose">
            <new-choice :config='config1'></new-choice>
            <span slot="footer" class="dialog-footer">
                <div class="footer-catlog">
                    <span class="catalog-span">wew</span>
                    <span class="catalog-span">/</span>
                    <span class="catalog-x">x</span>
                </div>
                <span class="catalog-btn" @click="onCatalogCancel">取消</span>
                <span class="catalog-btn" @click="onCatalogSure">确认</span>
            </span>
        </el-dialog>
    </div>
</template>

<script>

import search from '../Common/Search'
import handleBtn from './Common/HandleBtn'
import NewChoice from './CreateList/NewChoice'
export default {
    name:"CreateList",
    components: {
        search,
        handleBtn,
        NewChoice,
    },

    data() {
        return {
            // btnVal:1,
            dialogVisible:true,
            config1:{
                width:'60px',
                fsize:'18px'
            }
        };
    },

    computed: {

    },

    watch: {

    },

    methods: {
        searchBtn(val){
            console.log(val)
        },
        // 更多操作按钮
        handleBtn(){
            this.btnVal = !this.btnVal
        },
        // 操作按钮进入变色
        changeActiveDesign(e){
            e.currentTarget.className="designLibOver"
        },
        removeActiveDesign(e){
            e.currentTarget.className="designLib"
        },
        changeActiveNew(e){
            e.currentTarget.className="makeNewOver"
        },
        removeActiveNew(e){
            e.currentTarget.className="makeNew"
        },
        // 创建新任务
        onNewClick(){
            this.$router.push('/makenew')
        },
        onCatalogSure(){
            this.dialogVisible = false
        },
        onCatalogCancel(){
            this.dialogVisible = false
        }

    },

    beforeCreate() { 

    },
    created() {

    },
}
</script>
<style  scoped>
    .box {
        font-family: SourceHanSansCN-Regular;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;    
    }
    .search-box {
        display: inline-block;
    }
    .designLib {
        cursor: pointer;
        display: inline-block;
        width: 120px;
        height: 32px;
        line-height: 30px;
        margin-left: 19px;
        background: #61B4EE;
        text-align: center;
    }
    .designLibOver {
        cursor: pointer;
        display: inline-block;
        width: 120px;
        height: 32px;
        line-height: 30px;
        margin-left: 19px;
        background: #7BC6FB;
        text-align: center;
    }
    .makeNew {
        cursor: pointer;
        margin-left: 19px;
        display: inline-block;
        width: 134px;
        height: 32px;
        line-height: 30px;
        background: #6B92F4;
        text-align: center;
    }
    .makeNewOver {
        cursor: pointer;
        margin-left: 19px;
        display: inline-block;
        width: 134px;
        height: 32px;
        line-height: 30px;
        background: #81A5FF;
        text-align: center;
    }
    .main {
        margin-top: 16px;
    }
/* 列表 */
    .item {
        position: relative;
        width: 100%;
        height: 80px;
        background: #fff;
        padding: 20px 20px 16px 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #eaecee;
    }
    .item-left {
        color: #4F4F4F ;
        font-size: 16px;
    }
    .item-title{
        color: #4F4F4F ;
        font-size: 16px;
    }
    .item-msg{
        margin-top: 6px;
        color: #8F8F8F;
        font-size: 14px;
    }
    .msg-tip {
        padding-right: 26px;
    }
    .item-right {
        position: absolute;
        color: #5A7CC4;
        font-size: 12px;
        right: 20px;
        top: 32%;
    }
    .item-right>span{
        float: left;
        display: block;
        margin-left: 16px;
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
    /deep/ .el-dialog {
         margin-top: 8vh!important;
         height: 84% ;
         position: relative;
         
    }
    /deep/ .el-dialog__body {
         height: 80%;
         padding-bottom: 10px;
         padding-top: 10px;

    }
    /deep/ .el-dialog__footer {
         height: 12%;
         background: #F7F7F7;
         position: relative;
         text-align: left;
         /* padding-bottom: 0; */

    }
    .footer-catlog {
        vertical-align: bottom;
        display: inline-block;
        margin-top: .5%;
        height: 32px;
        padding-left: 10px;
        line-height: 32px;
        width: 846px;
        position: relative;
        background: #fff;
        color: #4F4F4F;
    }
    .catalog-span {
        font-size: 14px;
        color: #4F4F4F;
        letter-spacing: 0;
        display: inline-block;
        max-width: 110px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .catalog-x {
        position: absolute;
        color: #fff;
        text-align: center;
        width: 18px;
        height: 18px;
        line-height: 16px;
        cursor: pointer;
        right: 10px;
        top: 20%;
        display: inline-block;
        border-radius: 50%;
        background: rgba(221,221,221,.5);
    }
    .catalog-x:hover {
        background: #8EB3FF;
        
    }
    .catalog-btn {
        display: inline-block;
        height: 32px;
        width: 120px;
        background: #6B92F4;
        color: #fff;
        line-height: 32px;
        text-align: center;
        margin-left: 30px;
        cursor: pointer;
    }
    .catalog-btn:hover {
        background: #81A5FF ;
        transition: background .3s ease-in;
    }
</style>
