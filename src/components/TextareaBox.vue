<template>
    <textarea class="mtextarea"></textarea>
</template>

<script>
export default {
    props:['text']
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