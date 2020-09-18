<template>
    <textarea class="mtextarea" v-model="content" v-on:keyup="onchangeEvent"></textarea>
</template>

<script>
export default {
    data:function(){
        return{
            content:''
        }
    },
    props:['initText'],
    created:function(){
        this.content = this.initText;
    },
    methods:{
        onchangeEvent:function(){
            var text = document.getElementsByClassName('mtextarea')[0].value;
            this.$emit('onchangeEvent',text);
        }
    }
}
</script>

<style>
.mtextarea{
    border-radius: 0.2em;
    outline: none;
    background-color: #454545;
    color: inherit;
}

.mtextarea:focus{
    box-shadow: 0 0 0 0.2em #585858;
}
</style>