<template>
  <div class="login_con">
        <div class="logo">
            <img src="../../assets/logo.png" alt="">
        </div>
         <h2>
         油”衷感谢，服务“油”礼 服务者登录
         </h2>
         <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="0px" class="login_form">
          <el-form-item prop="accountName">
              <el-input class="input" name="accountName" type="text" v-model="loginForm.accountName" autoComplete="on" placeholder="手机号码"></el-input>
          </el-form-item>
          <el-form-item prop="verificationCode" class="verificationCode">
                <el-input class="input" name="verificationCode" type="text"  v-model="loginForm.verificationCode" placeholder="输入验证码"></el-input>    
                <el-button type="primary"  class="btn"  v-show="show" @click="getCode">获取验证码</el-button>
                <el-button type="primary"  class="btn"  v-show="!show" >{{count}} s</el-button>
          </el-form-item>
          <el-form-item>
              <el-button  type="primary" style="width: 100%;"  @click="handleLogin">登录</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>
<script>
export default {
  data() {
  
      const validateName = (rule, value, callback) => {
        let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
          if(value.length < 1) {
              callback(new Error('请填写手机号码'));
          } 
          else if (!reg.test(value)) {
             callback(new Error("手机号格式不正确"));
        }
        else {
              callback();
          }
      };
      const validatePass = (rule, value, callback) => {
          if(value.length < 1) {
              callback(new Error('请输入验证码'));
          } else {
              callback();
          }
      }
      return {
          loginForm: {
              accountName: '',
              verificationCode: ''
          },
          loginRules: {
              accountName: [
                  { required: true, trigger: 'blur', validator: validateName }
              ], 
              verificationCode: [
                  { required: true, trigger: 'blur', validator: validatePass }
              ]
          },
        show: true,
        count: '',
        timer: null,
      }
  },
  methods: {
      handleLogin() {
          let _this = this;
          this.$router.push({path:'/DealerIndex'})
          this.$refs.loginForm.validate(valid => {
              if(valid){
                  _this.loading = true;
                  this.$store.dispatch('Login', this.loginForm).then((res) => {
                    _this.loading = false;
                    if(res.data.Result){
                        _this.$message.success('登录成功！');
                        _this.$router.push({path: '/'})
                    } else {
                        _this.$message.error(res.data.Message);
                    }
                       
                  }).catch(err => {
                      _this.loading = false;
                    //   console.log(err)
                      this.$message({
                        message: "登录失败: 未知的用户名或错误验证码或服务器错误！",
                        type: 'error',
                        duration: 5 * 1000
                      });;
                  })
              } else {
                  return false;
              }
          })
      },
      getCode(){
        const TIME_COUNT = 60;
        if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
            } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            }
        }, 1000)
        }
      }
  }
}
 </script>
 <style lang="less" scoped>
 .el-form{
  margin:0px 20px;
 }
.el-form-item {
   // margin-bottom: 10px;
}

.login_con{
     font-family: '宋体';
        min-height: 100%;
        background: url(../../assets/distributor_bg_mb.jpg) no-repeat left top;
        background-size: 100% 100%;
        img{
            display: block;
            border:none;
        }
        .logo{
            padding:3.73% 0;
            border-bottom:2px solid #1f1f1f;
            img{
                width:26.53%;
                margin:0 auto;
                max-width: 100%;
            }
        }
        h2{
            margin: 0 auto;
            margin-top:10.93%;
            margin-bottom: 9.73%;
            width:72.53%;
            font-size: 22px;
            text-align: center;
            @media screen and(max-width:340px){
                font-size: 20px;
            }
        }
        .btn{
            height: 45px;
            background-color: #3c3c3c;
            text-align: center;
            position: absolute;
            border: none;
            pointer-events: auto;
            display: inline-block;
            right: 0;
            top: 0;
           
        }
        .el-button{
            font-size:15px;
        }
    
}
 </style>