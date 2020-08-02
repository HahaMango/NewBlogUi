<template>
  <div>
    <el-container class="blog-container">
      <el-header class="blog-header">
        <el-row>
          <el-col :xs="24" :sm="12" :span="16">
            <div class="header-title">Chiva Studio</div>
          </el-col>
          <el-col :xs="6" :sm="3" :span="2">
            <div class="header-button">
              <NavigationButton content="首页" />
            </div>
          </el-col>
          <el-col :xs="6" :sm="3" :span="2">
            <div class="header-button">
              <NavigationButton content="文章" />
            </div>
          </el-col>
          <el-col :xs="6" :sm="3" :span="2">
            <div class="header-button">
              <NavigationButton content="关于我" />
            </div>
          </el-col>
          <el-col :xs="6" :sm="3" :span="2">
            <div class="header-button">
              <NavigationButton content="测试" />
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main></el-main>
      <el-footer>
        <div>
          <a href="https://github.com/HahaMango/NewBlogUi" target="_blank">
            <img :src="GithubImgPath"/>
          </a>
          <p>power by | <b><i>Vue</i></b> | <b><i>Element</i></b> | <b><i>.net Core</i></b></p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationButton from "../components/NavigationButton.vue";
const Githubimg = require('../img/github.svg');

export default {
  name: "Home",
  data:function(){
    return{
      GithubImgPath:Githubimg
    }
  },
  components: {
    NavigationButton,
  },
};
</script>

<style>
.header-title {
  font-size: 2em;
  margin-left: 3%;
}

.blog-container {
  max-width: 1000px;
  margin: 0em auto 0em auto;
}

@media screen and (min-width: 769px) {
  .header-title {
    text-align: left;
  }
}
</style>