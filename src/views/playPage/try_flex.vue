<template>
  <div class="try_flex">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
.try_flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  width: 80%;
  height: 500px;
  background-color: aquamarine;
  span{
    width: 40%;
    height: 20%;
    background-color: beige;
  }
}

</style>