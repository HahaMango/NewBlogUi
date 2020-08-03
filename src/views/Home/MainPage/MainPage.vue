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
        <ArticleListItem v-for="item in ArticleList"
            :key="item.articleid"
            :title="item.title" 
            :desc="item.desc" 
            :createtime="item.createtime"
            :like="item.like" 
            :view="item.view" 
            :comment="item.comment"
            v-on:ArticleItemClick="ItemClickEvent"
        />
    </div>
</template>

<script>
import ArticleListItem from '../../../components/ArticleListItem.vue'

export default {
    data:function(){
        return{
            ArticleList:[]
        }
    },
    created:function(){
        //调用后台接口获取文章列表
    },
    methods:{
        ItemClickEvent:function(articleid){
            console.log(articleid);
        }
    },
    components:{
        ArticleListItem
    }
}
</script>