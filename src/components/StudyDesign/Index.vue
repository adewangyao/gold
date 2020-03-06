<!--  -->
<template>
    <div class='main-box'>
        <el-container>
          <el-aside width="156px" class="side">
             <el-menu
              :default-active="menuVal"
              class="el-menu-vertical"
              @select="onHandleSelect">

              <el-menu-item index="/createlist">
                <span class="icon">
                  <img class="icon11" v-if="menuVal=='/createlist'" src="/static/image/icon_leftnav.png">
                  <img class="icon1" v-else src="/static/image/icon_leftnav.png">
                </span>
                <span slot="title">设计创建</span>
              </el-menu-item>
              <el-menu-item index="/classifylist" >
                <span class="icon">
                  <img class="icon22" v-if="menuVal=='/classifylist'" src="/static/image/icon_leftnav.png">
                  <img class="icon2"  v-else src="/static/image/icon_leftnav.png">
                </span>
                <span slot="title">设计分类</span>
              </el-menu-item>
              <el-menu-item index="/sharelist">
                <span class="icon">
                  <img class="icon33" v-if="menuVal=='/sharelist'" src="/static/image/icon_leftnav.png">
                  <img class="icon3"  v-else src="/static/image/icon_leftnav.png">
                </span>
                <span slot="title">设计分享</span>
              </el-menu-item>
              <el-menu-item index="/uselist">
                  <span class="icon">
                  <img class="icon44" v-if="menuVal=='/uselist'" src="/static/image/icon_leftnav.png">
                  <img class="icon4"  v-else src="/static/image/icon_leftnav.png">
                </span>
                <span slot="title">设计使用</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view :itemList='itemList' @pageChange='pageChange'></router-view>
          </el-main>
        </el-container>
    </div>
</template>

<script>


export default {
  name:"StudyDesign",
  components: {

  },

  data() {
    return {
      menuVal:'/createlist',
      itemList:[],
      pageIndex:1,  //翻页
      pageSize:10,
    };
  },

  computed: {
    createType(){
      return   this.$store.state.createDesign
    }
  },

  watch: {
    createType(nVal,oVak){
      alert(222)
      if(nVal=='createSuccess'){
        this.getDesignList()
        this.$store.commit('changeCreate','')
      }
    }
  },

  methods: {
    // 滚动加载
    pageChange(){
      // this.pageIndex++
      this.pageSize += 10
      // this.getDesignList()
    },
    // 切换菜单
    onHandleSelect(val){
      this.pageIndex = 1
      this.menuVal = val
      this.$router.push(val)
      this.getDesignList()
    },
    getDesignList(){
      let sortVal = ''
      // return
      console.log(this.menuVal)
      switch (this.menuVal){
        case '\/createlist':
          sortVal = 1
          break
        case '\/classifylist':
          sortVal = 2
          break
        case '\/sharelist':
          sortVal = 4
          break
        case '\/uselist':
          sortVal = 8
          break
      }
      let param = {
        keyword: '',
        status: 0,
        sort: sortVal,  // 1= 创建 2 = 分类 4 = 分享 8 = 使用 
        pageIndex: this.pageIndex,
        pageSize:this.pageSize,
      }
      this.sendRequest('/Query/design',param,res=>{
        console.log(res)
        this.itemList = res.result[0].items
        console.log(this.itemList)
      })
    }
  },

beforeCreate() {

},
created() {
  this.menuVal = this.$route.path
  this.getDesignList()
},
}
</script>
<style  scoped>
  .main-box {
    width: 1280px;
    margin: 0 auto;
    height: 100%;
  }

  .icon {
    width: 22px;
    height: 22px;
    display: inline-block;
    overflow: hidden;
    position: relative;
  }
  .icon img {
    position: absolute;
    top: -5px;
  }
  .aside {
    background: #ccc;
    padding-top:10px;
    height: 100%;
  }
  .box {
    height: 94%;
  }
  .icon1 {
    left: -5px;
  }
  .icon2 {
    left: -38px;
  }
  .icon3 {
    left: -68px;
  }
  .icon4 {
    left: -102px;
  }
  .icon11 {
    top: -37px!important;
    left: -5px;
  }
  .icon22 {
    top: -37px!important;
    left: -38px;
  }
  .icon33 {
    top: -37px!important;
    left: -68px;
  }
  .icon44 {
    top: -37px!important;
    left: -102px;
  }
  .main-box >>> .el-container{
    height: 100%;
  }
  .el-menu-vertical {
    height: 100%;
    padding-top: 20px;
    box-sizing: border-box;
  }
  .main-box >>> .el-main {
    padding: 12px;
  }
  /* 菜单样式代码 */
  .main-box >>> .is-active {
    background: #6B92F4;
    color: #ffffff
  }
  .main-box >>> .el-menu-item {
    height: 50px;
    line-height: 50px;
  }
</style>
