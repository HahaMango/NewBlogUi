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
        <div v-loading="loading" element-loading-background="#2b2b2b">
            <el-row>
                <el-col :span="12" v-for="c in topTwo" :key="c.id">
                    <ICard :id="c.id" :projectName="c.projectName" :desc="c.desc" :platform="c.platform" :image="c.image" v-on:clickEvent="getOpenSourceDetail"/>
                </el-col>
            </el-row>
            <el-row v-for="row in otherList" :key="row.key">
                <el-col v-for="col in row.data" :key="col.data.id" :span="col.width">
                    <Card :id="col.data.id" :projectName="col.data.projectName" :desc="col.data.desc" :platform="col.data.platform" :image="col.data.image" v-on:clickEvent="getOpenSourceDetail"/>
                </el-col>
            </el-row>
            <el-dialog :visible.sync = "dialogVisible" title="详情" width="50%" :before-close="closeDialog" v-on:opened="openDialog">
                <div v-if="detail != null" style="text-align: left;">
                    <h1>{{detail.projectName}}</h1>
                    <p>{{detail.desc}}</p>
                    <a :href="detail.repositoryUrl" target="_blank" v-if="hasRepositoryUrl">项目链接</a>
                    <div v-if="hasReadme">
                        <h1>Readme</h1>
                        <div id="opensource-markdown-preview" class="marked-div">
                        </div>
                    </div>
                </div>
            </el-dialog>
            <!--加载动画占位符-->
            <div v-if="loading" style="height:5em;">
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../../../components/Card.vue'
import ICard from '../../../components/ImageCard.vue'
import {QueryOpenSourceDetail, QueryOpenSourcePage} from '../../../api/opensource.js'
import { isEmptyString } from '../../../utils/utils'
let marked = require('marked');
import hljs from "highlight.js";
import 'highlight.js/styles/ocean.css';

export default {
    data:function(){
        return{
            topTwo:[],
            otherList:[],
            detail:null,
            dialogVisible:false,
            loading:true
        }
    },
    created:function(){
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function(code) {
                return hljs.highlightAuto(code).value;
            },
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        });
        this.getOpenSourceList();
    },
    methods:{
        //查询开源项目
        async getOpenSourceList(){
            var req = new Object();
            req.userId = "13212312";
            req.pageParm = new Object();
            req.pageParm.page = 1;
            req.pageParm.size = 100;
            
            var result = await QueryOpenSourcePage(req);
            var ol = result.data.data;
            var i = 0;
            //前两个元素单独放
            for(;i < 2 && i < ol.length;i++){
                this.topTwo.push(ol[i]);
            }
            //之后的元素放进另一个数组
            var randomWidth = [8,6,10];
            while(i < ol.length){
                var widthIndex = Math.ceil(Math.random()*10);
                widthIndex = widthIndex % 3;
                var oRowObject = new Object();
                var oRow = new Array();
                for(var k = 0;k < 3 && i < ol.length;k++,i++){
                    var col = new Object();
                    col.width = randomWidth[(widthIndex++)%3];
                    col.data = ol[i];
                    oRow.push(col);
                }
                oRowObject.key = i;
                oRowObject.data = oRow;
                this.otherList.push(oRowObject);
            }
            this.loading = false;
        },
        //查询开源项目详情
        async getOpenSourceDetail(id){
            var result = await QueryOpenSourceDetail(id);
            this.detail = result.data;
            this.dialogVisible = true;
        },
        closeDialog:function() {
            this.detail = null;
            this.dialogVisible = false;
        },
        openDialog:function() {
            if(!isEmptyString(this.detail.readme)){
                var d = window.document.getElementById('opensource-markdown-preview');
                d.innerHTML = marked(this.detail.readme);
            }
        }
    },
    computed:{
        hasRepositoryUrl:function() {
            if(this.detail != null){
                return !isEmptyString(this.detail.repositoryUrl);
            }
            return false;
        },
        hasReadme:function() {
            if(this.detail != null){
                return !isEmptyString(this.detail.readme);
            }
            return false;
        }
    },
    components:{
        Card,
        ICard
    }
}
</script>

<style>

</style>