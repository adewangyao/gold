<!-- 设计库组件 -->
<template>
  <div>
      <el-dialog
        :visible.sync="dialogVisible"
        width="1220px"
        :show-close='isShow'
        custom-class="ware-dialog"
        :before-close="handleClose">
        <div class="search-box">
          <search @searchBtn='searchBtn' class="search"></search>
          <span class="x-btn" @click="onCloseDialog">X</span>
        </div>
        <div class="ware-inn">
          <!-- 左侧菜单 -->
          <div class="inn-left">
            <div class="left-unit">
              八年级.人教版.语文上
            </div>
            <div class="left-item">
              <span></span>
              主题一探索自然尽管的
            </div>
          </div>
          <div class="inn-right">
            <!-- 筛选项 -->
            <div class="inn-choice">
              <div>
                <span class="choice-title">范围:</span>
                <div class="choice-tips">
                  <span>集团设计</span>
                </div>
              </div>
              <!-- 学校筛选 -->
              <div>
                <span class="choice-title">学校:</span>
                <div class="choice-tips">
                  <span>全部</span>
                </div>
              </div>
            </div>
            <!-- 内容 -->
            <div class="inn-inn">
              <div class="inn-item">
                <div class="item-title">第一单元初始鲁迅学习设计</div>
                <div class="item-tips">
                  <span>2020-01-03</span>
                  <span>任务：18</span>
                  <span>引用人：王老师</span>
                  <span>未共享</span>
                </div>
                <span class="item-btn">
                  引用
                </span>
              </div>
            </div>
          </div>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import search from '../../Common/Search'
export default {
  props:{
    isWareVisible:{
      type:Boolean,
      default:false,
      }
  },
  components:{
    search
  },
  data () {
    return {
      dialogVisible: false,
      isShow:true,
    };
  },


  computed: {},

  watch:{
    isWareVisible(nVal,oVal){
      console.log(nVal)
      this.dialogVisible = nVal
    }
  },
  methods: {
    // 点击叉号关闭
      onCloseDialog(){
        this.dialogVisible =false
      },
      handleClose(done) {
        this.$emit('closeWare')
      },
      // 搜索框文字
      searchBtn(val){
        console.log(val)
      }
  }
}

</script>
<style scoped>
  .ware-dialog {
    height: 672px;
  }
  .search {
    display: inline-block;
  }
  .x-btn {
    display: inline-block;
    width: 52px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: #fff;
    color: #B1B1B1;
    cursor: pointer;
    position: absolute;
    right: 0;
  }
  .ware-inn {
    height: 92%;
    margin-top: 10px;
    display: flex;
  }
  .inn-left {
    /* display: inline-block; */
    width: 320px;
    background: #fff;
    height: 100%;
  }
  .inn-right {
    width: 72%;
    /* display: inline-block; */
    /* background: #000; */
    height: 100%;
    margin-left: 16px;
  }
  .inn-choice>div {
    display: flex;
    margin-top: 10px;
  }
  .inn-choice {
    /* width: 100%; */
    min-height: 72px;
    padding: 4px 10px;
    background: #fff;
  }
  .choice-title {
    color: #4F4F4F;
    font-family: SourceHanSansCN-Medium;
    font-size: 14px;
  }
  .choice-tips{
    margin-left: 6px;
  }
  .choice-tips span{
    margin-left: 6px;
    display: inline-block;
    padding: 0 4px;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    cursor: pointer;
    color: #4F4F4F;

  }
  .choice-tips span:hover{
    background: #8EB3FF;
    color: #fff;
  }
  .inn-inn {
    margin-top: 10px;
    background: #fff;
    /* height: 80px; */
    position: relative;
  }
  .inn-item {
    font-size: 16px;
    color: #4F4F4F;
  }
  .item-tips {
    font-size: 14px;
    color: #8F8F8F;
    margin-top: 16px;
  }
  .item-tips span{
    margin-right: 30px;
  }
  .inn-item {
    padding: 10px 20px;
    height: 80px;
    background: #fff;
    border-bottom:1px solid #ccc;

  }
  .item-title {
    margin-top: 10px;
  }
  .item-btn {
    cursor: pointer;
    position: absolute;
    display: block;
    border: 1px solid #CCD7EE;
    color: #5A7CC4;
    width: 68px;
    height: 26px;
    text-align: center;
    right: 30px;
    top: 32%;
    line-height: 26px;

  }
  .item-btn:hover {
    background: #8EB3FF;
    color: #fff;
  }
  .search-box {
    position: relative;
    padding-left: 202px;
  }

  .left-unit{
    cursor: pointer;
    font-size: 18px;
    color: #4F4F4F;
    padding-left: 20px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ccc;
  }
  .left-item {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    color: #4F4F4F;
    padding-left: 40px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ccc;
  }
  .left-item span {
    display: block;
    position: absolute;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    left: 8%;
    top: 49%;
    background: #BDBDBD;
  }
  .selected {
    background: #8EB3FF;
    color: #fff;
  }
  /deep/ .el-dialog {
       margin-top: 8vh!important;
       height: 84% ;
       position: relative;

  }
  /deep/ .el-dialog__body {
      height: 97%;
      background: #F7F7F7 ;
      padding: 20px 20px 0 0;

  }
  /deep/ .el-dialog__header {
       display: none;


  }
</style>
