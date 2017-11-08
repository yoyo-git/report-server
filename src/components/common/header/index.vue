<template>
  <div class="header">
    <el-menu mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <span style="display:inline-block;font-size: 20px;float: left;line-height: 60px;width: 250px;">东吴证券通用报表平台</span>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="#" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {}
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "style";
</style>
