<!-- 新建目录组件 -->
<template>
  <div>
        <el-dialog
            :visible.sync="dialogVisible"
            custom-class="new-dialog"
            width="1220px"
            @closed="close"
            >
            <!-- <template v-for="(item,i) in catalogList"> -->
                <new-choice @choice="choice" :config='config1' :list='catalogList[0]'></new-choice>
                <new-choice @choice="choiceSub" :config='config1' :list='catalogList[1]'></new-choice>
                <new-choice @choice="choiceVer" :list='catalogList[2]'></new-choice>
                <new-choice @choice="choiceGrad" :list='catalogList[3]'></new-choice>
                <new-choice @choice="choiceBook" :list='catalogList[4]'></new-choice>
                <new-choice @choice="choiceUnit" :list='catalogList[5]'></new-choice>
                <new-choice v-if="lastCataloglist.children.length" @choice="choiceLast" :list='lastCataloglist'></new-choice>
                <!-- <new-choice @click="choice" :list='catalogList[6]'></new-choice> -->
            <!-- </template> -->
            <span slot="footer" class="dialog-footer">
                <div class="footer-catlog">
                    <template v-for="(item,i) in choiceName">
                        <span :key="i" class="catalog-span">/{{item}}</span>
                    </template>
                    <span class="catalog-x" @click="onClearChoice">x</span>
                </div>
                <span class="catalog-btn" @click="onCatalogCancel">取消</span>
                <span class="catalog-btn" @click="createDesign">确认</span>
            </span>
        </el-dialog>
  </div>
</template>

<script>
import NewChoice from '../CreateList/NewChoice'
export default {
  props:{
    isVisible:{
      type:Boolean,
      default:false,
    }
  },
  data () {
    return {
      dialogVisible:this.isVisible,
      catalogList:{}, //获取到的列表
      lastCataloglist:{children:[]},//最后单元内部列表
      lastVal:{}, ///最后单元内部选中信息
      newParam:{
          periodId: 0,
          subjectId: 0,
          editionId: 0,
          termId: 0,
          bookId: 0,
          uIdx: 0
      },
      choiceName:[],
      config1:{
          width:'60px',
          fsize:'18px'
      }
    };
  },

  components: {
    NewChoice,
  },
  computed: {},
  watch:{
    isVisible(newVal,oldVal){
      this.dialogVisible = newVal
    }
  },


  methods: {
      //
        close(){
          this.$emit('closeDialog')
        },
      // 清除所选
        onClearChoice(){
            this.choiceName = []
            this.newParam={
                periodId: 0,
                subjectId: 0,
                editionId: 0,
                termId: 0,
                bookId: 0,
                uIdx: 0
            }
            this.getCatalog()
        },
        onCatalogCancel(){
            this.dialogVisible = false
        },
      // 选择科目
        choiceSub(val){

            this.newParam.subjectId = val.idx
            this.getCatalog()
        },
      //学段
        choice(val){
            this.newParam.periodId = val.idx
            this.getCatalog()
        },
      // 版本
        choiceVer(val){
            this.newParam.editionId = val.idx
            this.getCatalog()
        },
      // 年级
        choiceGrad(val){
            this.newParam.termId = val.idx
            this.getCatalog()
        },
        choiceBook(val){
            this.newParam.bookId = val.idx
            this.getCatalog()
        },
      // 单元
        choiceUnit(val){
            this.newParam.uIdx = val.idx
            this.getCatalog()
        },
        choiceLast(val){
            this.lastVal.prop = ''
            this.lastVal = val
            if(this.choiceName.length==6){
                this.choiceName.push(val.name)
            }else if (this.choiceName.length==7){
                this.choiceName.length = 6
                this.choiceName.push(val.name)
            }

        },
      // 创建
        createDesign(){
            let idinfo = this.newParam
            let catid = `/${idinfo.periodId}/${idinfo.subjectId}/${idinfo.editionId}/${idinfo.termId}/${idinfo.bookId}/${idinfo.uIdx}`
            let catName = ''
            this.choiceName.forEach((item,i)=>{
                if(i<6){
                    catName = catName+'/'+item
                }
            })
            let param  = {
                name:this.choiceName[this.choiceName.length-1],
                catalog:catid,
                catalogName:catName,
                coverUrl:'',
            }
            this.sendRequest('/Desgin/create',param,(res)=>{
              if(res.retcode==0){
                this.dialogVisible=false
                this.$notify({
                  // title: '创建成功',
                  message: '创建成功',
                  type: 'success',
                  duration:1000,
                });
                // t通知已经创建成功
                // this.$emit('creatSuccess')
                this.$store.commit('changeCreate','createSuccess')
              }else{
                  this.$notify.error({
                    // title: '创建失败',
                    message: '创建成功',
                    duration:1000,
                  });
              }
            })

        },
      // 获取目录
        getCatalog(){
            // this.startLoading()
            this.sendRequest('/Asset/catalog',this.newParam,(res)=>{
                // res = res.result
                if(res.retcode==0){
                    this.choiceName = []
                    this.lastCataloglist.children = []
                    this.catalogList=res.result[0]
                    this.catalogList.forEach((item,i)=>{
                        item.children.forEach((citem,ci)=>{
                            if(citem.prop=='selected'){
                                switch (i){
                                    case 0:
                                        this.newParam.periodId = citem.idx
                                        this.choiceName.push(citem.name)
                                        break
                                    case 1:
                                        this.newParam.subjectId = citem.idx
                                        this.choiceName.push(citem.name)
                                        break
                                    case 2:
                                        this.newParam.editionId = citem.idx
                                        this.choiceName.push(citem.name)
                                        break
                                    case 3:
                                        this.newParam.termId = citem.idx
                                        this.choiceName.push(citem.name)
                                        break
                                    case 4:
                                        this.newParam.bookId = citem.idx
                                        this.choiceName.push(citem.name)
                                        break
                                    case 5:
                                        this.newParam.uIdx = citem.idx
                                        this.choiceName.push(citem.name)
                                        this.lastCataloglist = citem
                                        break

                                }
                            }
                        })
                    })
                }
            })
        },},
        created(){
          this.getCatalog()
        }
    }

