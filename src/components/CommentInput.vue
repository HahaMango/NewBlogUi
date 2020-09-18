<template>
    <div class="comment-area-main-div">
        <el-row>
            <el-col :span="5"><div style="height:1px"></div></el-col>
            <el-col :span="14" class="comment-area">
                <Mtextarea class="comment-textarea" :initText="initText" v-on:onchangeEvent="mtextChangeEvent"/>
                <Mbutton text="评论" class="comment-button" v-on:mbuttonClickEvent="submitEvent"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Mbutton from '../components/MButton.vue';
import Mtextarea from '../components/TextareaBox.vue';

export default {
    data:function(){
        return{
            content:null
        }
    },
    props:['initText'],
    mounted:function(){
        this.content = this.initText;
    },
    methods:{
        submitEvent:function(){
            this.$emit('submitEvent',this.content);
        },
        mtextChangeEvent:function(object){
            this.content = object;
        }
    },
    components:{
        Mbutton,
        Mtextarea
    }
}
</script>

<style>
.comment-textarea{
    width: 97%;
    height: 1.7em;
    resize: none;
}

.comment-area{
    text-align: right;
}

.comment-button{
    margin-top: 0.5em;
}
</style>