<!-- 新建任务界面 -->
<template>
    <div >
        <!-- 顶部 -->
        <div class="top-box">
            <!-- 顶部左 -->
            <div class="top-left">
                <span  @mouseenter="changeActiveBack($event)" @mouseleave="removeActiveBack($event)" @click="onBackClick">
                    <span  class="back-img" ></span>
                </span>
                <span @mouseenter.stop="changeActiveChange($event)" @mouseleave.stop="removeActiveChange($event)" @click="onCatalogClick">
                    <span class="change-img"></span>
                </span>

                <span @mouseenter.stop="changeActiveImg($event)" @mouseleave.stop="removeActiveImg($event)" @click="isVisble=!isVisble">
                    <span class="img-img"></span>
                </span>
            </div>
            <!-- 名字框 -->
            <div class="top-center">
                          <el-input
                            @input='handleChange'
                            placeholder=""
                            clearable
                            v-model="value">
                        </el-input>
            </div>
            <!-- 顶部右侧 -->
            <div class="top-right">
                <span  @mouseenter="changeActivePre($event)" @mouseleave="removeActivePre($event)">
                    <span  class="pre-img" ></span>
                </span>
                <span @mouseenter.stop="changeActiveExport($event)" @mouseleave.stop="removeActiveExport($event)">
                    <span class="export-img"></span>
                </span>

                <span @mouseenter.stop="changeActiveRel($event)" @mouseleave.stop="removeActiveRel($event)">
                    <span class="release-img"></span>
                </span>
            </div>
        </div>
        <!-- 目录弹框 -->
        <new-catalog :isVisible='dialogVisible' @closeDialog='closeDialog'></new-catalog>
        <!-- 图片裁剪弹框 -->
        <vue-cropper :isVisble='isVisble' @closeDialog='isVisble=false'></vue-cropper>
    </div>
</template>

<script>

import NewCatalog from '../Common/NewCatalog'
import VueCropper from '../Common/VueCropper'
export default {

    components: {
      NewCatalog,
      VueCropper,
    },

    data() {
        return {
            value:"",
            isVisble:false,
            dialogVisible:false,
        };
    },

    computed: {

    },

    watch: {

    },

    methods: {
      // 关闭弹框
        closeDialog(){
          this.dialogVisible = false
        },
      //点击目录
        onCatalogClick(){
          this.dialogVisible = true
        },
      // 搜索
        handleChange(val){
            this.$emit('searchBtn',val)

        },
      // 返回按钮
        onBackClick(){
          this.$router.go(-1)
        },
      // 按钮状态处理
        changeActiveBack(e){
            e.currentTarget.className="mouseOner"
            e.target.children[0].className='back-img-over'
        },
        removeActiveBack(e){
            e.currentTarget.className=""
            e.target.children[0].className='back-img'
        },

        changeActiveChange(e){
            e.currentTarget.className="mouseOner"
            e.target.children[0].className='change-img-over'
        },
        removeActiveChange(e){
            e.currentTarget.className=""
            e.target.children[0].className='change-img'
        },

        changeActiveImg(e){
            e.currentTarget.className="mouseOner"
            e.target.children[0].className='img-img-over'
        },
        removeActiveImg(e){
            e.currentTarget.className=""
            e.target.children[0].className='img-img'
        },
        // youce
        changeActivePre(e){
            e.currentTarget.className="mouseOner"
            e.target.children[0].className='pre-img-over'
        },
        removeActivePre(e){
            e.currentTarget.className=""
            e.target.children[0].className='pre-img'
        },

        changeActiveExport(e){
            e.currentTarget.className="mouseOner"
            e.target.children[0].className='export-img-over'
        },
        removeActiveExport(e){
            e.currentTarget.className=""
            e.target.children[0].className='export-img'
        },

        changeActiveRel(e){
            e.currentTarget.className="mouseOner"
            e.target.children[0].className='release-img-over'
        },
        removeActiveRel(e){
            e.currentTarget.className=""
            e.target.children[0].className='release-img'
        },
    },

    beforeCreate() {

    },
    created() {

},
}
</script>
<style  scoped>
    img{border:0}
    .top-box{
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
    }
    .top-left {
        width: 186px;
        display: flex;
        justify-content: space-between;
    }
    .top-left>span{
        cursor: pointer;
        display: inline-block;
        width: 50px;
        height: 32px;
        overflow: hidden;
        background: #fff;
        padding-left: 8px;
        box-sizing: border-box;
        transition: background .2s ease-in;
    }
    .mouseOner {
        background: #81A5FF!important;
        transition: background .2s ease-in;
    }
    .back-img {
        display: inline-block;
        width: 30px;
        height: 32px;
        background:  url('/static/image/btn_create.png') no-repeat ;


    }
    .back-img-over {
        display: inline-block;
        width: 30px;
        height: 32px;
        background:  url('/static/image/btn_create.png') no-repeat ;
        background-position: 0px -34px;
    }
    .change-img {
        display: inline-block;
        width: 30px;
        height: 32px;
        background:  url('/static/image/btn_create.png') no-repeat ;
        background-position: -36px 0px;
    }
    .change-img-over {
        display: inline-block;
        width: 30px;
        height: 32px;
        background:  url('/static/image/btn_create.png') no-repeat ;
        background-position: -36px -34px;
    }
    .img-img {
        display: inline-block;
        width: 30px;
        height: 32px;
        background:  url('/static/image/btn_create.png') no-repeat ;
        background-position: -68px 0px;
    }
    .img-img-over {
        display: inline-block;
        width: 30px;
        height: 32px;
        background:  url('/static/image/btn_create.png') no-repeat ;
        background-position: -68px -34px;
    }
    /* 右侧 */
    .top-right>span{
        cursor: pointer;
        display: inline-block;
        width: 50px;
        height: 32px;
        overflow: hidden;
        background: #fff;
        padding-left: 8px;
        box-sizing: border-box;
        transition: background .2s ease-in;
    }
    .top-right {
        width: 186px;
        display: flex;
        justify-content: space-between;
    }
    .pre-img {
        display: inline-block;
        width: 30px;
        height: 32px;
        background:  url('/static/image/btn_create.png') no-repeat ;
        background-position: -102px 0px;
    }
    .pre-img-over {
        display: inline-block;
        width: 30px;
        height: 32px;
        background:  url('/static/image/btn_create.png') no-repeat ;
        background-position: -102px -34px;
    }
    .export-img {
        display: inline-block;
        width: 30px;
        height: 32px;
        background:  url('/static/image/btn_create.png') no-repeat ;
        background-position: -138px 0px;
    }
    .export-img-over {
        display: inline-block;
        width: 30px;
        height: 32px;
        background:  url('/static/image/btn_create.png') no-repeat ;
        background-position: -138px -34px;
    }
    .release-img {
        display: inline-block;
        width: 30px;
        height: 32px;
        background:  url('/static/image/btn_create.png') no-repeat ;
        background-position: -172px 0px;
    }
    .release-img-over {
        display: inline-block;
        width: 30px;
        height: 32px;
        background:  url('/static/image/btn_create.png') no-repeat ;
        background-position: -172px -34px;
    }

    .top-center >>> .el-input{
        width:828px;
        height: 32px;
    }
    .top-center >>> input{
        width:828px;
        height: 32px;
        border: none;
    }
    .search-btn {
        display: block;
        width: 17px;
        height: 17px;
        overflow: hidden;
        padding: 5px 6px 0 0;
    }
</style>
