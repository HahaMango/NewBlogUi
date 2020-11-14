<template>
    <div class="mcard" v-on:click="clickEvent">
        <h2 class="card-head">
            {{projectName}}
        </h2>
        <div class="card-body">
            <div class="card-body-pl" v-if="hasPlatform">{{platform}}</div>
            <p>{{desc}}</p>
        </div>
    </div>
</template>

<script>
import { isEmptyString } from '../utils/utils'

export default {
    props:["id","projectName","desc","platform"],
    computed:{
        hasPlatform:function(){
            return !isEmptyString(this.platform);
        }
    },
    methods:{
        clickEvent:function() {
            this.$emit('clickEvent',this.id);
        }
    }
}
</script>

<style>
.mcard {
    text-align: left;
    margin: 0.5em;
    padding:0.3em 1em 0.3em 1em;
    background-color: #444444;
    border-radius: 0.5em;
    cursor: pointer;
}

.mcard p{
    word-wrap: break-word;
	word-break: break-all;
}

.card-body-pl{
    display: inline-block;
    padding: 0.2em 0.5em 0.2em 0.5em;
    background-color: rgb(27, 27, 27);
    border-radius: 0.5em;
    font-size: 0.7em;
}
</style>