<template>
    <div class="micard">
        <div v-bind:style="{paddingTop:'7em',borderTopLeftRadius: '0.5em',borderTopRightRadius: '0.5em', background: imageUrl,height: 'auto',width: 'auto',backgroundSize:'cover'}">
            <div class="micard-head">
                <h2>{{projectName}}</h2>
            </div>
        </div>
        <div class="micard-body">
            <div class="micard-body-pl" v-if="hasPlatform">{{platform}}</div>
            <p>{{desc}}</p>
        </div>
    </div>
</template>

<script>
import { isEmptyString } from '../utils/utils'

export default {
    props:["id","projectName","desc","platform","image"],
    computed:{
        hasPlatform:function(){
            return !isEmptyString(this.platform);
        },
        imageUrl:function(){
            return "url('" + this.image + "')"
        }
    }
}
</script>

<style>
.micard {
    text-align: left;
    margin: 0.5em;
    background-color: #444444;
    border-radius: 0.5em;
    cursor: pointer;
}

.micard-head{
    padding: 0em 1em 0.3em 1em;
}

.micard-body{
    padding: 0.5em 1em 0.3em 1em;
}

.micard p{
    word-wrap: break-word;
	word-break: break-all;
}

.micard-body-pl{
    display: inline-block;
    padding: 0.2em 0.5em 0.2em 0.5em;
    background-color: rgb(27, 27, 27);
    border-radius: 0.5em;
    font-size: 0.7em;
}
</style>