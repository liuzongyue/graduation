<template>
  <div class="personal_edit">
    <div class="edit_all">
      <table>
        <tr>
          <td>我的头像:</td>
          <td><img src="../assets/message/login.jpg" alt=""></td>
        </tr>
        <tr>
          <td>姓名:</td>
          <td>刘宗悦</td>
        </tr>
        <tr>
          <td>性别:</td>
          <td>男</td>
        </tr>
        <tr>
          <td>生日:</td>
          <td>
            <el-select v-model="yearvalue" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="monthvalue" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="dayvalue" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td>积分:</td>
          <td>100</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      options:[{
        value:1998,
        lable:1998
      }],
      yearvalue:'',
      monthvalue:'',
      dayvalue:'',
    }
  }
}
</script>
<style lang="scss">
  .el-input.el-input--suffix{
    width: 100px;
    margin-right: 30px;
  }
</style>
<style lang="scss" scope>
  .personal_edit{
    width: 100%;
    display: flex;
    justify-content: center;
    .edit_all{
      table{
        &>tr:nth-child(1){
          &>td:nth-child(1){
            line-height: 80px;
          }
          &>td:nth-child(2){
            img{
              width: 80px;
              height: 80px;
              border-radius: 50%;
            }
          }
        }
        &>tr{
          display: flex;
          margin: 50px auto;
          &>td:nth-child(1){
            display: inline-block;
            margin-right: 50px;
            width: 80px;
            font-size: 16px;
            text-align: end;
          }
        }
        &>tr:nth-child(4){
          &>td:nth-child(1){
            line-height: 40px;
          }
        }
        &>tr:nth-child(5){
          &>td:nth-child(2){
            background: rgb(139, 29, 153);
            color: #fff;
          }
        }
      }
    }
  }
</style>