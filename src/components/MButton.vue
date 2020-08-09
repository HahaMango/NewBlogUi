<template>
    <button class="mbutton">{{text}}</button>
</template>

<script>
export default {
    props:['text']
}
</script>

<style>
.mbutton{
    background-color: #454545;
    color: inherit;
    border: none;
    padding: 0.5em 1em 0.5em 1em;
    outline: none;
    cursor: pointer;
}

.mbutton:hover{
    background-color: #5f5f5f;
}

.mbutton:focus{
    background-color: #3b3b3b;
    box-shadow: 0 0 0 0.2em #585858;
}
</style>