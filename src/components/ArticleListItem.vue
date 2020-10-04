<template>
    <div class="article-item" v-on:click="ClickEvent">
        <h2>{{title}}</h2>
        <el-row class="article-item-date">
            <el-col :xs="24" :sm="12">
                {{createtime}}
            </el-col>
            <!--小屏幕设备占位用-->
            <el-col :xs="5" :sm="0"><div style="height:1px"></div></el-col>
            <el-col :xs="1" :sm="1">
                <img :src="likepath"/>
            </el-col>
            <el-col :xs="5" :sm="3" class="article-item-count">
                {{like}}
            </el-col>
            <el-col :xs="1" :sm="1">
                <img :src="viewpath"/>
            </el-col>
            <el-col :xs="5" :sm="3" class="article-item-count">
                {{view}}
            </el-col>
            <el-col :xs="1" :sm="1">
                <img :src="commentpath"/>
            </el-col>
            <el-col :xs="5" :sm="3" class="article-item-count">
                {{comment}}
            </el-col>
        </el-row>
        <p class="article-item-desc">{{desc}}</p>
    </div>
</template>

<script>
const likesvgpath = require('../img/like.svg');
const viewsvgpath = require('../img/view.svg');
const commentsvgpath = require('../img/comment.svg');

export default {
    data:function(){
        return{
            likepath : likesvgpath,
            viewpath : viewsvgpath,
            commentpath:commentsvgpath
        }
    },
    props:["title","desc","createtime","like","view","comment","articleid"],
    methods:{
        ClickEvent:function(){
            this.$emit('ArticleItemClick',this.articleid);
        }
    }
}
</script>

<style>
.article-item{
    border-bottom: 0.01em transparent solid;
    border-image:radial-gradient( #ffffff 0%,#2b2b2b 68%) 0% 0% 100% 0%;
    padding: 0.5em;
    cursor: pointer;
    margin: 0.5em;
}

.article-item img{
    height: 0.8em;
    width: 0.8em;
}

.article-item-count{
    text-align: left;
}

.article-item-desc{
    margin-top: 2em;
}

.article-item-date{
    font-size: 0.8em;
    width: 90%;
    margin: 0em auto 0em auto;
}

.article-item:hover h2{
    text-decoration: underline;
}

@media screen and (min-width: 769px) {
.article-item-date{
    font-size: 0.7em;
    width: 40%;
    margin: 0em auto 0em auto;
}
}
</style>