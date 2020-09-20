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
        <div id="content" class="marked-div"></div>
        <div style="margin-top:5em;">
            <CommentInput v-on:submitEvent="submitCommentEvent" :initText="commentContent" :initUserName="initUserName"/>
        </div>
        <div style="width:95%;margin:0px auto 0px auto;">
            <ArticleComment v-for="item in commentList"
                :key="item.commentId"
                :commentId="item.commentId"
                :userName="item.userName"
                :userId="item.userId"
                :articleId="item.articleId"
                :content="item.content"
                :createTime="item.createTime"
                :replyCommentList="item.replyCommentList"
                v-on:replyClick="commentReplyEvent"
            />
        </div>
    </div>
</template>

<script>
import {QueryArticleDetail} from '../../../api/article.js'
import {QueryCommentPage} from '../../../api/comment.js'
import {AddComment} from '../../../api/comment.js'
const authorsvgpath = require('../../../img/author.svg');
const likesvgpath = require('../../../img/like.svg');
const viewsvgpath = require('../../../img/view.svg');
const commentsvgpath = require('../../../img/comment.svg');
const timesvgpath = require('../../../img/time.svg');
let marked = require('marked');
import CommentInput from '../../../components/CommentInput.vue';
import ArticleComment from '../../../components/ArticleComment.vue';
import Gl from '../../../components/GradientsLine.vue';
import { isEmptyString } from '../../../utils/utils.js';
let i =0;
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
            ],
            commentContent:'',
            initUserName:''
        }
    },
    created:function(){
        this.getArticleDetail();
        this.getCommentList();
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
            var id = this.$route.params.id;
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
        },
        async getCommentList(){
            var req = new Object();
            var id = this.$route.params.id;
            req.articleId = id;
            req.pageParm = new Object();
            req.pageParm.page = 1;
            req.pageParm.size = 20;

            var result = await QueryCommentPage(req);
            var rsp = result.data;
            for(var i = 0;i<rsp.data.length;i++){
                var rspComment = rsp.data[i];
                var comment = new Object();
                comment.commentId = rspComment.id;
                comment.userName = rspComment.userName;
                comment.userId = rspComment.userId;
                comment.articleId = rspComment.articleId;
                comment.content = rspComment.content;
                comment.createTime = rspComment.createTime;
                comment.replyCommentList = new Array();
                var rspSubComment = rspComment.FirstReplyComment;
                if(rspSubComment != null && typeof obj != "undefined")
                {
                    var subComment = new Object();
                    subComment.commentId = rspSubComment.id;
                    subComment.userName = rspSubComment.userName;
                    subComment.userId = rspSubComment.userId;
                    subComment.articleId = rspSubComment.articleId;
                    subComment.content = rspSubComment.content;
                    subComment.createTime = rspSubComment.createTime;
                    subComment.replyCommentId = rspSubComment.subReplyCommentId;
                    subComment.replyUserName = rspSubComment.subReplyUserName;
                    subComment.replyUserId = rspSubComment.subReplyUserId;
                    comment.replyCommentList.push(subComment);
                }
                this.commentList.push(comment);
            }
        },
        commentReplyEvent:function(commentId,userName,userId){
            console.log(commentId);
            console.log(userName);
            console.log(userId);
        },
        async submitCommentEvent(content,userName){
            //添加评论
            if(isEmptyString(content) || isEmptyString(userName)){
                window.alert("请填写评论内容和用户名");
                return;
            }
            var req = new Object();
            req.articleId = this.id;
            req.userName = userName;
            req.content = content;
            var result = await AddComment(req);
            if(result.code != 200){
                return;
            }
            var addComment = new Object();
            addComment.commentId = result.data.id;
            addComment.userName = result.data.userName;
            addComment.userId = result.data.userId;
            addComment.articleId = result.data.articleId;
            addComment.content = result.data.content;
            addComment.createTime = result.data.createTime;
            addComment.replyCommentList = new Array();
            if(i%2==0){
                this.commentContent = undefined;
                this.initUserName = undefined;
            }else{
                this.commentContent = '';
                this.initUserName = '';
            }
            i++;
            this.commentList.unshift(addComment);
            this.comment++;
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