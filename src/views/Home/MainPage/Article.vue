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
            <CommentInput v-on:submitEvent="submitCommentEvent" v-on:clearInputEvent="clearInputEvent" :initText="commentContent" :initUserName="initUserName"/>
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
                v-on:replyCommentLoadNext="replyLoadNextEvent"
            />
        </div>
        <div>
            <LoadNextButton :width="200" :enable="commentHasNext" :text="commentHasNext ? '🔽加载更多！':'没有更多了😯...' "/>
        </div> 
    </div>
</template>

<script>
import {QueryArticleDetail} from '../../../api/article.js'
import {IncArticleViewCount} from '../../../api/article.js'
import {QueryCommentPage} from '../../../api/comment.js'
import {QuerySubCommentPage} from '../../../api/comment.js'
import {AddComment} from '../../../api/comment.js'
const authorsvgpath = require('../../../img/author.svg');
const likesvgpath = require('../../../img/like.svg');
const viewsvgpath = require('../../../img/view.svg');
const commentsvgpath = require('../../../img/comment.svg');
const timesvgpath = require('../../../img/time.svg');
let marked = require('marked');
import hljs from "highlight.js";
import 'highlight.js/styles/ocean.css';
import CommentInput from '../../../components/CommentInput.vue';
import ArticleComment from '../../../components/ArticleComment.vue';
import LoadNextButton from '../../../components/LoadNextButton.vue';
import Gl from '../../../components/GradientsLine.vue';
import { isEmptyString } from '../../../utils/utils.js';
import { ToBottomEventSetting } from '../../../utils/utils.js';
import { RemoveBottomEventSetting } from '../../../utils/utils.js';

let p = null;

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
            initUserName:'',
            //评论变量
            replyFlag:false,
            replyCommentId:null,
            tempReplyCommentList:null,
            commentHasNext:true,
            commentDefalutPage:1,
            commentDefalutSize:20,
            currentCommentPage:1,
            currentCommentSize:20
        }
    },
    created:function(){
        this.getArticleDetail();
        this.getCommentList(this.commentDefalutPage,this.commentDefalutSize);
    },
    mounted:function(){
        p = this;
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
        ToBottomEventSetting(function(){
            if(p.commentHasNext){
                p.getCommentList(++p.currentCommentPage,p.commentDefalutSize);
            }
        });

        this.incArticleVie();
    },
    destroyed:function(){
        RemoveBottomEventSetting();
    },
    watch :{
        content:function(val){
            var d = window.document.getElementById('content')
            d.innerHTML = marked(val);
        }
    },
    methods:{
        //加载文章详情
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
        //加载评论列表
        async getCommentList(page,size){
            var req = new Object();
            var id = this.$route.params.id;
            req.articleId = id;
            req.pageParm = new Object();
            req.pageParm.page = page;
            req.pageParm.size = size;

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
            this.currentCommentPage = rsp.page;
            this.currentCommentSize = rsp.size;
            if(this.commentList.length >= rsp.count){
                this.commentHasNext = false;
            }
        },
        //点击回复评论按钮事件
        commentReplyEvent:function(commentId,userName,userId,currentCommentList){
            if(this.replyFlag == true){
                this.commentContent = '';
            }
            this.commentContent = '@' + userName + ' ';
            this.replyFlag = true;
            this.replyCommentId = commentId;
            this.tempReplyCommentList = currentCommentList;
            console.log(userId);
            console.log(commentId);
        },
        //添加评论
        async submitCommentEvent(content,userName){
            if(isEmptyString(content) || isEmptyString(userName)){
                window.alert("请填写评论内容和用户名");
                return;
            }
            if(!this.replyFlag){
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
            }
            else{
                var replyReq = new Object();
                replyReq.articleId = this.id;
                replyReq.userName = userName;
                replyReq.content = content;
                replyReq.replyCommentId = this.replyCommentId;
                var replyResult = await AddComment(replyReq);
                var replyRsp = replyResult.data;
                if(replyResult.code != 200){
                    return;
                }
                if(this.tempReplyCommentList == null){
                    //回复主评论
                    for(var i = 0; i < this.commentList.length;i++){
                        var c = this.commentList[i];
                        if(c.commentId == this.replyCommentId){
                            var replyComment = new Object();
                            replyComment.commentId = replyRsp.id;
                            replyComment.userName = replyRsp.userName;
                            replyComment.userId = replyRsp.userId;
                            replyComment.articleId = replyRsp.articleId;
                            replyComment.content = replyRsp.content;
                            replyComment.like = replyRsp.like;
                            replyComment.reply = replyRsp.reply;
                            replyComment.createTime = replyRsp.createTime;
                            replyComment.replyCommentId = replyRsp.subReplyCommentId;
                            replyComment.replyUserName = replyRsp.subReplyUserName;
                            replyComment.replyUserId = replyRsp.subReplyCommentId;
                            c.replyCommentList.unshift(replyComment);
                            break;
                        }
                    }
                }else{
                    //回复子评论
                    var replySubComment = new Object();
                    replySubComment.commentId = replyRsp.id;
                    replySubComment.userName = replyRsp.userName;
                    replySubComment.userId = replyRsp.userId;
                    replySubComment.articleId = replyRsp.articleId;
                    replySubComment.content = replyRsp.content;
                    replySubComment.like = replyRsp.like;
                    replySubComment.reply = replyRsp.reply;
                    replySubComment.createTime = replyRsp.createTime;
                    replySubComment.replyCommentId = replyRsp.subReplyCommentId;
                    replySubComment.replyUserName = replyRsp.subReplyUserName;
                    replySubComment.replyUserId = replyRsp.subReplyCommentId;
                    this.tempReplyCommentList.unshift(replySubComment);
                }
            }
            this.comment++;
        },
        //清空评论输入框事件
        clearInputEvent:function(){
            this.replyFlag = false;
            this.replyCommentId = null;
            this.tempReplyCommentList = null;
        },
        //加载子评论
        async replyLoadNextEvent(articleReplyComment){
            var req = new Object();
            req.commentId = articleReplyComment.commentId;
            req.pageParm = new Object();
            req.pageParm.page = ++articleReplyComment.currentPage;
            req.pageParm.size = articleReplyComment.defaultSize;

            var result = await QuerySubCommentPage(req);
            var rsp = result.data;
            
            for(var i = 0;i<rsp.data.length;i++){
                var resultReplyComment = rsp.data[i];
                var replyComment = new Object();
                replyComment.commentId = resultReplyComment.id;
                replyComment.userName = resultReplyComment.userName;
                replyComment.userId = resultReplyComment.userId;
                replyComment.articleId = resultReplyComment.articleId;
                replyComment.content = resultReplyComment.content;
                replyComment.createTime = resultReplyComment.createTime;
                replyComment.replyCommentId = resultReplyComment.subReplyCommentId;
                replyComment.replyUserName = resultReplyComment.subReplyUserName;
                replyComment.replyUserId = resultReplyComment.subReplyUserId;

                articleReplyComment.replyCommentList.push(replyComment);
            }

            articleReplyComment.currentPage = rsp.page;
            articleReplyComment.currentSize = rsp.size;
            if(articleReplyComment.replyCommentList.length >= rsp.count){
                articleReplyComment.hasNextReply = false;
            }
        },
        //文章阅读数
        async incArticleVie(){
            var req = new Object();
            var id = this.$route.params.id;
            req.articleId = id;

            var result = await IncArticleViewCount(req);
            if(result.code == 200){
                this.view++;
            }
        }
    },
    components:{
        CommentInput,
        ArticleComment,
        Gl,
        LoadNextButton
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