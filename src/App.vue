<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:"app"
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
