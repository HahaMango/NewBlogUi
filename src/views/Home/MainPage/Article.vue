<template>
    <div class="article-content">
        <h1>{{title}}</h1>
        <div class="article-tag">
        <el-row>
            <!--作者-->
            <el-col :span="1">
                <img :src="authorpath"/>
            </el-col>
            <el-col :span="3" class="article-content-left">
                <span>{{userName}}</span>
            </el-col>
            <!--创建时间-->
            <el-col :span="1">
                <img :src="timepath"/>
            </el-col>
            <el-col :span="3" class="article-content-left">
                {{createTime}}
            </el-col>
            <!--占位用-->
            <el-col :span="10">
                <div style="height:1px;"></div>
            </el-col>
            <!--点赞数-->
            <el-col :span="1">
                <img :src="likepath"/>
            </el-col>
            <el-col :span="1" class="article-content-left">
                <span>{{like}}</span>
            </el-col>
            <!--阅读数-->
            <el-col :span="1">
                <img :src="viewpath"/>
            </el-col>
            <el-col :span="1" class="article-content-left">
                <span>{{view}}</span>
            </el-col>
            <!--评论数-->
            <el-col :span="1">
                <img :src="commentpath"/>
            </el-col>
            <el-col :span="1" class="article-content-left">
                <span>{{comment}}</span>
            </el-col>
        </el-row>
        </div>
        <Gl/>
        <div id="content"></div>
        <div style="margin-top:5em;">
            <CommentInput/>
        </div>
        <div style="width:95%;margin:0px auto 0px auto;">
            <ArticleComment v-for="item in commentList"
                :key="item.commentId"
                :content="item.content"
                :userName="item.userName"
                :createTime="item.createTime"
                :replyCommentList="item.replyCommentList"
            />
        </div>
    </div>
</template>

<script>
import {QueryArticleDetail} from '../../../api/article.js'
const authorsvgpath = require('../../../img/author.svg');
const likesvgpath = require('../../../img/like.svg');
const viewsvgpath = require('../../../img/view.svg');
const commentsvgpath = require('../../../img/comment.svg');
const timesvgpath = require('../../../img/time.svg');
let marked = require('marked');
import CommentInput from '../../../components/CommentInput.vue';
import ArticleComment from '../../../components/ArticleComment.vue';
import Gl from '../../../components/GradientsLine.vue';

export default {
    data:function(){
        return {
            id:null,
            title:null,
            userId:null,
            userName:null,
            content:null,
            contentType:0,
            categoryId:0,
            view:0,
            comment:0,
            like:0,
            createTime:null,
            mdContent:null,
            authorpath:authorsvgpath,
            likepath:likesvgpath,
            viewpath:viewsvgpath,
            commentpath:commentsvgpath,
            timepath:timesvgpath,
            commentList:[
            ]
        }
    },
    created:function(){
        this.getArticleDetail();
        var comm = new Object();
        comm.commentId = "1234";
        comm.userName = "Chiva_chen";
        comm.content = "评论测试内容1";
        comm.createTime = "2020-09-15 22:17:00"
        comm.replyCommentList = new Array();
        var replyComm = new Object();
        replyComm.commentId = "43456";
        replyComm.userName = "测试账号2";
        replyComm.content = "评论测试回复1";
        replyComm.createTime = "2020-09-15 20:10:00";
        comm.replyCommentList.push(replyComm);
        var comm1 = new Object();
        comm1.commentId = "34234";
        comm1.userName = "测试账号1";
        comm1.content = "测试内容2";
        this.commentList.push(comm1);
        this.commentList.push(comm);
    },
    watch :{
        content:function(val){
            var d = window.document.getElementById('content')
            d.innerHTML = marked(val);
        }
    },
    methods:{
        async getArticleDetail(){
            var req = new Object();
            var id = this.$route.params.id
            req.articleId = id;

            var result = await QueryArticleDetail(req);
            var rsp = result.data;
            this.id = rsp.id;
            this.title = rsp.title;
            this.userId = rsp.userId;
            this.userName = rsp.userName;
            this.content = rsp.content;
            this.contentType = rsp.contentType;
            this.categoryId = rsp.categoryId;
            this.view = rsp.view;
            this.comment = rsp.comment;
            this.like = rsp.like;
            this.createTime = rsp.createTime;
            this.createTime = this.createTime.split(' ')[0];
        }
    },
    components:{
        CommentInput,
        ArticleComment,
        Gl
    }
}
</script>

<style>
#content{
    margin-top: 1.5em;
    text-align: left;
}

.article-content-left{
    text-align: left;
}

.article-content{
    padding: 0% 0% 0% 0%;
}

.article-tag{
    font-size: 0.8em;
}

.article-tag img{
    height: 1em;
    width: 1em;
}

@media screen and (min-width: 769px) {
.article-content{
    padding: 0% 2% 0% 2%;
}
}
</style>