<template>
  <div id="app">
    <iteam-nav></iteam-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import iteamNav from './components/nav/nav'
export default {
  name: 'app',
  components: {
    iteamNav
  }
}
</script>
<style>
  html, body {
    min-width: 815px;
    height: 100%;
  }
  #app {
    height: 100%;
  }
</style>
