<template>
    <div class="choice-list" :style="{'width':config.width,'font-size':config.fsize}">
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>sd</div>
        <div>2323   </div>
    </div>
</template>

<script>


export default {
    props:{
        config:{
            type:String,
            default:'',
        }
    },
    components: {

    },

    data() {
    return {

    };
    },

    computed: {

    },

    watch: {

    },

    methods: {

    },

    beforeCreate() { 

    },
    created() {

    },
}
</script>
<style  scoped>
    .choice-list {
        width: 40px;
        height: 100%;
        overflow: auto;
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
        cursor: pointer;
        text-align: center;
        line-height: 30px;
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