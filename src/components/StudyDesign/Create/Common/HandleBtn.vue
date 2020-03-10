<!-- 点击更多操作按钮 -->
<template>
    <div class='handle-box'>
        <el-dropdown trigger="click"  size="small" @visible-change='changeBtn'  @command="handleCommand">
        <span v-if="btnVal" @click.stop="" class="more-btn">更 多</span>
        <span v-else class="down" @click.stop=""><img src="/static/image/arrow_4.png" alt=""></span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command=1>导出</el-dropdown-item>
            <el-dropdown-item command=2>复制</el-dropdown-item>
            <el-dropdown-item command=3>分享</el-dropdown-item>
            <el-dropdown-item command=4>共享</el-dropdown-item>
            <el-dropdown-item command=5>移动到</el-dropdown-item>
            <el-dropdown-item command=6>删除</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>

    <!-- 共享弹框 -->
      <el-dialog title="" :visible.sync="sharedVisible" append-to-body width="30%">
          <div class="share_dialog_name">是否将{{item.name}}提交共享审核</div>
          <div class="share_dialog_btn">
            <span @click="sharedVisible=false">取消</span>
            <span @click="sharedDesign">确认</span>
          </div>
      </el-dialog>
    </div>
</template>

<script>


export default {

components: {

},
props:{
  item:Object
},
data() {
  return {
    btnVal:1,
    sharedVisible:false,
  };
},

computed: {

},

watch: {

},

methods: {
    changeBtn(){
      this.btnVal = !this.btnVal
    },
    handleCommand(val){
      switch(val){
        case '1':   //导出
          break;
        case '2':   //复制
          break;
        case '3':   //分享
          break;
        case '4':   //共享
          this.sharedVisible = true
          break;
        case '5':
          break;
        case '6':
          break;
      }
      console.log(this.item)
    },
    // 共享的学习设计
    sharedDesign(){
      this.sendRequest(`/Desgin/shared/${this.item.gid}`,'',res =>{
        console.log(res)
        if(res.retcode==0&&res.result[0]){
            this.$notify({
              message: '共享成功',
              type: 'success',
              duration:1000,
            });
            this.sharedVisible = true
        }else {
            this.$notify.error({
              message: '共享失败',
              duration:1000,
            });
        }
      })
    },

},

beforeCreate() {

},
created() {

},
}
</script>
<style  scoped>
    .handle-box {
        display: inline-block;
        margin-left: 16px;
    }
    /deep/ .el-dropdown-menu__item{
        padding: 0 12px;
        color: #85898C ;
    }
    /deep/.el-popper[x-placement^=bottom]{
        margin-top: 6px;
    }
    >>> .popper__arrow{
        display: none;
    }

    .handle-box span{
        outline:none;
        color: #5A7CC4;
        font-size: 12px;
        float: left;
        display: block;
        /* margin-left: 16px; */
        cursor: pointer;
        text-align: center;
        line-height: 24px;
        width: 62px;
        height: 24px;
        border: 1px solid #CCD7EE ;
    }
    .more-btn{
       animation: 0.5s opacity2 0s;
    }
    .down {
        background: #6B92F4 ;
        animation: 0.5s opacity 0s;

    }
    .share_dialog_name {
      font-size: 16px;
    }
    .share_dialog_btn {
      display: flex;
      margin-top: 26px;
      justify-content: space-around;
    }
    .share_dialog_btn span{
      display: inline-block;
      width: 120px;
      cursor: pointer;
      height: 32px;
      line-height: 32px;
      text-align: center;
      color: #6B92F4 ;
    }
    .share_dialog_btn span:first-child {
      border:1px solid   #6B92F4;
    }
    .share_dialog_btn span:last-child {
      color: #fff;
      background: #6B92F4;
    }
     @keyframes opacity2{
         0%{opacity:0}
         50%{opacity:.8;}
         100%{opacity:10;}
     }
     @-webkit-keyframes opacity2{
         0%{opacity:0}
         50%{opacity:.8;}
         100%{opacity:10;}
     }
     @-moz-keyframes opacity2{
         0%{opacity:0}
         50%{opacity:.8;}
         100%{opacity:10;}
     }
     @keyframes opacity{
         0%{opacity:0}
         50%{opacity:.8;}
         100%{opacity:10;}
     }
     @-webkit-keyframes opacity{
         0%{opacity:0}
         50%{opacity:.8;}
         100%{opacity:10;}
     }
     @-moz-keyframes opacity{
         0%{opacity:0}
         50%{opacity:.8;}
         100%{opacity:10;}
     }
</style>
