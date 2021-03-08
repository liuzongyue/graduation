<template>
  <div class="main-login">
    <div class="login">
      <div class="name">
        <span style="width:15%;text-align:end;margin-right:20px">phone:</span><el-input v-model="input_name" placeholder="Please enter your cell phone number"></el-input>
      </div>
      <div class="name password">
        <span style="width:15%;text-align:end;margin-right:20px">password:</span><el-input v-model="input_password" placeholder="Please enter your password"></el-input>
      </div>
      <el-button type="primary" plain class="btn_login" @click="tryto">login</el-button>
      <i @click="registered">/register</i>
      <h5>Welcome to use</h5>
    </div>
  </div> 
</template>

<script>
export default {
  data(){
    return{
      input_name:"",
      input_password:"",
    }
  },
  methods:{
    tryto(){
      this.$router.push('/playPage/try_flex')
    },
    registered(){
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scope>
.main-login{
  height: 100%;
  display: flex;
  .login{
    width: 25%;
    opacity: 0.7;
    .name{
      margin-top: 10%;
      text-align: center;
      span{
        display: inline-block;
        margin: 0;
      }
      .el-input{
        width: 50%;
      }
    }
    .password{
      margin-top: 5%;
    }
    h5{
      margin-top: 5%;
      text-align: center;
      margin-bottom: 10%;
    }
    i{
      display: inline-block;
      margin-left: 20px;
      font-size: 12px;
      color: #b3d8ff;
      cursor: pointer;
    }
    i:hover{
      color: blue;
    }
    i:active{
      color: #b3d8ff;
    }
    .btn_login{
      width: 20%;
      margin-top: 15%;
      margin-left: 40%;
    }
  }
}
</style>