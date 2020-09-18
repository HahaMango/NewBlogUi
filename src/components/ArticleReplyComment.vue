<template>
    <div class="article-reply-comment">
        <el-row>
            <el-col :span="23">
                <p>{{userName}}：<span v-if="isReply" class="sub-reply-comment">@{{replyUserName}} </span>{{content}}</p>
            </el-col>
            <el-col :span="1">
                <p v-on:click="replyClick"><img :src="replypath"/></p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { isEmptyString } from '../utils/utils';
const replysvgpath = require('../img/reply.svg');

export default {
    data:function(){
        return {
            replypath:replysvgpath
        }
    },
    props:['commentId','userName','userId','articleId','content','like','reply','createTime','replyCommentId','replyUserName','replyUserId'],
    methods:{
        replyClick:function(){
            this.$emit('subReplyClick',this.commentId,this.userName,this.userId);
        }
    },
    computed:{
        isReply:function(){
            return !isEmptyString(this.replyCommentId);
        }
    }
}
</script>

<style>
.article-reply-comment{
    text-align: left;
    border-bottom-style: solid;
    border-bottom-width: 0.05em;
    border-bottom-color: rgb(58, 58, 58);
    padding: 0em 0.1em 0em 2em;
}

.article-reply-comment img{
    cursor: pointer;
}

.sub-reply-comment{
    color: gray;
}
</style>