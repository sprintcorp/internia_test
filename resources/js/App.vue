<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style>
/* @import './sass/custom.scss'; */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
body{
    background: #e9e6e6 !important;
}
.card-color{
    background: #e6e8eb !important;
    border-color:  #e6e8eb !important;
}
</style>
