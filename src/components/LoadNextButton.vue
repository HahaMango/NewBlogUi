<template>
    <div class="load-next-button">
        <div class="load-next-button-inner" :style="{ width: width + 'px'}" :class="[enable ? 'load-next-button-inner-acvite':'load-next-button-inner-disable']" v-on:click="loadNextEvent">
            <p>{{text}}</p>
        </div>
    </div>    
</template>

<script>
export default {
    props:{
        enable:Boolean,
        text:String,
        width:Number
    },
    methods:{
        loadNextEvent:function(){
            if(this.enable){
                this.$emit('loadNextClick');
            }
        }
    }
}
</script>

<style>

.load-next-button-inner{
    margin-left: auto;
    margin-right: auto;
}

.load-next-button-inner-acvite{
    cursor: pointer;
}

.load-next-button-inner-acvite p:hover{
    color: white;
}

</style>