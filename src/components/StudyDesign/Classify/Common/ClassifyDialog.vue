
<!-- 新建分类弹框 -->
<template>
  <div>
      <el-dialog
        title="分类名称"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-input v-model="input" placeholder="请输入分类名称"></el-input>
        <span slot="footer">
          <span class="sure" @click="onSureClick">确 定</span>
        </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  props:{
    isVisable:{
      type:Boolean,
      default:false,
      }
  },
  data () {
    return {
      input:'',
      dialogVisible:false,
    };
  },
  watch:{
    isVisable(nVal,oVal){
      this.dialogVisible = nVal
    }
  },

  computed: {},


  methods: {
    createClassify(){
      let param = {
        name:'12345'
      }
      this.sendRequest('/Category/create',param,res=>{
        console.log(res)
      })
    },
    onSureClick(){
      this.createClassify()
    },
    handleClose(){
      this.dialogVisible = false
      this.$emit('closeDialog')
    }
  }
}

</script>
<style scoped>
  .sure {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    width: 100px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    background: #6B92F4;
  }
</style>
