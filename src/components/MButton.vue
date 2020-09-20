<template>
    <button class="mbutton" :class="[enable ? 'mbutton-acvite':'mbutton-disable']" v-on:click="mbuttonClickEvent">{{text}}</button>
</template>

<script>
export default {
    props:{
        text:String,
        enable:Boolean
    },
    methods:{
        mbuttonClickEvent:function(){
            if(this.enable){
                this.$emit('mbuttonClickEvent');
            }
        }
    }
}
</script>

<style>
.mbutton{
    background-color: #454545;
    color: inherit;
    border: none;
    padding: 0.5em 1em 0.5em 1em;
    outline: none;
}

.mbutton-acvite:hover{
    background-color: #5f5f5f;
}

.mbutton-acvite:focus{
    background-color: #3b3b3b;
    box-shadow: 0 0 0 0.2em #585858;
}

.mbutton-disable{
    background-color: rgb(60, 64, 0);
    box-shadow: 0 0 0 0.2em #5d6300;
}

.mbutton-acvite{
    cursor: pointer;
}
</style>