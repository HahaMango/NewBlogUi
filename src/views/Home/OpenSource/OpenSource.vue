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
            <el-row>
                <el-col :span="12">
                    <ICard projectName="测试2" desc="测试描述2dfwfwefewfssssssssssssswerq" platform="Github" image="https://tse1-mm.cn.bing.net/th/id/OIP.cLqkl6BfZFcJdyJCRovCFwHaEo?pid=Api&rs=1"/>
                </el-col>
                <el-col :span="12">
                    <ICard projectName="测试2" desc="测试描述2dfwfwefewfwesdccwerssssssssssssssssssssssssssssssssswerq" platform="Github" image="https://data.znds.com/attachment/forum/201608/27/002240ghmwu7rg2km82gsu.jpg"/>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <Card projectName="测试1" desc="测试描述1" platform="Gitlab"/>
                </el-col>
                <el-col :span="10">
                    <Card projectName="测试2" desc="测试描述2"/>
                </el-col>
                <el-col :span="6">
                    <Card projectName="测试2" desc="测试描述sdfwsdfsssssssssssssssssssss2"/>
                </el-col>
            </el-row>
            <el-row>
                <el-col v-for="item in aa"
                :key="item"
                :span="item"
                >
                <Card projectName="测试1" desc="测试描述1" platform="Gitlab"/>
                </el-col>
            </el-row>
        </div>
        <Mbutton text="😊即将开放..." :enable="false"/>
    </div>
</template>

<script>
import Mbutton from '../../../components/MButton.vue'
import Card from '../../../components/Card.vue'
import ICard from '../../../components/ImageCard.vue'

export default {
    data:function(){
        return{
            aa:[12,6,6]
        }
    },
    components:{
        Mbutton,
        Card,
        ICard
    }
}
</script>

<style>

</style>