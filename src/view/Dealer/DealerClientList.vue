<template>
  <div class="DealerClientList g-flexview">
        <div class="ewm">
            <el-button class="newBtnS" type="primary">扫描二维码</el-button>
        </div>
        <div class="m_list">
            <h2>我的客户列表</h2>
            <table cellpadding="0"  cellspacing="0" border="0" width="100%"  class="tabfixed">
               <thead>
                <tr>
                    <th width="16%"><div class="ceil"><span>姓名</span></div></th>
                    <th><div class="ceil"><span>手机号</span></div></th>
                    <th><div class="ceil"><span>公司名称</span></div></th>
                    <th><div class="ceil"><span>服务时间</span></div></th>
                </tr>
               </thead>
            </table>
        </div>
         <div class="m_list g-scrollview">
            
            <table cellpadding="0"  cellspacing="0" border="0" width="100%">
                <tbody>
                    <tr v-for="(ele,index) in mList" :key="index">
                    <td width="16%">
                        <div class="ceil">
                            <span>{{ele.name}}</span>
                        </div>
                    </td>
                    <td width="28%">
                        <div class="ceil">
                            <span>{{ele.phone}}</span>
                        </div>
                    </td>
                    <td width="28%">
                        <div class="ceil">
                            <span>{{ele.comp}}</span>
                        </div>
                    </td>
                    <td width="28%">
                        <div class="ceil">
                            <span>{{ele.time}}</span>
                        </div>
                    </td>
                </tr>
                <tr v-if="isEmpety">
                    <td class="nodata">暂无数据</td>
                </tr>
                </tbody>
            </table>
        </div>
        
  </div>
</template>
<script>
export default {
  name: "DealerClientList",
  data() {
    return {
        mList:[]
    };
  },
  computed:{
      isEmpety(){
          return this.mList.length>0?false:true
      },
      sys(){
            wx.config({
       debug: false, // 调试模式开关
       appId: 'wx123643f30ec22e86', // 公众号的唯一标识
       timestamp: '${jsApi.timestamp}', // 生成签名的时间戳
       nonceStr: '${jsApi.nonceStr}', // 生成签名的随机串
       signature: '${jsApi.signature}',// 签名
       jsApiList: ['scanQRCode'] // JS接口列表
      });
            wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        }
        });
      }
  }
};
</script>
<style lang="less">
.DealerClientList{
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
    color:#333;
}
.ewm {
  text-align: center;
  padding:12% 0 8%;

  button{
      width:44.8%;
      height:40px;
      border-radius: 4px;
      color:#fff;
      max-width: 168px;
      outline: none;
  }
}

.m_list{ 
    padding:0 5px;
    h2{
        font-size: 16px;
        margin:5px;
        color:#333333;
        font-weight: normal;
        
    }
    table{
        &.tabfixed{
            background: #fff;
            th{
                font-weight: normal;
                height: 36px;
                border-bottom: 1px solid #ececec;
            }
        }
        
        table-layout: fixed;
        th,td{
            text-align: left;
            word-break: break-all;
            overflow: hidden;
            &.nodata{
                text-align:center;
                padding:10px 0;
                background:#fff;
                font-size:14px;
            }
            .ceil{
                padding:4px 5px;
                
                font-size: 12px;
                color:#333333;
            }
        }
        tbody{
            tr:nth-child(even){
                background: #fff;
            }
        }
    }
}
</style>

