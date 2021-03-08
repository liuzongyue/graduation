<template>
  <div id="app">
    <navigationBar></navigationBar>
    <router-view></router-view>
  </div>
</template>
<script>
import navigationBar from "./../src/views/components/navigation_bar"
export default {
  name:"app",
  components: {
    navigationBar,
  }
}
</script>
<style lang="scss" scope>
*{
  margin: 0;
  border: 0;
}
#app,body,html{
  width: 100%;
  height: 100%;
  // background: rgb(161, 121, 10);
}
</style>
