<template>
  <div class="DealerIndex">
      <div class="logo">
          <img src="../../assets/logo.png" alt="">
      </div>
      <h2>“油”衷感谢，服务“油”礼</h2>
      <div class="active">
        <div class="active_time">
            <p class="title"><img src="../../assets/a_time.png" alt=""><span>活动时间</span></p>
            <p>2018年4月16日-10月31日</p>
        </div>
        <div>
            <p class="title"><img src="../../assets/a_title.png" alt=""><span>活动对象</span></p>
            <p>泵车大客户、三年车龄以上泵车<br><span>（以行驶证机动车登记日期为准）</span></p>
        </div>
      </div>
      <div class="foot">
          <el-button type="primary" class="newBtn" @click="DealerClientList">我的服务客户列表</el-button>
      </div>
  </div>
</template>
<script>
export default {
  name: "DealerIndex",
  data() {
    return {

    };
  },
  methods:{
      DealerClientList(){
          this.$router.push({path:'/DealerClientList'})
      }
  }
};
</script>
<style lang="less">
    .DealerIndex{
        font-family: '宋体';
        height: 100%;
        background: url(../../assets/DealerIndex_bg.jpg) no-repeat left top;
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
            margin-top:17.33%;
            font-size: 22px;
            text-align: center;
            @media screen and(max-width:340px){
                font-size: 20px;
            }
        }
        .active{
            img{
                display: inline-block;
                width:22px;
            }
            font-size: 18px;
            text-align: center;
            p{
               span{
                   font-size: 14px;
               }
               &.title{
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   margin-bottom: 10px;
                   span{
                    font-size:20px;
                    color:#00adef;
                    // vertical-align: bottom;
                    margin-left:5px
                    }
               }
            }
            .active_time{
                &:after{
                    content:'';
                    display: block;
                    width:85%;
                    height:0;
                    border-top:1px solid #8f8f8f;
                    margin:24px auto;
                }
            }
        }
        
        .foot{
            height:50px;
            position: fixed;
            bottom:0;
            left: 0;
            width:100%;
            button{
                height: 100%;
                width: 100%;
                font-size: 18px;
            }
        }
    }
</style>

