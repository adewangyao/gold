<!-- 设计使用点击对象的弹框 -->
<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="82%"
      :before-close="handleClose">
      <div >
        <span class="top-name">名称</span>
        <span class="top-title">设计的内容是</span>
      </div>
      <div class="inn-table">
        <span class="top-name">范围</span>
        <el-table
          :data="tableData"
          :header-cell-style="{background:'#F3F4F7',color:'#484848','font-size': '18px'}"
          border
          center
          style="width: 100%">
          <el-table-column
            prop="name"
            label="班级名称"
            >
          </el-table-column>
          <el-table-column
            prop="date"
            label="开始时间"
            >
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <span  class="handle-btn" @click="releaseDialog=true">取消</span>
              <span  class="handle-btn" @click="timeDialog=true">修改时间</span>
              <span  class="handle-btn">更新学生</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-dialog>
    <!-- 对话框 -->
    <el-dialog
      :visible.sync="releaseDialog"
      width="30%"
      modal=false
      append-to-body
      >
      <span class="release-msg">您将取消2018级03班的发布，确认取消么</span>
      <div class="release-footer">
        <span class="release-cancel" @click="releaseDialog = false">取消</span>
        <span class="release-sure" @click="onReleaseSure">确认</span>
      </div>
    </el-dialog>
    <!-- 修改时间弹框 -->
    <el-dialog
      :visible.sync="timeDialog"
      width="30%"
      modal=false
      append-to-body
      >
      <span class="release-msg2">您将2018级03班开始时间</span>
      <div class="time-select">
        <el-date-picker
          v-model="time"
          size="small"
          type="datetime"
          placeholder="">
        </el-date-picker>
      </div>
      <div class="release-footer">
        <span class="release-cancel" @click="timeDialog=false">取消</span>
        <span class="release-sure" @click="onTimeSure">确认</span>
      </div>
    </el-dialog>


  </div>
</template>

<script>
export default {
  props:[
  'isVisble',
  ],
  components: {},
  data () {
    return {
      dialogVisible:false, //大弹框
      releaseDialog:false, //发布弹框
      timeDialog:false, //时间弹框
      time:'',    //选择时间
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    };
  },
  watch:{
    isVisble(nVal,oVal){
      this.dialogVisible = nVal
    }
  },

  computed: {},

  // mounted: {},

  methods: {
    // 大弹框关闭
    handleClose(){
      this.$emit('closeDialog')
    },
    // release弹框关闭

    onReleaseSure(){
       this.releaseDialog = false
    },
    // 时间修改
    onTimeSure(){
      this.releaseDialog = false
    },
  }
}

</script>
<style scoped>
  .top-name {
    font-size: 18px;
    color: #4F4F4F;

    margin-right: 12px;
  }
  .top-title {
    font-size: 14px;
    color: #A9A9A9!important;
  }
  .inn-table {
    display: flex;
    margin-top: 20px;
    min-height: 240px;
  }
  .inn-table /deep/ .cell{
    text-align: center;
  }
  .handle-btn {
    cursor: pointer;
    color: #5A7CC4 ;
  }

  .release-msg {
    font-family: SourceHanSansCN-Regular;
    font-size: 16px;
    padding-left: 30px;
    color: #484848;
  }
  .release-msg2 {
    /* width: 240px; */
    display: block;
    text-align: center;
    margin: 0 auto 20px;
    font-size: 18px;
    color: #484848;
  }
  .release-footer {
    width: 300px;
    margin: 40px auto 20px;
    display: flex;
    justify-content: space-around;
  }
  .release-footer span {
    display: inline-block;
    width: 120px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    cursor: pointer;

  }
  .release-cancel{
    color: #6B92F4 ;
    border: 1px solid #6B92F4 ;
  }
  .release-sure {
    color: #fff;
    background: #6B92F4;
  }
  .time-select /deep/ .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 220px;
    margin: 0 auto;
    display: block;

  }
</style>
