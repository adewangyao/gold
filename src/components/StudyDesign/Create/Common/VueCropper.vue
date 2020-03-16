<!-- vue图片剪切 -->
<template>
  <div>
    <el-dialog title="图片剪裁" :visible.sync="dialogVisible"
      @close='closeDialog'
    append-to-body>
      <el-upload class="upload-demo" action=""
        :auto-upload="false" :show-file-list="false" :on-change='changeUpload'>
        <!-- <i class="el-icon-upload"></i>
        <div class="el-upload__text">点击上传</div>
        <div class="el-upload__tip">支持绝大多数图片格式，单张图片最大支持5MB</div> -->
        <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
      <div class="cropper-content">
        <div class="cropper" style="text-align:center">
        <vueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :info="true"
            :full="option.full"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :original="option.original"
            :autoCrop="option.autoCrop"
            :fixed="option.fixed"
            :fixedNumber="option.fixedNumber"
            :centerBox="option.centerBox"
            :infoTrue="option.infoTrue"
            :fixedBox="option.fixedBox"

          ></vueCropper>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="finish" :loading="loading">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props:['isVisble'],
  data() {
    return {
      dialogVisible: false,
      // 裁剪组件的基础配置option
      option: {
        img: '', // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
        outputSize: 0.8, // 裁剪生成图片的质量
        outputType: 'jpeg', // 裁剪生成图片的格式
        canScale: false, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        // autoCropWidth: 300, // 默认生成截图框宽度
        // autoCropHeight: 200, // 默认生成截图框高度
        fixedBox: false, // 固定截图框大小 不允许改变
        fixed: false, // 是否开启截图框宽高固定比例
        fixedNumber: [7, 5], // 截图框的宽高比例
        full: true, // 是否输出原图比例的截图
        canMoveBox: true, // 截图框能否拖动
        original: false, // 上传图片按照原始比例渲染
        centerBox: false, // 截图框是否被限制在图片里面
        infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      },
      picsList: [],  //页面显示的数组
      // 防止重复提交
      loading: false
    }
  },
  watch:{
    isVisble:function(nVal,oVal){
      this.dialogVisible = nVal
    }
  },
  methods: {
    // 转换地址
    getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var dataURL = canvas.toDataURL("image/png");  // 可选其他值 image/jpeg
        return dataURL;
    },
    // 上传按钮   限制图片大小
    changeUpload(file, fileList) {
      const isLt5M = file.size / 1024 / 1024 < 5
      if (!isLt5M) {
        this.$message.error('上传文件大小不能超过 5MB!')
        return false
      }
      this.fileinfo = file

      // 上传成功后将图片地址赋值给裁剪框显示图片
      this.$nextTick(() => {
        this.readURL(file).then((result) => {
          // this.option.img = file.url
          this.option.img = result
        })
        // this.dialogVisible = true
      })
    },
    // 点击裁剪，这一步是可以拿到处理后的地址
    finish() {
      this.$refs.cropper.getCropBlob((data) => {
        console.log(data)
        var fileName = 'goods' + this.fileinfo.uid
        this.loading = true
       //上传阿里云服务器

      })
    },
    // 关闭弹框和
    closeDialog(){
      this.$emit('closeDialog')
    },

    // 关于图片转换
    readURL(file) {
        return new Promise(function(resolve, reject) {
            let that = this
            let reader = new FileReader()
            reader.file = file.raw
            reader.readAsDataURL(file.raw)
            reader.onload = function() {
                resolve(this.result)
            }
        })
    },
  }
}

</script>
<style scoped>

  .cropper {
      width: auto;
      height: 300px;
  }

</style>
