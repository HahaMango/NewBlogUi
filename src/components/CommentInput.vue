<template>
    <div class="comment-area-main-div">
            <div class="comment-area">
                <Mtextarea class="comment-textarea" :initText="initText" v-on:onchangeEvent="mtextareaChangeEvent" v-on:clearInputEvent="mtextareaClearEvent"/>
                <el-row class="comment-area-row">
                    <el-col :span="5" :xs="12">
                        <div class="comment-span">
                            <span>匿名用户名：</span>
                        </div>
                    </el-col>
                    <el-col :span="7" :xs="12">
                        <Mtext class="comment-text" :initText="initUserName" v-on:onchangeEvent="mtextChangeEvent"/>
                    </el-col>
                    <el-col :span="6" :xs="24">
                        <div style="height:1px;"></div>
                    </el-col>
                    <el-col :span="6" :xs="24">
                        <Mbutton text="评论" class="comment-button" v-on:mbuttonClickEvent="submitEvent" :enable="true"/>
                    </el-col>
                </el-row>
            </div>
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
        },
        mtextareaClearEvent:function(){
            this.$emit("clearInputEvent");
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

.comment-area-row{
    padding-left: 0.3em;
    padding-right: 0.3em;
}
</style>