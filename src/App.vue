<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  padding: none;
  margin: 0!important;
  height: 100%;
  background: #f7f7f7;
}
html {
  height: 100%;
}
#app {
  height: 100%;
  width: 1280px;
  margin: 0 auto;
}
</style>
