<!-- 设计使用列表 -->
<template>
  <div class='use-box'>
      <div class="search">
        <div class="screen-btn" @click="onClickScreen">筛选</div>
        <search @searchBtn='searchBtn' class="search-box"></search>
        <!-- 筛选内容 -->
        <div class="screen-inn" v-if="isScreen">
          <div class="screen-div">
            <span class="screen-tit">时间:</span>
            <div  class="screen-choice">
              <span>截止今日</span>
              <span>近七日</span>
              <span>近一个月</span>
            </div>
          </div>
          <span class="screen-inn-btn"  @click="onClickScreen">确定</span>
        </div>
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
      isScreen:0,
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
    onClickScreen(){
      this.isScreen = !this.isScreen
    }
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
    .search-box /deep/ .el-input{
        width:938px!important;
        /* height: 32px; */
    }
    .search-box /deep/ input{
        width:948px!important;
        /* height: 32px; */
    }
    .screen-btn {
      display: inline-block;
      width: 144px;
      height: 32px;
      font-family: SourceHanSansCN-Regular;
      margin-right: 12px;
      background: #6B92F4;
      color: #fff;
      cursor: pointer;
      line-height: 32px;
      text-align: center;
    }
    .screen-btn:hover {
      background: #81A5FF;
    }
    .screen-inn-btn {
      background: #6B92F4;
      height: 32px;
      width: 100px;
      line-height: 32px;
      text-align: center;
      color: #fff;
      position: absolute;
      bottom: 16px;
      right: 16px;
      cursor: pointer;
      display: inline-block;
    }
    .screen-inn{
      z-index: 10;
      position: absolute;
      background: #FFFFFF;
      border: 1px solid rgba(107,146,244,.3);
      box-shadow: 0 4px 14px 0 rgba(140,156,181,0.16);
      border-radius: 2px;
      min-height: 160px;
      box-sizing: border-box;
      border-radius: 2px;
      padding:18px 20px 60px;
      width: 600px;
      transition: all .5s ease-in;
      font-size: 14px;
      color: #4F4F4F;
    }
    .screen-choice {
      display: inline-block;
    }
    .screen-choice span{
      cursor: pointer;
      display: inline-block;
      height: 28px;
      line-height: 28px;
      padding: 0 12px;
    }
    .screen-choice span:hover{
      background: #8EB3FF;
      color: #fff;
    }
    .screen-choice-sel {
      background: #8EB3FF;
      color: #fff;
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
