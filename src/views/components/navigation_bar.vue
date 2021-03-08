<template>
  <div class="navigation_bar">
    <div class="navigation_input">
      <el-input v-model="navigation" prefix-icon="el-icon-search"></el-input>
      <div class="user_login">
        <span>刘宗悦</span><img src="../../assets/message/login.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation:"",
    }
  }
}
</script>
<style lang="scss">
.navigation_bar{
  .el-input.el-input--prefix{
    width: 30%;
    .el-input__inner{
      width: 100%;
      background: #C0C4CC;
    }
    .el-input__prefix, .el-input__suffix{
      color: #000;
    }
  }
}
</style>
<style lang="scss" scope>
  .navigation_bar{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    .navigation_input{
      width: 58%;
      display: flex;
      .user_login{
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width: 30px;
          height: 30px;
          margin-left: 20px;
        }
      }
    }
  }
</style>