<!--  -->
<template>
    <div class='search'>
          <el-input
            @input='handleChange'
            placeholder=""
            clearable
            v-model="value">
            <span slot="suffix" class="search-btn" v-if="!value">
                <img  src="/static/image/btn_search.png">
            </span>
        </el-input>
    </div>
</template>

<script>


export default {

name: "search",
components: {

},

data() {
  return {
    value:""
  };
},

computed: {

},

watch: {

},

methods: {
    handleChange(val){
        this.$emit('searchBtn',val)

    }
},

beforeCreate() {

},
created() {

},
}
</script>
<style  scoped>
    .search >>> .el-input{
        width:796px;
        height: 32px;
    }
    .search >>> input{
        width:796px;
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
