<template>
<!-- 'width':config.width, -->
    <div class="choice-list" :style="{'font-size':config.fsize}">
        <div v-for="(item,i) in list.children" :key="i" :title="item.name" :class="{'selected':item.prop=='selected'}" @click="onItemClick(item)">{{item.name}}</div>

    </div>
</template>

<script>


export default {
    props:{
        config:{
            type:Object,
            default:function () { return {} },
        },
        list:{
            type:Object,
            default:function(){return {}}
        }
    },
    components: {

    },

    data() {
        return {
            catalogList:{},
            fontsize:this.config.fontsize||'16px',
        };
    },

    computed: {

    },

    watch: {

    },

    methods: {
        onItemClick(val){
            val.prop = 'selected'
            this.$emit('choice',val)
        }
    },

    beforeCreate() {

    },
    created() {
    //   this.getCatalog()
    },
}
</script>
<style  scoped>
    .choice-list {
        /* width: 40px; */
        height: 100%;
        float: left;
        overflow: auto;
        border-right: 1px solid #EBEBEB ;
        padding: 0 10px;
        max-width: 220px;
    }
     .choice-list::-webkit-scrollbar {
        /*滚动条整体样式*/
        width : 2px;  /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
    .choice-list::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        box-shadow   : inset 0 0 5px rgba(135, 169, 255) ;
        background   : #535353;
        height: 60px;
    }
    .choice-list::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        background   : #ededed;
    }
    .choice-list div{
        margin-bottom: 6px;
        cursor: pointer;
        text-align: center;
        line-height: 30px;
        padding: 0 6px;
        overflow:hidden; 
        text-overflow:ellipsis; 
        white-space:nowrap;
    }
    .choice-list div:hover{
        background: #8EB3FF;
        color: #fff;
    }
    .selected {
        background: #8EB3FF;
        color: #fff;
    }
</style>
