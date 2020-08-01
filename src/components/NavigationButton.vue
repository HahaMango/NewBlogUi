<template>
    <button type="button" class="navigation-button" v-on:click="ClickEvent">
        <div>
            {{content}}
        </div>
    </button>
</template>

<script>
import { isEmptyString } from '../utils/utils.js';

export default {
    data:function(){
        return{
            
        }
    },
    props:["content","routeUrl"],
    methods:{
        ClickEvent:function(){
            if(isEmptyString(this.routeUrl)){
                return;
            }
            this.$router.push(this.routeUrl);
        }
    }
}
</script>

<style>

.navigation-button{
    color: inherit;
    background-color: transparent;
    border: none;
    font-size: 1.1em;
    cursor: pointer;
    outline: none;
}

.navigation-button:hover{
    border-bottom: solid 0.1em;
}

.navigation-button:focus{
    color: rgb(100, 100, 100);
    border-color: rgb(100, 100, 100);
}

.navigation-button div{
    margin: 0.3em 0.2em 0.3em 0.2em;
}

</style>