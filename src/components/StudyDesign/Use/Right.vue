<!-- 设计使用右侧 -->
<template>
  <div class="right-box">
    <div class="right-inn">
      <div @click="onClickBtn(1)" class="btn-reset"></div>
      <div @click="onClickBtn(2)" class="btn-btn">学习设计</div>
      <div @click="onClickBtn(3)" class="btn-btn">数据统计</div>
      <div @click="onClickBtn(4)" class="btn-btn">全部提交</div>
      <div @click="onClickBtn(5)" class="btn-btn">全部学练</div>
      <div @click="onClickBtn(6)" class="btn-btn">全部问题</div>
      <div @click="onClickBtn(7)" class="btn-btn">全部笔记</div>
      <div @click="onClickBtn(8)" class="btn-btn">课堂笔记</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    };
  },


  computed: {},

  // mounted: {},

  methods: {
    onClickBtn(val){
      this.$emit('menuClick',val)
    }
  }
}

</script>
<style scoped>
  .right-inn {
    width: 98px ;
    margin: 40px auto 0;
  }
  .right-inn  div{
    margin-bottom: 12px;
    width: 98px ;
    margin: 0 auto 10px;
  }
  .btn-reset {
    width: 34px!important;
    height: 34px;
    margin-left: 0px!important;
    border-radius: 50%;
    background: url('/static/image/icon_reset.png') no-repeat;
    background-position: -2px 0px;
  }
  .btn-btn {
    text-align: center;
    height: 28px;
    cursor: pointer;
    line-height: 28px;
    background: #fff;
  }
  .btn-btn:hover {
    background: #81A5FF 100%;
    color: #fff;
  }
</style>
