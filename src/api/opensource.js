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

//获取开源项目分页数据
export function QueryOpenSourcePage(data){
    return request({
        url : "api/opensource/project/list",
        method:"post",
        data
    });
}

//获取开源项目详情
export function QueryOpenSourceDetail(id){
    return request({
        url : "api/opensource/project/detail?id=" + id,
        method:"get"
    });
}