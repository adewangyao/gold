<!-- 设计分类列表 -->
<template>
    <div class='classify-box'>
        <div class="top">
            <span class="btn-l">
                <img src="/static/image/leftarrow.png" alt="">
            </span>
            <span class="btn-r">
                <img src="/static/image/leftarrow.png" alt="">
            </span>
            <search @searchBtn='searchBtn' class="search-box"></search>
            <span class="make-new" @mouseover='onMouseOver($event)'  @mouseout="removeActive($event)" @click="newClassify({})">新建分类</span>
        </div>
        <div class="main">
            <div class="item" v-for="(item,i) in itemList" :key="i">
                <span class="bookmark">
                    <img  class="bookcolor" src="/static/image/bookmarks.png" alt="">
                </span>
                <span class="item-title">{{item.name}}</span>
                <span class="item-time">2018-01-06</span>
                <span class="item-btn">
                    <span class="rename" @click="newClassify(item)">重命名</span>
                    <span class="del" @click="onClickDel(item)">删除</span>
                </span>
            </div>

        </div>
        <classify-dialog :isVisable='isVisable' @upList='upList' @closeDialog='handleClose' :val='val'></classify-dialog>
    </div>
</template>

<script>

import search from '../Common/Search'
import ClassifyDialog from './Common/ClassifyDialog'
export default {

    components: {
        search,
        ClassifyDialog,
    },

    data() {
      return {
          btnColor:0,
          isVisable:false,
          val:{},
          itemList:[],
      };
    },

    computed: {

    },

    watch: {

    },

    methods: {
        searchBtn(val){
        },
        // 点击删除按钮
        onClickDel(item){
          this.$confirm('是否删除该分类?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.sendRequest(`/Category/del/${item.gId}`,'',res =>{
              console.log(res)
            })
          })
        },
        // 按钮进入换色
        onMouseOver(e){
            e.currentTarget.className="make-new make-new-over"
        },
        removeActive(e){
            e.currentTarget.className="make-new"
        },
        // 关闭弹框
        handleClose(){
          this.isVisable = false
          this.getCategory()

        },
        // 新建分类
        newClassify(val){
          this.val = val
          this.isVisable = true
        },
        // 重命名
        onClickRename(){
          this.isVisable = true
        },
        getCategory(){
          this.sendRequest('/Query/category','',res=>{
            this.itemList = res.result[0]
          })
        },
        upList(){
          this.isVisable = false
          this.getCategory()
        },
    },


    created() {
      this.getCategory()
    },
}
</script>
<style  scoped>
    .top {
        display: flex;
    }
    .btn-l,.btn-r {
        width: 50px;
        height: 32px;
        background: #fff;
        display: inline-block;
    }
    .btn-r {
        margin-left: 12px;
    }
    .btn-r img {
        margin-left: 12px;
        width: 28px;
        transform:rotate(180deg);
        display: block;
    }
    .btn-l img {
        margin-left: 12px;
        width: 28px;
        display: block;
    }
    .search-box {
        margin-left: 20px;
        display: inline-block;
    }
    .make-new {
        display: inline-block;
        width: 144px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        color: #fff;
        background: #6B92F4;
        margin-left: 28px;
        cursor: pointer;
    }
    .make-new-over {
        background: #81A5FF;
    }
    .main {
        margin-top: 20px;
    }
    /* 列表 */
    .bookmark {
        position: absolute;
        left: -8px;
        display: inline-block;
        width: 8px;
        top: 8px;
        overflow: hidden;
    }

    .item {
        box-sizing: border-box;
        padding: 16px;
        width: 100%;
        height: 80px;
        line-height: 44px;
        background: #fff;
        position: relative;
        margin-bottom: 8px;
    }
    .item-title {
        display: inline-block;
        width: 400px;
        color: #4F4F4F ;
        font-size: 18px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        vertical-align: bottom;

    }
    .item-time {
        font-family: SourceHanSansCN-Regular;
        font-size: 14px;
        color: #A7A7A7;
        letter-spacing: 0;
        vertical-align: bottom;
    }
    .item-btn {
        position: absolute;
        right: 20px;
    }
    .item-btn span{
        border:1px solid #CCD7EE;
        color: #5A7CC4;
        margin-left: 16px;
        display: inline-block;
        cursor: pointer;
        text-align: center;
        line-height: 24px;
        width: 62px;
        height: 24px;
        font-size: 12px;
    }

</style>
