<template>
  <div class="applySignIn g-flexview">
     <div class="g-scrollview">
      <div class="msgArea">
        <p class="title">您有{{numApply}}个报名正在审核中</p>
        <div class="notAcess">
          <ul>
            <li><span>6256526551</span>审核未通过</li>
          </ul>
        </div>
     </div>
      <ul class="ewmArea">
          <li v-for="(ele,index) in ewmArr" :key="index">
            <div>
                <p><strong>{{index+1}}</strong><span>{{ele.code}}</span></p>
                <img src="../../assets/ewm_ex.png" alt="">
                <div class="mskUse" v-if="ele.used">
                    <img src="../../assets/areadyUse.png" alt="">
                </div>
            </div>
          </li>
      </ul>
     </div>

  <div class="foot">
    <ul>
      <li> <el-button class="newBtn" type="primary">二维码使用方法</el-button></li>
      <li> <el-button class="newBtn" type="primary">领取奖品方法</el-button></li>
      <li> <el-button class="newBtn" type="primary">查找经销商</el-button></li>
    </ul>
  </div>
  </div>
</template>
<script>
export default {
  name: "applySignIn",
  data() {
    return {
        numApply:4,
        imgUrl:'../../assets/ewm_ex.png',
        ewmArr:[{
          code:6356526366,
          imgUrl:'../../assets/ewm_ex.png',
          used:false
        },
        {
          code:6356526366,
          imgUrl:'../../assets/ewm_ex.png',
          used:false
        }]
    };
  },
  methods:{

  }
  };
</script>
<style lang="less" scope>
    .applySignIn .g-scrollview:after{
      height:0;
    }
    .applySignIn{
        color: #333;
        box-sizing: border-box;
        padding-top: 50px;
        padding-bottom: 50px;
        height: 100%;
        .msgArea{
          margin:0 4.8%;
          .notAcess{
            padding:10px 0 15px;
            ul{
              background: url(../../assets/notPaaa_icon.png) no-repeat left 2px;
              background-size: 15px auto;
              padding-left:20px;
              li{
                font-size: 14px;
                span{
                  color:#e60012;
                }
              }
            }
          }
        }
        .ewmArea{
          height:100%;
          padding:0 50px;
          li{
            width:100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            >div{
              position: relative;
              .mskUse{
                position: absolute;
                left: 0;
                right:0;
                top:0;
                bottom:0;
                background: rgba(0,0,0,0.66);
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                  width:46.5%;
                  animation:show 0.2s ease-out;
                }
              }
              p{margin-bottom:5px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                // text-align: center;
                strong,
                span{
                  font-size: 30px;
                  @media screen and (max-width:340px){
                    font-size: 26px;
                  }
                }
                strong{
                  background: #00adef;
                  color:#fff;
                  width:50px;
                  line-height:50px;
                  text-align: center;                  
                }
                span{
                  text-align:center;
                  background: #fff;
                  flex:1;
                  line-height:50px;
                }
              }
            }
            img{
              display: block;
              width:100%;
            }
          }
        }
        .title{
          font-size: 16px;
          color:#000000;
          padding:6% 0 3%;
          border-bottom:1px solid #999999;
        }
        
        .foot{
          width:100%;
          position: absolute;
          bottom:0;
          left:0;
          background: #666666;
          color:#fff;
          font-size: 14px;
          ul{
            display: flex;
          align-content: center;
          justify-content: center;
          li{
            flex:1;
            border-right:1px solid #9b9b9b;
            text-align: center;
           
            button{
               line-height: 50px;
              height:100% ;
              width:100%;
              background: #666666;
              border: 1px solid #666666;
              text-align: center;
              padding:0;
              margin:0;
            }
          }
          }
          
        }
    }
@-webkit-keyframes show {
  0%{
    opacity: 0;
    transform: scale(2)
  }
}
@keyframes show {
  0%{
    opacity: 0;
    transform: scale(2)
  }
}
</style>

