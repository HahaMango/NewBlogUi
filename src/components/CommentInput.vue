<template>
    <div>
        <el-row>
            <el-col :span="5"><div style="height:1px"></div></el-col>
            <el-col :span="14" class="comment-area">
                <Mtextarea class="comment-textarea"/>
                <Mbutton text="评论" class="comment-button"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Mbutton from '../components/MButton.vue';
import Mtextarea from '../components/TextareaBox.vue';

export default {
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

.comment-textarea:focus{
    width: 97%;
    height: 5em;
    resize: none;
}

.comment-area{
    text-align: right;
}

.comment-button{
    margin-top: 0.5em;
}
</style>