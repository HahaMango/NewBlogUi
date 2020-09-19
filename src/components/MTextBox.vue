<template>
    <input class="mtext" v-on:keyup="onchangeEvent" :value="initText"/>
</template>

<script>
export default {
    props:['initText'],
    methods:{
        onchangeEvent:function(){
            var text = document.getElementsByClassName('mtext')[0].value;
            this.$emit('onchangeEvent',text);
        }
    }
}
</script>

<style>
.mtext{
    border: solid;
    border-color: gray;
    border-width: 0.05em;
    border-radius: 0.2em;
    outline: none;
    background-color: #454545;
    color: inherit;
    width: 100%;
}

.mtext:focus{
    box-shadow: 0 0 0 0.2em #585858;
}
</style>