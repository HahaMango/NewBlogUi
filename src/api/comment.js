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

//获取评论分页数据
export function QueryCommentPage(data){
    return request({
        url : "api/blog/comment/page",
        method:"post",
        data
    });
}

//获取评论回复分页数据
export function QuerySubCommentPage(data){
    return request({
        url : "api/blog/comment/subpage",
        method:"post",
        data
    });
}

//添加评论
export function AddComment(data){
    return request({
        url : "api/blog/comment/add",
        method:"post",
        data
    });
}

//添加回复评论
export function AddReplyComment(data){
    return request({
        url : "api/blog/comment/addreply",
        method:"post",
        data
    });
}