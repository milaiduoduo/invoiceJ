<template>
<div>
    <el-card>
        <div slot="header" class="headerWrap clearfix">
				<div>
					<el-button type="primary" size="medium" @click="onSubmit">立即上传蓝票</el-button>
                    <el-button type="default" size="small">取消</el-button>
				</div>
		</div>
   
    <el-form class="formWrap" size="small" ref="form" :model="form" label-width="120px">
       
        <el-row>
            <el-col :offset="1" :span="10">
                <el-form-item label="发票代码">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :offset="1" :span="10">
                <el-form-item label="发票号码">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
                
        </el-row>
        <el-row> 
            <el-col :offset="1" :span="10">
                <el-form-item label="发票抬头">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :offset="1" :span="10">
                <el-form-item label="订单编号">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :offset="1" :span="10">
                <el-form-item label="开票金额">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :offset="1" :span="10">
                <el-form-item label="开票时间">
                    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
                </el-form-item>
            </el-col>
        </el-row>   
        <el-row>
            <el-col :offset="1" :span="10"> 
                <el-form-item label="销货方税号">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :offset="1" :span="10">
                <el-form-item label="销货方公司名称">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :offset="1" :span="10">
                <el-form-item label="销货方公司地址">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :offset="1" :span="10">
                <el-form-item label="销货方电话">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :offset="1" :span="10">
                <el-form-item label="销货方开户行">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :offset="1" :span="10">
                <el-form-item label="销货方银行账户">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :offset="1" :span="10">
                <el-form-item label="开票人">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :offset="1" :span="10">
                <el-form-item label="收款人">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :offset="1" :span="21">
                <el-form-item label="发票备注">
                    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
                </el-form-item>
            </el-col>
            
        </el-row>
         <el-row class="uploadWrap">
            <el-col :offset="1">
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
            </el-col>
        </el-row>
    </el-form>

</el-card>
</div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.headerWrap {
  padding-left: 30px;
}
</style>
