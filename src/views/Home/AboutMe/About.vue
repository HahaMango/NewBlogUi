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
        <p>真实姓名：{{RealName}}</p>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            RealName:"Chiva Chen",
            Age:24,
            Graduate:"佛山职业技术学院",
            Education:"大专",
            Major:"电气自动化",
            Email:"q932104843@outlook.com",
            GitHub:"https://github.com/HahaMango",
            Remark:"微信公众号 : ChivaStudio",
            Desc:""
        }
    }
}
</script>