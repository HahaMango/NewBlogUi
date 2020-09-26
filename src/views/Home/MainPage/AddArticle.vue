<template>
    <div>
        <el-row>
            <el-col :span="12">
                <div style="padding:0em 0.5em 0em 0em;">
                <div class="add-article-md-input">
                    <textarea v-model="articleContent"></textarea>
                </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div style="padding:0em 0em 0em 0.5em;">
                    <div class="marked-div" id="add-article-md-preview">
                    </div>
                </div>
            </el-col>
        </el-row>
        <div style="margin-top:3em;">
            <input type="text" v-model="title"/>
            <input type="text" v-model="desc"/>
            <Mbutton text="发布" :enable="true" v-on:mbuttonClickEvent="buttonEvent"/>
        </div>
    </div>
</template>

<script>
let marked = require('marked');
import hljs from "highlight.js";
import 'highlight.js/styles/ocean.css';
import Mbutton from '../../../components/MButton.vue';
import {AddArticle} from '../../../api/article.js'
import { isEmptyString } from '../../../utils/utils';

export default {
    data:function(){
        return{
            articleContent:'',
            desc:'',
            title:''
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
    },
    watch:{
        articleContent:function(val){
            var d = window.document.getElementById('add-article-md-preview');
            d.innerHTML = marked(val);
        }
    },
    methods:{
        async buttonEvent(){
            if(isEmptyString(this.title) || isEmptyString(this.desc) || isEmptyString(this.articleContent)){
                window.alert("请填写标题，描述，文章内容");
                return;
            }
            var req = new Object();
            req.title = this.title;
            req.describe = this.desc;
            req.content = this.articleContent;

            var result = await AddArticle(req);
            window.alert(result.message);
        }
    },
    components:{
        Mbutton
    }
}
</script>

<style>
.add-article-md-input{
    height: 600px;
}

.add-article-md-input textarea{
    height: 100%;
    width: 100%;
}
</style>