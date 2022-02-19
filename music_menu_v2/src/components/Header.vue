<template>
  <div class="header">
    <el-row>
      <el-col :span="12">
        <div class="page_title"><a class="iconfont icon-music"></a>
          My Music
        </div>
      </el-col>
      <el-col :span="12">
        <div class="right_part">
          <el-button size="small">登录</el-button>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.header {
  height: 50px;
  line-height: 50px;
}
.page_title {
  color: black;
  font-weight: bold;
}
.page_title a {
  border-radius: 50%;
  border: black 1px solid;
  font-size: 20px;
  margin-left: 5px;
}
.right_part {
  float: right;
}
</style>