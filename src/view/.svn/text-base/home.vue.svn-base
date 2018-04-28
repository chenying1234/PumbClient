<template>
  <div class="applyIndex">
      <div class="logo">
          <img src="../assets/logo.png" alt="">
      </div>
     <div class="title">
          <img class="title" src="../assets/applyTitle.png" alt="">
          <p>奔驰卡车感恩回馈活动</p>
     </div>
     <div class="content">
         <p>感谢关注奔驰卡车服务号，欢迎您的到来！<br>活动期间在奔驰卡车授权经销商处维修保养<br>(任意金额)即可免费获得奔驰卡车
        <br><span>原厂发动机油一瓶</span>(4升)。</p>
        <p class="content_em">活动具体规则请电询奔驰卡车授权经销商。</p>
     </div>
     <div class="apply_btn">
         <el-button @click="carIndex" class="newBtn" type="primary">我是车主</el-button>
         <el-button @click="distributorIndex" class="newBtn" type="primary">我是经销商</el-button>
     </div>
  </div>
</template>
<script>
export default {
  name: "applyIndex",
  data() {
    return {

    };
  },
  methods:{
      carIndex(){
          this.$router.push({path:'/applySignUp'})
      },
       distributorIndex(){
          this.$router.push({path:'/DealerLogin'})
      }
  }
};
</script>
<style lang="less" scope>
    .applyIndex{
        height: 100%;
        background: url(../assets/applyIndex_bg.jpg) no-repeat left top;
        background-size: 100% 100%;
        img{
            display: block;
            border:none;
            max-width: 100%;
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
        .title{
            img{
                width:80.8%;
                margin:12% auto 0;
            }
            p{
                font-size: 18px;
                text-align: center;
                color:#dfdede;
                margin-top:10px;
                @media screen and (max-width:340px){
                    font-size: 16px;
                }
            }
        }
        .content{
            text-align: center;
            font-size: 15px;
            line-height: 1.5;
            @media screen and (max-width:340px){
                font-size: 14px;
            }
            span{
                color:#00adef;
            }
            .content_em{
                margin-top:10px
            }
        }
        .apply_btn{
            margin-top:10.7%;
            display: flex;
            align-items: center;
            justify-content: center;
            button{
                width:40.8%;
                -webkit-tap-highlight-color:rgba(0,0,0,0.5)
            }
        }
        
    }
</style>

