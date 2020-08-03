<template>
    <div class="article-item" v-on:click="ClickEvent">
        <h2>{{title}}</h2>
        <el-row class="article-item-date">
            <el-col :span="12">
                {{createtime}}
            </el-col>
            <el-col :span="1">
                <img :src="likepath"/>
            </el-col>
            <el-col :span="3" class="article-item-count">
                {{like}}
            </el-col>
            <el-col :span="1">
                <img :src="viewpath"/>
            </el-col>
            <el-col :span="3" class="article-item-count">
                {{view}}
            </el-col>
            <el-col :span="1">
                <img :src="commentpath"/>
            </el-col>
            <el-col :span="3" class="article-item-count">
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
    border-bottom-style: solid;
    border-width: 0.05em;
    border-image:radial-gradient( #ffffff,#47474700) 1 10;
    padding: 0.5em;
    cursor: pointer;
    margin: 0.5em;
}

.article-item img{
    height: 6em;
    width: 6em;
}

.article-item-count{
    text-align: left;
}

.article-item-desc{
    margin-top: 2em;
}

.article-item-date{
    font-size: 0.1em;
    width: 40%;
    margin: 0em auto 0em auto;
}

.article-item:hover h2{
    text-decoration: underline;
}
</style>