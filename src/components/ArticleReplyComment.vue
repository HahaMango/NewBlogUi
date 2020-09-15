<template>
    <div class="article-reply-comment">
        <el-row>
            <el-col :span="23">
                <p>{{userName}}：{{content}}</p>
            </el-col>
            <el-col :span="1">
                <p><img :src="likepath"/></p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
const likesvgpath = require('../img/like.svg');

export default {
    data:function(){
        return {
            likepath:likesvgpath
        }
    },
    props:['commentId','userName','userId','articleId','content','like','reply','createTime','replyCommentId','replyUserName','replyUserId']
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
</style>