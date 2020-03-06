<!--设计使用  -->
<template>
  <div>
    <el-header class="use-top">
      <div class="top-left">
        <span class="top-left-img"></span>
        语文第四单元学习设计
      </div>
      <div class="top-center">
        <span class="on-calss">上一班级</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="next-class">下一班级</span>
      </div>
      <!-- 右侧操作按钮 -->
      <div class="top-right">
        <span>
          <span class="back-btn"></span>
        </span>
        <span>
          <span class="release-btn"></span>
        </span>
      </div>
    </el-header>
    <el-container class="container" >
      <el-main class="contain-inn"  width='1084px'>
        <router-view></router-view>
      </el-main>
      <el-aside class="contain-right" width='196px'>
        <right @menuClick='menuClick'></right>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import right from './Right'
export default {
  components: {
    right,
  },
  data () {
    return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''

    };
  },


  computed: {},

  mounted: {},

  methods: {
    // 右侧菜单点击
    menuClick(val){}
  }
}

</script>
<style scoped>
  .use-top {
    background: #EAEAEA;
    height: 54px;
    justify-content: space-between;
    display:flex;
    line-height: 54px;

  }
  .top-left {
    position: relative;
    width: 290px;
    padding-left: 30px;

    font-size: 18px;
    /* color: #373737; */
    /* background: #000; */
  }
  .top-left-img {
    position: absolute;
    top: 26%;
    left: 0;
    display: inline-block;
    background: url('/static/image/icon_leftnav.png') no-repeat;
    background-position: -6px -5px;
    width:20px;
    height:22px;
  }
  .top-right {
    width: 290px;
    padding-top: 10px;
    /* background: #000; */
  }
  .top-right>span {
    position: relative;
    float: right;
    margin-left: 10px;
    background: #fff;
    cursor: pointer;
    width: 50px;
    height: 34px;
  }
  .top-right>span:hover {
      background: #81A5FF!important;
      transition: background .2s ease-in;
  }
  .top-right>span:hover .release-btn{
      background-position: -170px -34px;
  }
  .top-right>span:hover .back-btn{
      background-position: 0px -34px;
  }
  .release-btn {
    position: absolute;
    left: 6px;
    display: inline-block;
    width: 30px;
    height: 32px;
    background:  url('/static/image/btn_create.png') no-repeat ;
    background-position: -170px 0px;
  }
  .back-btn {
    position: absolute;
    left: 6px;
    display: inline-block;
    width: 30px;
    height: 32px;
    background:  url('/static/image/btn_create.png') no-repeat ;
  }

  .top-center {
    display: flex;
    width: 452px;
    /* background: #ffffff; */
    justify-content: space-between;
  }

  .top-center /deep/ .el-input__inner{
    width: 144px;
    border: none;
    height: 34px;
  }
  .on-calss {
    margin-top: 10px;
    background: #fff;
    width: 144px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    cursor: pointer;
    font-family: SourceHanSansCN-Normal;
    font-size: 16px;
  }
  .on-calss:hover {
      background: #81A5FF;
      color: #FFFFFF;
  }
  .next-class {
    background: #6B92F4;
    margin-top: 10px;
    width: 144px;
    height: 34px;
    color: #fff;
    line-height: 34px;
    text-align: center;
    cursor: pointer;
    font-family: SourceHanSansCN-Normal;
    font-size: 16px;
  }
  .next-class:hover {
      background: #81A5FF;
      color: #FFFFFF;
  }


  .container {
    margin-top: 14px;
    /* background: #ccc; */

  }
  /* .contain-inn {
    width: 1084px;
    padding: 0 26px;
    background: #000;
  }
  .contain-right {
    background: red;
  } */
</style>
