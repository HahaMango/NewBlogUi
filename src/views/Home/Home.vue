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
    <el-scrollbar id="mscrollbar" :wrapStyle="[{'overflow-x':'hidden'}]">
      <el-container class="blog-container">
        <el-header class="blog-header" style="height:auto;">
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
                <NavigationButton content="关于" routeUrl="/about"/>
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
    </el-scrollbar>
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
  mounted:function(){
    var d = window.document.getElementById("mscrollbar");
    var height = document.body.clientHeight;
    d.style.height = height + 'px';
  }
};
</script>

<style>
.header-title {
  font-size: 2em;
  margin-left: 3%;
}

.blog-container {
  max-width: 1000px;
  margin: 1.5em auto 1.5em auto;
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

/*
 * markdown 全局样式
*/
.marked-div{
  text-align: left;
}

.marked-div a{
  text-decoration: none;
  color: #848484;
}

.marked-div hr{
  border-color: #777777;
}

.marked-div p code{
  background-color: #444444;
  border-radius: 0.2em;
  padding: 0.2em 0.2em 0.2em 0.2em;
  margin-left: 0.2em;
  margin-right: 0.2em;
}

.marked-div pre{
  background-color: #444444;
  border-radius: 0.2em;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 1em;
  padding-right: 1em;
  overflow: auto;
}

.marked-div pre code {
  font-family: Consolas;
  font-size: 1em;
}

.marked-div img{
  max-width: 90%;
}

.marked-div blockquote{
  padding: 0em 0.5em 0em 0.5em;
  border-left-style: solid;
  border-left-color: #777777;
}

.marked-div table{
  border-spacing: 0;
  border-top: 0.1em solid #777777;
  border-left: 0.1em solid #777777;
}

.marked-div table td{
  padding: 0.3em 0.5em 0.3em 0.5em;
  border-bottom: 0.1em solid #777777;
  border-right: 0.1em solid #777777;
}

.marked-div table th{
  padding: 0.3em 0.5em 0.3em 0.5em;
  border-bottom: 0.1em solid #777777;
  border-right: 0.1em solid #777777;
}

body{
  height: 100%;
}
</style>