/*--------------------------------------------------------------------------
//
//  Copyright 2020 Chiva Chen
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
/*--------------------------------------------------------------------------*/

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
              <NavigationButton content="主页" routeUrl="/home"/>
            </div>
          </el-col>
          <el-col :xs="6" :sm="3" :span="2">
            <div class="header-button">
              <NavigationButton content="探索" routeUrl="/explore"/>
            </div>
          </el-col>
          <el-col :xs="6" :sm="3" :span="2">
            <div class="header-button">
              <NavigationButton content="开源" routeUrl="/opensource"/>
            </div>
          </el-col>
          <el-col :xs="6" :sm="3" :span="2">
            <div class="header-button">
              <NavigationButton content="关于我" routeUrl="/about"/>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main id="blog-content">
        <router-view></router-view>
      </el-main>
      <el-footer>
        <div>
          <a href="https://github.com/HahaMango/NewBlogUi" target="_blank">
            <img :src="GithubImgPath"/>
          </a>
          <p>Power by <b><i>Vue</i></b> / <b><i>Element</i></b> ---- Service power by <b><i>.net Core</i></b></p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationButton from "../../components/NavigationButton.vue";
const Githubimg = require('../../img/github.svg');

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

#blog-content{
  padding: 0.5em;
}

@media screen and (min-width: 769px) {
  .header-title {
    text-align: left;
  }
  #blog-content{
  padding: 1.25em;
}
}
</style>