<template>
    <textarea class="mtextarea" :value="initText" v-on:keyup="onchangeEvent"></textarea>
</template>

<script>
export default {
    props:['initText'],
    methods:{
        onchangeEvent:function(){
            var text = document.getElementsByClassName('mtextarea')[0].value;
            this.$emit('onchangeEvent',text);
            if(text == ''){
                this.$emit('clearInputEvent');
            }
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