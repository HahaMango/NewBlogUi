<template>
    <div class="comment-area-main-div">
        <el-row>
            <el-col :span="5"><div style="height:1px"></div></el-col>
            <el-col :span="14" class="comment-area">
                <Mtextarea class="comment-textarea" :initText="initText" v-on:onchangeEvent="mtextareaChangeEvent"/>
                <el-row>
                    <el-col :span="8">
                        <div style="height:1px"></div>
                    </el-col>
                    <el-col :span="10">
                        <div class="comment-span">
                            <span>匿名用户名：</span>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <Mtext class="comment-text" :initText="initUserName" v-on:onchangeEvent="mtextChangeEvent"/>
                    </el-col>
                    <el-col :span="3">
                        <Mbutton text="评论" class="comment-button" v-on:mbuttonClickEvent="submitEvent"/>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Mbutton from '../components/MButton.vue';
import Mtextarea from '../components/TextareaBox.vue';
import Mtext from '../components/MTextBox.vue'

export default {
    data:function(){
        return{
            content:'',
            userName:''
        }
    },
    props:['initText','initUserName'],
    mounted:function(){
        this.content = this.initText;
        this.userName = this.initUserName;
    },
    methods:{
        submitEvent:function(){
            this.$emit('submitEvent',this.content,this.userName);
        },
        mtextareaChangeEvent:function(object){
            this.content = object;
        },
        mtextChangeEvent:function(object){
            this.userName = object;
        }
    },
    components:{
        Mbutton,
        Mtextarea,
        Mtext
    }
}
</script>

<style>
.comment-textarea{
    width: 97%;
    height: 1.7em;
    resize: none;
}

.comment-span{
    margin-top: 0.7em;
}

.comment-text{
    margin-top: 1em;
}

.comment-area{
    text-align: right;
}

.comment-button{
    margin-top: 0.5em;
}
</style>