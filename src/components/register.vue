<template>
  <div class="main-register">
    <div class="register">
      <div class="name">
        <span style="width:15%;text-align:end;margin-right:20px">email:</span><el-input v-model="input_name" placeholder="Please enter your cell email number"></el-input>
        <button class="sendcode" @click="tocode" style="">发送验证码</button>
      </div>
      <div class="name password">
        <span style="width:15%;text-align:end;margin-right:20px">verificationcode:</span><el-input v-model="verificationcode" placeholder="Please enter your verificationcode"></el-input>
      </div>
      <div class="name password">
        <span style="width:15%;text-align:end;margin-right:20px">username:</span><el-input :disabled=iscode v-model="input_username" placeholder="Please enter your name"></el-input>
      </div>
      <div class="name password">
        <span style="width:15%;text-align:end;margin-right:20px">password:</span><el-input :disabled=iscode v-model="input_password" placeholder="Please enter your password"></el-input>
      </div>
      <div class="name password">
        <span style="width:15%;text-align:end;margin-right:20px">cf-pass:</span><el-input :disabled=iscode v-model="input_confirm_password" placeholder="Please enter your password again"></el-input>
      </div>
      <el-button v-if="register == true" plain class="btn_register" @click="registered">register</el-button>
      <el-button v-else plain class="btn_register" @click="registered">tologin</el-button>
      <h5>Welcome to use</h5>
    </div>
  </div> 
</template>

<script>
import {register,verification_code} from "@/apis/login"
// import {emailzz} from "@/util/emailzz.js"
export default {
  data(){
    return{
      register:true,
      iscode:true,
      verificationcode:'',//验证码
      input_name:"",
      input_username:"",
      input_password:"",
      input_confirm_password:"",
      registeredft:false,
    }
  },
  methods:{
    async qtnreg(){
      const qs = require('qs')
      const obj = {
        email:this.input_name,
        username:this.input_username,
        password:this.input_password,
        verificationcode:this.verificationcode
      }
      const {data:res} = await register(qs.stringify(obj))
      console.log(res)
    },
    registered(){
      if(this.register == true){
        if(this.email != ''&&this.input_username != ''&&this.input_password != ''&&this.verificationcode != ''){
          this.qtnreg()
        }
      }else{
        this.$router.push({
          path:'/login'
        })
      }
    },
    async tocode(){
      const qs = require("qs")
      const obj = {
        email:this.input_name
      }
      const {data:res} = await verification_code(qs.stringify(obj))
      console.log(res)
    },
  },
  watch: {
    verificationcode(){
      if(this.verificationcode != ''){
        this.iscode = false
      }else{
        this.iscode = true
      }
    }
  }
}
</script>

<style lang="scss" scope>
.main-register{
  height: 100%;
  display: flex;
  .register{
    width: 30%;
    .name{
      margin-top: 10%;
      text-align: center;
      position: relative;
      .sendcode{
        position: absolute;
        margin-left: 20px;
      }
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