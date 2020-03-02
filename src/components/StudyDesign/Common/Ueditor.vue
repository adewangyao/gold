<template>
    <div>
        <script :id="randomId" type="text/plain"></script>
    </div>
</template>

<script>
export default {
    props: ['defaultMsg','config','isEditStep'],
    data() {
        return {
            editor: null,
            randomId: 'editor_' + (Math.random() * 100000000000000000)
        }
    },
    mounted() {
        let that = this
        that.editor = UE.getEditor(that.randomId, that.config); // 初始化UE
    },
    methods: {
        setUEContent(data) {
            let that = this
            that.editor.ready(function () {
                that.editor.setContent(data); // 确保UE加载完成后，放入内容。
            });
        },
        getUEContent() {
            let content = this.editor.getContent()
            let contentTxt = this.editor.getContentTxt()
            let data = {
                html: content,
                html_original: content,
                content: contentTxt
            }
            return data
            this.$emit('SetJsonRichText',data)
        }
    },
    created(){

        /* 解决ueditor中UE报错 */
        var $ueditor = $('<script>',{'src':'/static/ueditor/ueditor.config.js','type':'text/javascript'})
        var $Vue = $('<script>',{'src':'/static/js/vue.min.js','type':'text/javascript'})   //暂时解决富文本报错vue undefined问题
        var $ueditorall = $('<script>',{'src':'/static/ueditor/ueditor.all.js','type':'text/javascript'})
        var $addKityFormulaDialog = $('<script>',{'src':'/static/ueditor/kityformula-plugin/addKityFormulaDialog.js','type':'text/javascript'})
        var $defaultFilterFix = $('<script>',{'src':'/static/ueditor/kityformula-plugin/defaultFilterFix.js','type':'text/javascript'})
        var $getKfContent = $('<script>',{'src':'/static/ueditor/kityformula-plugin/getKfContent.js','type':'text/javascript'})
        this.appendScriptToBody('vue', $Vue)
        this.appendScriptToBody('ueditor', $ueditor)
        this.appendScriptToBody('ueditorall', $ueditorall)
        this.appendScriptToBody('addKityFormulaDialog', $addKityFormulaDialog)
        this.appendScriptToBody('defaultFilterFix', $defaultFilterFix)
        this.appendScriptToBody('getKfContent', $getKfContent)
        if(this.$route.query.pid){
            this.planId = this.$route.query.pid
            this.getStudyPlanDetail(true).then(()=>{
                let steporder = this.$route.query.steporder
                let steptype = this.$route.query.steptype
                if(this.isValid(steporder) && this.isValid(steptype)){
                    this.onEditStep({
                        type: steptype,
                        order: steporder
                    })
                }
            })
        }
    }
    // destroyed() {
    //     console.log('destroyed')
    //     this.editor.destroy();
    // }
}
</script>

<style scoped>

</style>
