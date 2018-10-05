<template>
<div>
  <el-card>
    <div slot="header" class="headerWrap clearfix">
				<div>
          <el-row>
            <el-col :offset=1 :span="5">
                <span>订单编号</span>
                <el-input placeholer="请输入订单编号"></el-input>
            </el-col>
            <el-col :offset=1 :span="5">
                  <span>发票代码</span>
                    <el-input placeholer="请输入发票代码"></el-input>
            </el-col>
            <el-col :offset=1 :span="5">
                <span>发票号码</span>
                    <el-input placeholer="请输入发票号码"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset=1 :span="5">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                  <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            </el-col>
            <el-col :offset=1 :span="5">
              <el-date-picker v-model="value1" type="date" placeholder="选择开票开始日期"></el-date-picker>
            </el-col>
            <el-col :offset=1 :span="5">
              <el-date-picker v-model="value1" type="date" placeholder="选择开票结束日期"></el-date-picker>
            </el-col>
          </el-row>
				</div>
		</div>
     <el-table :data="tableData3" style="width: 100%" height="250">
      <el-table-column fixed prop="date" label="订单编号" width="150"></el-table-column>
      <el-table-column prop="name" label="发票类型" width="120"></el-table-column>
      <el-table-column
      prop="province"
      label="销货方识别号（税号）"
      width="120"></el-table-column>
      <el-table-column
      prop="city"
      label="销货方公司名称"
      width="120"></el-table-column>
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
   <div class="block">
    <span class="demonstration">显示总数</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  </el-card>
   
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    const cityOptions = ["蓝票", "红票"];
    return {
      checkAll: false,
      checkedCities: ["蓝票"],
      cities: cityOptions,
      isIndeterminate: true,
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
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.headerWrap {
  .el-col {
    // height: 20px;
    background: cadetblue;
  }
  .el-row {
    margin-top: 10px;
  }
}
</style>
