<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  created:function(){
    window.document.documentElement.style.backgroundColor = "#2b2b2b";
    //var s = document.createElement('script');
    //s.src = 'http://192.168.1.103:6001/target/target-script-min.js#anonymous';

    //var f = document.head.children[0];
    //document.head.insertBefore(s,f);
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c5c5c5;
}

html,body{
  height: 100%;
  width: 100%;
}

body{
  padding: 0em 0em 0em 0em;
  margin: 0px;
}
</style>
