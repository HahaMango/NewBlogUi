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
        <div>
            <div class="load-next">
                <div class="load-next-click-area">
                    <Mbutton class="load-next-click-button" :text="hasNext ? '👇加载更多':'没有内容了😯'" :enable="hasNext" v-on:mbuttonClickEvent="loadNextEvent"/>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import ArticleListItem from '../../../components/ArticleListItem.vue'
import {QueryArticlePage} from '../../../api/article.js'
import Mbutton from '../../../components/MButton.vue'

export default {
    data:function(){
        return{
            articleList:[],
            defaultPage:1,
            defalutSize:20,
            currentPage : 1,
            currentSize : 20,
            //分页是否存在下一页
            hasNext:true
        }
    },
    created:function(){
        this.getArticlePage(this.defaultPage,this.defalutSize);
    },
    methods:{
        ItemClickEvent:function(articleid){
            this.$router.push("articledetail/"+articleid);
        },
        async getArticlePage(page,size){
            //调用后台接口获取文章列表
            var pageParm = new Object();
            pageParm.Page = page;
            pageParm.Size = size;
            var req = new Object();
            req.PageParm = pageParm;
            req.UserId = "1305520603926761472";
            var result = await QueryArticlePage(req);
            var list = result.data;

            for(let i = 0;i<list.data.length;i++){
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
            this.currentPage = list.page;
            this.currentSize = list.size;
            if(this.articleList.length >= list.count){
                this.hasNext = false;
            }
        },
        loadNextEvent:function(){
            this.getArticlePage(++this.currentPage, this.defalutSize);
        }
    },
    components:{
        ArticleListItem,
        Mbutton
    }
}
</script>

<style>

.load-next div{
    cursor: pointer;
    width: 20em;
    margin: 0em auto 0em auto;
}

.load-next-click-area{
    padding: 0.2em 0em 0.2em 0em;
}

.load-next-click-button{
    width: 100%;
}
</style>