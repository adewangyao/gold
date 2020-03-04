<!-- 设计分享列表 -->
<template>
  <div class='use-box'>
      <div class="search">
        <div class="screen-btn" >
          <span>我的分享</span>
          <span>他人分享</span>
        </div>
        <search @searchBtn='searchBtn' class="search-box"></search>
       <div class="makeNew">搜 索</div>
      </div>
      <!-- 内容区域 -->
      <div class="use-inn">
        <div class="use-inn-item" v-for="(item,i) in itemList" :key="i">
          <div class="item-left">
            <div class="item-title">{{item.name}}</div>
            <div class="item-tips">
              <span>{{item.creationTime.substring(0,10)}}</span>
              <span>任务：{{item.taskCount}}</span>
              <span>创建：{{item.creatorName}}</span>
              <span>未共享</span>
            </div>
          </div>

          <div class="item-right">
            <span>编辑</span>
            <span>对象</span>
            <span>归档</span>
            <span>授课</span>
          </div>
        </div>

      </div>
  </div>
</template>

<script>

import search from '../Common/Search'
export default {
    name:"UseList",
    components: {
        search,
    },
    props:{
      itemList:Array
    },
  data() {
    return {
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

  },

  beforeCreate() {

  },
  created() {

  },
}
</script>
<style  scoped>
    .search {
      position: relative;
    }
    .search-box {
        display: inline-block;
    }
    .makeNew {
        cursor: pointer;
        margin-left: 19px;
        display: inline-block;
        width: 118px;
        height: 32px;
        color: #fff;
        line-height: 30px;
        background: #6B92F4;
        text-align: center;
    }
    .screen-btn {
      display: inline-block;
      width: 144px;
      height: 32px;
      font-family: SourceHanSansCN-Regular;
      margin-right: 12px;
      cursor: pointer;
      line-height: 32px;
      text-align: center;
    }
    .screen-btn span:hover {
      color: #81A5FF;
    }

    .use-inn {
      padding-top: 16px;
      position: relative;
    }
    .use-inn-item{
      background: #fff;
      padding: 20px 20px 16px 20px;
      height: 80px;
      box-sizing: border-box;
      position: relative;
      border-bottom: 1px solid #eaecee;
    }

    .item-title {
      font-family: SourceHanSansCN-Regular;
      font-size: 16px;
      color: #4F4F4F;
    }
    .item-tips {
      margin-top: 6px;
      font-family: SourceHanSansCN-Regular;
      font-size: 14px;
      color: #8F8F8F;
    }
    .item-tips span {
      margin-right: 26px;
    }
    .item-right {
      position: absolute;
      right: 20px;
      top: 32%;
    }
    .item-right span{
      display: inline-block;
      height: 26px;
      margin-left: 16px;
      line-height: 26px;
      width: 64px;
      color: #5A7CC4;
      font-size: 12px;
      border: 1px solid #CCD7EE;
      text-align: center;
    }
</style>
