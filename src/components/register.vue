<template>
  <div class="main-register">
    <div class="register">
      <div class="name">
        <span style="width:15%;text-align:end;margin-right:20px">phone:</span><el-input v-model="input_name" placeholder="Please enter your cell phone number"></el-input>
      </div>
      <div class="name password">
        <span style="width:15%;text-align:end;margin-right:20px">username:</span><el-input v-model="input_username" placeholder="Please enter your name"></el-input>
      </div>
      <div class="name password">
        <span style="width:15%;text-align:end;margin-right:20px">password:</span><el-input v-model="input_password" placeholder="Please enter your password"></el-input>
      </div>
      <div class="name password">
        <span style="width:15%;text-align:end;margin-right:20px">cf-pass:</span><el-input v-model="input_confirm_password" placeholder="Please enter your password again"></el-input>
      </div>
      <el-button plain class="btn_register" @click="registered">register</el-button>
      <h5>Welcome to use</h5>
    </div>
  </div> 
</template>

<script>
export default {
  data(){
    return{
      input_name:"",
      input_username:"",
      input_password:"",
      input_confirm_password:"",
      registeredft:false,
    }
  },
  methods:{
    registered(){
      this.$router.push({
        path:'/login'
      })
    }
  }
}
</script>

<style lang="scss" scope>
.main-register{
  height: 100%;
  display: flex;
  .register{
    width: 25%;
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
    .btn_register{
      width: 20%;
      margin-top: 15%;
      margin-left: 40%;
    }
  }
}
</style>