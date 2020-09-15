<template>
    <div>
        <div class="article-comment">
            <el-row>
                <el-col :span="23">
                    <p>{{userName}}：{{content}}</p>
                </el-col>
                <el-col :span="1">
                    <p><img :src="likepath"/></p>
                </el-col>
            </el-row>
        </div>
        <div>
            <ArticleReplyComment v-for="item in replyCommentList"
                :key="item.commentId"
                :userName="item.userName"
                :content="item.content"
                :createTime="item.createTime"
            />
        </div>
    </div>
</template>

<script>
const likesvgpath = require('../img/like.svg');
import ArticleReplyComment from './ArticleReplyComment.vue';

export default {
    data:function(){
        return {
            likepath:likesvgpath
        }
    },
    props:['commentId','userName','userId','articleId','content','like','reply','createTime','replyCommentList'],
    components:{
        ArticleReplyComment
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