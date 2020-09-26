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
import {QueryUserAbout} from '../../../api/usercenter.js'

export default {
    data:function(){
        return{
            desc:''
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
        this.QueryUserAbout();
    },
    watch:{
        desc:function(val){
            var d = window.document.getElementById('about-markdown-preview');
            d.innerHTML = marked(val);
        }
    },
    components:{
    },
    methods:{
        async QueryUserAbout(){
            var req = new Object();
            req.userId = "1305520603926761472";
            var result = await QueryUserAbout(req);

            if(result.code == 200){
                this.desc = result.data.desc;
            }
        }
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