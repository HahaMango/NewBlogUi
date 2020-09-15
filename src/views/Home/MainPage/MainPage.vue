/*--------------------------------------------------------------------------
//
//  Copyright 2020 Chiva Chen
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
/*--------------------------------------------------------------------------*/

<template>
    <div>
        <ArticleListItem v-for="item in articleList"
            :key="item.articleid"
            :title="item.title" 
            :desc="item.desc" 
            :createtime="item.createtime"
            :like="item.like" 
            :view="item.view" 
            :comment="item.comment"
            :articleid="item.articleid"
            v-on:ArticleItemClick="ItemClickEvent"
        />
    </div>
</template>

<script>
import ArticleListItem from '../../../components/ArticleListItem.vue'
import {QueryArticlePage} from '../../../api/article.js'

export default {
    data:function(){
        return{
            articleList:[]
        }
    },
    created:function(){
        this.getArticlePage();
    },
    methods:{
        ItemClickEvent:function(articleid){
            this.$router.push("articledetail/"+articleid);
        },
        async getArticlePage(){
            //调用后台接口获取文章列表
            var pageParm = new Object();
            pageParm.Page = 1;
            pageParm.Size = 20;
            var req = new Object();
            req.PageParm = pageParm;
            req.UserId = "1305520603926761472";
            var result = await QueryArticlePage(req);
            var list = result.data;

            for(let i = 0;i<list.count;i++){
                let element = list.data[i];
                var article = new Object();
                article.articleid = element.id;
                article.title = element.title;
                article.desc = element.describe;
                article.createtime = element.createTime;
                article.like = element.like;
                article.view = element.view;
                article.comment = element.comment;

                this.articleList.push(article);
            }
        }
    },
    components:{
        ArticleListItem
    }
}
</script>