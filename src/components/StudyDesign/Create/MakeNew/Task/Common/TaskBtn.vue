<!--  -->
<template>
    <div class='task-btn'>
        <span class="task-btn-del" @click="onBtnclick('add')"></span>
        <span class="task-btn-up" @click="onBtnclick('up')"></span>
        <span class="task-btn-down" @click="onBtnclick('down')"></span>
    </div>
</template>

<script>


export default {

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
    onBtnclick(val){
        this.$emit(handleBtn,val)
    }
},

beforeCreate() {

},
created() {

},
}
</script>
<style  scoped>
    .task-btn {
        float: right;
        margin-right: 28px;
        line-height: 40px;
        /* display: inline-block; */

    }
    .task-btn span{
        display: inline-block;
        width: 19px;
        height: 19px;
        vertical-align: middle;
        cursor: pointer;
        margin-left: 16px;
    }
    .task-btn-del {
         background-image: url('/static/image/btn_move.png');
        background-position: 0px 0px;
        transition: background-image 2s ease-in
    }
    .task-btn-del:hover {
         background-image: url('/static/image/btn_move.png');
        background-position: 0px 19px;
        transition:  background-image 0.2s ease-in
    }
    .task-btn-up {
         background-image: url('/static/image/btn_move.png');
        background-position: 38px 0px;
        transition:  background-image 0.2s ease-in
    }
    .task-btn-up:hover {
         background-image: url('/static/image/btn_move.png');
        background-position: 38px 19px;
        transition:  background-image 0.2s ease-in
    }
    .task-btn-down {
         background-image: url('/static/image/btn_move.png');
        background-position: 76px 0px;
        transition:  background-image 0.2s ease-in
    }
    .task-btn-down:hover {
         background-image: url('/static/image/btn_move.png');
        background-position: 76px 19px;
        transition:  background-image 0.2s ease-in
    }

</style>
