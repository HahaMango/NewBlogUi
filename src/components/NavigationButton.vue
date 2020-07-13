<template>
    <button type="button" class="navigation-button">
        <div>
            {{content}}
        </div>
    </button>
</template>

<script>
export default {
    data:function(){
        return{
            
        }
    },
    props:["content"]
}
</script>

<style>

.navigation-button{
    color: black;
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
    color: rgb(180, 180, 180);
    border-color: black;
}

.navigation-button div{
    margin: 0.3em 0.2em 0.3em 0.2em;
}

</style>