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
    <div class="about-content">
        <div id="about-markdown-preview" class="marked-div">
        </div>
    </div>
</template>

<script>
//import { MarkdownPreview } from 'vue-meditor'
let marked = require('marked');
import hljs from "highlight.js";
import 'highlight.js/styles/ocean.css';

export default {
    data:function(){
        return{
            desc:'# Profile \n\n### **姓名：陈子华**\n\n#### **学历：大专 佛山职业技术学院**\n\n#### **专业：电气自动化**\n\nEmail：q932104843@outlook.com\n\nGithub：https://github.com/HahaMango\n\n微信公众号：ChivaStudio\n\n***\n\n该网站是本人业余时间从后端到前端重头自己搭建的，平时空闲会写写一些技术分享文章，希望大家喜欢。\n\n本人目前在广州工作，曾从事大型机械设备程序的开发（PLC），目前在广州从事软件开发工作。比较擅长`.Net`，`.Net Core`平台的开发。如有工作需要可以发邮件到上面我的邮箱`javsdfw`里面。\n\n'
        }
    },
    mounted:function(){
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function(code) {
                return hljs.highlightAuto(code).value;
            },
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        });
        var d = window.document.getElementById('about-markdown-preview')
        d.innerHTML = marked(this.desc);
    },
    components:{
    }
}
</script>

<style>
.about-content{
    padding: 0% 0% 0% 0%;
    text-align: left;
}

@media screen and (min-width: 769px) {
.about-content{
    padding: 0% 2% 0% 2%;
}
}
</style>