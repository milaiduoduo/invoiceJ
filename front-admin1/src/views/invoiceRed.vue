<template>
<div>
        <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="发票代码">
            <el-input></el-input>
        </el-form-item>
                <el-form-item label="发票号码">
            <el-input></el-input>
        </el-form-item>
                
                <el-form-item label="订单编号">
            <el-input></el-input>
        </el-form-item>
                <el-form-item label="开票时间">
            <el-input></el-input>
        </el-form-item>
                <el-form-item label="原蓝票发票代码">
            <el-input></el-input>
        </el-form-item>
                <el-form-item label="原蓝票发票号码">
            <el-input></el-input>
        </el-form-item>
        <el-form-item label="PDF上传">
            <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传pdf文件，且大小不能超过500kb</div>
</el-upload>
        </el-form-item>
        <el-form-item>
    <el-button type="primary" @click="onSubmit">立即上传红票</el-button>
    <el-button>取消</el-button>
  </el-form-item>
    </el-form>
</div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