</script>
<style scoped>
    .footer-catlog {
        vertical-align: bottom;
        display: inline-block;
        margin-top: .5%;
        height: 32px;
        padding-left: 10px;
        line-height: 32px;
        width: 846px;
        position: relative;
        background: #fff;
        color: #4F4F4F;
    }
        .catalog-span {
        font-size: 14px;
        color: #4F4F4F;
        letter-spacing: 0;
        display: inline-block;
        max-width: 210px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .catalog-x {
        position: absolute;
        color: #fff;
        text-align: center;
        width: 18px;
        height: 18px;
        line-height: 16px;
        cursor: pointer;
        right: 10px;
        top: 20%;
        display: inline-block;
        border-radius: 50%;
        background: rgba(221,221,221,.5);
    }
    .catalog-x:hover {
        background: #8EB3FF;

    }
    .catalog-btn {
        display: inline-block;
        height: 32px;
        width: 120px;
        background: #6B92F4;
        color: #fff;
        line-height: 32px;
        text-align: center;
        margin-left: 30px;
        cursor: pointer;
    }
    .catalog-btn:hover {
        background: #81A5FF ;
        transition: background .3s ease-in;
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
    /deep/ .el-dialog {
         margin-top: 8vh!important;
         height: 84% ;
         position: relative;

    }
    /deep/ .el-dialog__body {
         height: 80%;
         padding-bottom: 10px;
         padding-top: 10px;

    }
    /deep/ .el-dialog__footer {
         height: 12%;
         background: #F7F7F7;
         position: relative;
         text-align: left;
         /* padding-bottom: 0; */

    }
</style>
