<template>
    <div>
        <div class="article-comment">
            <el-row>
                <el-col :span="23">
                    <p>{{userName}}：{{content}}</p>
                </el-col>
                <el-col :span="1">
                    <p v-on:click="replyClick"><img :src="replypath"/></p>
                </el-col>
            </el-row>
        </div>
        <div>
            <ArticleReplyComment v-for="item in replyCommentList"
                :key="item.commentId"
                :commentId="item.commentId"
                :userName="item.userName"
                :userId="item.userId"
                :articleId="item.articleId"
                :content="item.content"
                :createTime="item.createTime"
                :replyCommentId="item.replyCommentId"
                :replyUserName="item.replyUserName"
                :replyUserId="item.replyUserId"
                v-on:subReplyClick="subReplyClick"
            />
        </div>
        <div>
            <LoadNextButton v-if="reply > 1" :width="200" :enable="hasNextReply" :text="hasNextReply ? '▼加载更多评论！':'没有更多了...' " v-on:loadNextClick="loadNextEvent"/>
        </div>
    </div>
</template>

<script>
const replysvgpath = require('../img/reply.svg');
import ArticleReplyComment from './ArticleReplyComment.vue';
import LoadNextButton from '../components/LoadNextButton.vue';

export default {
    data:function(){
        return {
            replypath:replysvgpath,
            hasNextReply:true,
            defaultPage:1,
            defaultSize:20,
            currentPage:1,
            currentSize:20
        }
    },
    mounted:function(){
        if(this.reply > 1){
            this.hasNextReply = true;
        }else{
            this.hasNextReply = false;
        }
    },
    props:['commentId','userName','userId','articleId','content','like','reply','createTime','replyCommentList'],
    methods:{
        replyClick:function(){
            this.$emit('replyClick',this.commentId,this.userName,this.userId,null);
        },
        subReplyClick:function(commentId,userName,userId){
            this.$emit('replyClick',commentId,userName,userId,this.replyCommentList);
        },
        loadNextEvent:function(){
            this.$emit('replyCommentLoadNext',this);
        }
    },
    components:{
        ArticleReplyComment,
        LoadNextButton
    }
}
</script>

<style>
.article-comment{
    text-align: left;
    border-bottom-style: solid;
    border-bottom-width: 0.05em;
    border-bottom-color: rgb(58, 58, 58);
    padding: 0.7em 0.1em 0.7em 0.1em;
}

.article-comment img{
    cursor: pointer;
}


</style>