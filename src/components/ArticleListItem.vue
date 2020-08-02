<template>
    <div>
        <h2>{{title}}</h2>
        <p>{{createtime}} {{like}} {{view}} {{comment}}</p>
        <p>{{desc}}</p>
    </div>
</template>

<script>
export default {
    props:["title","desc","createtime","like","view","comment"]
}
</script>

<style>

</style>