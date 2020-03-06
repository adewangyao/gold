<!-- 数据统计 -->
<template>
  <div>
    <div class="data-top">
      <span>按任务统计</span>
      <span>按人员统计</span>
    </div>
    <div class="data-inn">
      <router-view></router-view>
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

  mounted: {},

  methods: {}
}

</script>
<style scoped>
  .data-top {
    margin-top: -12px;
  }
  .data-top  span:hover{
    background: #81a5ff;
    color: #fff;
  }
  .data-top  span{
    margin-right: 10px;
    display: inline-block;
    width: 150px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    background: #fff;
  }
</style>
