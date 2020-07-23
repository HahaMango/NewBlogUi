<template>
<el-container>
  <el-header class="blog-header">
    <el-row class="header-row">
      <el-col :span="14" class="header-col"><div class="header-title">Chiva Studio</div></el-col>
      <el-col :span="2" class="header-col"><div class="header-button"><NavigationButton content="首页"/></div></el-col>
      <el-col :span="2" class="header-col"><div class="header-button"><NavigationButton content="文章"/></div></el-col>
      <el-col :span="2" class="header-col"><div class="header-button"><NavigationButton content="关于我"/></div></el-col>
      <el-col :span="2" class="header-col"><div class="header-button"><NavigationButton content="测试"/></div></el-col>
      <el-col :span="2" class="header-col"></el-col>
    </el-row>
  </el-header>
  <el-main>Main</el-main>
  <el-footer>Footer</el-footer>
</el-container>
</template>

<script>
// @ is an alias to /src
import NavigationButton from '../components/NavigationButton.vue';

export default {
  name: 'Home',
  components:{
    NavigationButton
  }
}
</script>

<style>
.header-title{
  font-size: 2em;
}
</style>