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

import request from '../utils/request.js'

//获取文章分页数据
export function QueryArticlePage(data){
    return request({
        url : "api/blog/article/page",
        method:"post",
        data
    });
}

//获取文章详情数据
export function QueryArticleDetail(data){
    return request({
        url:"api/blog/article/detail",
        method:"post",
        data
    });
}

//增加文章浏览数
export function IncArticleViewCount(data){
    return request({
        url:"api/blog/article/incview",
        method:"post",
        data
    });
}

//添加文章
export function AddArticle(data){
    return request({
        url:"api/blog/admin/article/add",
        method:"post",
        data
    });
}