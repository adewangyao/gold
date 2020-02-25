<!--  -->
<template>
    <div class='rich-box'>
        <UE :defaultMsg="defaultMsg" :config="config" ref="hzue"></UE>
    </div>
</template>

<script>

import UE from '../../../Common/Ueditor'
export default {

components: {
    UE,
},

data() {
  return {
        defaultMsg:'',  //富文本内容 是html内容
        config: {       //富文本长宽度
            initialFrameWidth: 918,
            initialFrameHeight: 410
        },
  };
},

computed: {

},

watch: {

},

methods: {
    // setUEContent(data) {
    //     let that = this
    //     that.editor.ready(function () {
    //         that.editor.setContent(data); // 确保UE加载完成后，放入内容。
    //     });
    // },
    // getUEContent() {
    //     let content = this.editor.getContent()
    //     let contentTxt = this.editor.getContentTxt()
    //     let data = {
    //         html: content,
    //         html_original: content,
    //         content: contentTxt
    //     }
    //     return data
    //     // this.$emit('SetJsonRichText',data)
    // },
    init(){     //要做mounted中初始化
        this.$refs.hzue.getUEContent() //获取富文本的内容
        this.$refs.hzue.setUEContent('<a>sas</a>') //设置富文本内容
    }
},

beforeCreate() { 

},
mounted(){
    this.init()
},
created() {

    // this.init()
},
}
</script>
<style  scoped>
    .rich-box {
        margin-top: 14px;
    }
</style>