
<!-- 单元概述 -->
<template>
  <div>
    <div class="search">
      <el-input
          @input='handleChange'
          placeholder=""
          clearable
          v-model="value">
      </el-input>
      <span class="save">保存</span>
    </div>
    <div class="textarea">
      <el-input
        type="textarea"
        :rows="24"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
    </div>
  </div>
</template>

<script>


export default {

components: {

},

data() {
  return {
    value:'',
    textarea:'',
  };
},

computed: {

},

watch: {

},

methods: {
  handleChange(){}
},

beforeCreate() { 

},
created() {

},
}
</script>
<style  scoped>
    .search >>> .el-input{
        width:822px;
        height: 40px;
    }
    .search >>> input{
        margin-top: 14px;
        width:822px;
        height: 40px;
        border: none;
    }
    .save {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      color: #fff;
      width: 78px;
      cursor: pointer;

      text-align: center;
      background: #87A6F4;
      margin-left: 12px;
    }
    .textarea {
      margin-top: 12px;
    }
    .textarea /deep/ textarea {
      border: none;
    }
</style>