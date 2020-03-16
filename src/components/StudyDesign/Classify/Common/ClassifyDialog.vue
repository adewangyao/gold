
import func from './vue-temp/vue-editor-bridge';
<!-- 新建分类弹框 -->
<template>
  <div>
      <el-dialog
        title="分类名称"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-input v-model="input" placeholder="请输入分类名称"></el-input>
        <div class="name_val">{{val.name}}</div>
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
      },
    val:Object
  },
  data () {
    return {
      input:'',
      dialogVisible:false,
      // gid:'',
    };
  },
  watch:{
    isVisable(nVal,oVal){
      this.dialogVisible = nVal
    }
  },

  computed: {},


  methods: {
    // 创建分类
    createClassify(){
      let id = ''
      if(this.val){
        id = this.val.gId
      }else {
        id = ''
      }
      if(!this.input){
        this.$alert('请输入分类名称', {
          confirmButtonText: '确定',
        });
        return
      }
      let param = {
        gid:id,
        name:this.input
      }
      this.sendRequest('/Category/mgr',param,res=>{
        console.log(res)
        if(res.retcode==0){
          this.$notify({
              message: '操作成功',
              type: 'success',
              duration:1000,
          })
          this.isVisable = false
          this.input = ''
          this.$emit('upList')
          // this.getCategory()
        }else{
          this.$notify.error({
              message: res.returnText,
              duration:1000,
          })
        }
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
  .name_val {
    font-size: 14px;
    margin-top: 12px;
  }
</style>
