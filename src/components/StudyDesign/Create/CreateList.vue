<!-- 创建列表展示页面 -->
<template>
    <div class='box'>
        <div class="search">
            <search @searchBtn='searchBtn' class="search-box"></search>
            <div class="designLib" @mouseover="changeActiveDesign($event)" @mouseout="removeActiveDesign($event)" @click="onWareClick">设计库</div>
            <div class="makeNew" @mouseover="changeActiveNew($event)" @mouseout="removeActiveNew($event)" @click="onNewClick">新建</div>
        </div>
        <div class="main"  v-infinite-scroll="load" style="overflow:auto"  >
            <div class="item" v-for="(item,i) in itemList" :key="i" @click="onItemClick(item.gid)">
                <div class="item-left" >
                    <div class="item-title">{{item.name}}</div>
                    <div class="item-msg">
                        <span class="msg-tip">{{item.creationTime.substring(0,10)}}</span>
                        <span class="msg-tip">任务：{{item.taskCount}}</span>
                        <span class="msg-tip">创建：{{item.creatorName}}</span>
                        <span class="msg-tip">未共享</span>

                    </div>
                </div>
                <div class="item-right">
                    <span @click.stop="">发 布</span>
                    <span @click.stop="">编 辑</span>
                    <handle-btn :item='item'></handle-btn>
                </div>
            </div>
        </div>

        <new-catalog :isVisible='dialogVisible' @closeDialog='closeDialog'></new-catalog>
        <ware-dialog :isWareVisible='wareVisible' @closeWare='closeWare'></ware-dialog>
    </div>
</template>

<script>

import search from '../Common/Search'
import handleBtn from './Common/HandleBtn'
import NewChoice from './CreateList/NewChoice'
import NewCatalog from './Common/NewCatalog'
import WareDialog from './CreateList/WareDialog'
export default {
    name:"CreateList",
    components: {
        search,
        handleBtn,
        NewChoice,
        NewCatalog,
        WareDialog,
    },
    props:{
      itemList:Array
    },
    data() {
        return {
            // btnVal:1,
            dialogVisible:false,  //新建弹框
            wareVisible:false,  //设计库弹框
            num:1,

        };
    },

    computed: {

    },

    watch: {

    },

    methods: {
      // 滚动加载
        load(){
          this.$emit('pageChange')
        },
      // 关闭弹框
        closeDialog(){
          this.dialogVisible = false
        },
        closeWare(){
          this.wareVisible = false
        },
        searchBtn(val){
          if(this.num){
            this.num = 0
            window.setTimeout(()=>{
              this.$emit('keyChange',val)
              this.num=1
            },2000)
          }
        },
      // 点击新建
        onNewClick(){
          this.dialogVisible = true
        },
      // 点击设计库
        onWareClick(){
          this.wareVisible= true
        },
      // 更多操作按钮
        handleBtn(){
            this.btnVal = !this.btnVal
        },
      // 点击进入详情
        onItemClick(val){
          this.$router.push({
            path:"/makenew",
            query:{
              id:val
            }
          })
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

      //

    },

    beforeCreate() {

    },
    created() {
        // this.getCatalog()
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
        margin-top: 20px;
        height: 50%;
    }
/* 列表 */
    .item {
        position: relative;
        width: 100%;
        height: 80px;
        background: #fff;
        cursor: pointer;
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



</style>
