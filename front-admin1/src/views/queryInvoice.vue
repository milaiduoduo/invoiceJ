<template>
<div>
    <el-table
    :data="tableData3"
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="date"
      label="订单编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="发票类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="销货方识别号（税号）"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="销货方公司名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="发票代码"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="发票号码"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="发票抬头"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="开票金额"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="开票时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="查看pdf"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="开票时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="发票备注"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="开票时间"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="销货方地址"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="销货方电话"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="销货方开户行"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="销货方银行账号"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="开票人"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="收款人"
      width="120">
    </el-table-column>
     <el-table-column
      prop="zip"
      label="原蓝票代码"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="原蓝票号码"
      width="120">
    </el-table-column>
  </el-table>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
