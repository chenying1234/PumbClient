<template>
  <div class="applySignUp g-scrollview">
      <h2>“油”衷感谢，服务“油”礼 </h2>
    <div class="formArea">
        <el-form :label-position="labelPosition" :rules="formRules" ref="ValidateForm" label-width="60px" :model="formLabelAlign">
            <el-form-item prop="subName"   label="姓">
        <el-input @focus="scrollView($event)"  v-model="formLabelAlign.subName" placeholder="请填写"></el-input>
        </el-form-item>
        <el-form-item prop="Name"  label="名">
            <el-input @focus="scrollView($event)" v-model="formLabelAlign.Name" placeholder="请填写"></el-input>
        </el-form-item>
        <el-form-item class="phoneGap" prop="phone" label="手机号">
            <el-input @focus="scrollView($event)" v-model="formLabelAlign.phone" placeholder="请填写" ></el-input>
        </el-form-item>
        <el-form-item label="" prop="secCode">
               <div class="getCode">
                <div>
                    <el-input @focus="scrollView($event)"  v-model="formLabelAlign.secCode" placeholder="请填写"></el-input>
                </div>
                <el-button class="newBtn" type="primary" :disabled="codeDisable" @click="getSecCode"><template v-if="codeDisable">{{timeCount}}</template>{{code}}</el-button>
            </div>
        </el-form-item>
        <el-form-item label="行驶证" prop="Carlicense">
            <el-upload v-if="isEmpety"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
             :on-change="handleChange"
            :file-list="formLabelAlign.Carlicense"
            :auto-upload="false"
            accept="image/*">
            <el-input  class="resetdis" disabled ></el-input>
            </el-upload>
            <div class="ImgList" :class="{gap:!isEmpety}">
            </div>
    </el-form-item>
        <el-form-item label="邀请码" prop="InviteCode">
            <el-input @focus="scrollView($event)" v-model="formLabelAlign.InviteCode" placeholder="请填写"></el-input>
        </el-form-item>
      </el-form>
      <p>报名情况我们会以短信方式发送到注册手机号，<br>请准确填写您的联系方式！</p>
       <el-button class="newBtn submit" @click="submit" type="primary">提交</el-button>
    </div>
  </div>
</template>
<script>
import submitScuess from '@/assets/submitScuess.png'
export default {
  name: "applySignUp",
    // 自定义验证格式
  data() {
      let tagName = {
        msg1:'不能为空',
        msg2:'手机格式正确',
        msg3:'验证码有误',
        msg4:'请上传图片',
        msg5:'邀请码有误',
       
    };
    let  validatePhone = (rule, value, callback) => {
        let validationRule = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/; 
        if($.trim(value).length <1){
            callback(new Error(tagName.msg1));
        }
        else if(!validationRule.test(value)){
            callback(new Error(tagName.msg2));
        }else {
              callback();
          }
    };
    let validateCarlicense =  (rule, value, callback) => {
        if(this.formLabelAlign.Carlicense.length === 0){
            callback(new Error(tagName.msg4));
        }else {
              callback();
          }
    };
    let validateSecCode  =  (rule, value, callback) => {
        if(!this.fromMsg.secCodeMsg){
           if($.trim(this.formLabelAlign.phone.length)<1){
                return false
           }else{
               if($.trim(value).length<1){
                 callback(new Error(tagName.msg1))
                }else{
                    callback()
                }
           }
        }else {
                callback(new Error(tagName.msg3))
          }
    };
    let validateInviteCode = (rule, value, callback) => {
         if(!this.fromMsg.InviteCodeMsg){
            if($.trim(value).length<1){
                 callback(new Error(tagName.msg1))
            }else{
                callback();
            }
        }else {
                callback(new Error(tagName.msg5))
          }
    }
    return {
        labelPosition: 'right',
        code:'获取验证码',
        codeDisable:false,
        timeCount:15,
        timeObj:null,
        fromMsg:{
            secCodeMsg:false,
            InviteCodeMsg:false
        },
        formLabelAlign: {
          subName:'',
          Name: '',
          phone: '',
          secCode: '',
          Carlicense:[],
          InviteCode:''
        },
        formRules: {
            subName: [
                 { required: true,message:tagName.msg1},
              ],
              Name:[{ required: true,message:tagName.msg1}],
              phone:[{
                   required: true,validator: validatePhone
              }],
              secCode:[{
                   required: true,validator: validateSecCode
              }],
              Carlicense:[{
                   required: true,validator: validateCarlicense
              }],
              InviteCode:[{
                  required: true,validator: validateInviteCode
              }]
          },

    }
  },
  computed:{
      isEmpety(){
          return this.formLabelAlign.Carlicense.length>0?false:true
      }
  },
   methods: {
      handleRemove(file, fileList) {
      },
      handlePreview(file) {
      },
       handleChange(file, fileList) {
           console.log(fileList)
            this.formLabelAlign.Carlicense = fileList.slice(0);
            // document.getElementById('ddd').setAttribute('src',fileList[0].url)
            this.$refs.ValidateForm.validateField('Carlicense',callback => {})
            this.creatImg(fileList[0].url)
      },
      isInView(e){
        //  是否在可视区
        let contentHeight = $('.applySignUp').offset().top+50;
        let scrollTop = $('.applySignUp').scrollTop();
        let scrollH = $('.applySignUp').height();
        var post = $(e.target).offset().top - contentHeight,
            posb = post + $('e.target').height();
        if((post >= 0 && post < contentHeight)|| (posb > 0 && posb <= contentHeight)){
            return false 
        }else{
            return true
        }
      
        

      },
      scrollView(e){
          let _this = this;
        setTimeout(function(){
            if(_this.isInView(e)){
                let oldH=$(e.target).offset().top;
                let scrollTop = $('.applySignUp').scrollTop();
                let current = $(window).height();
                $('.applySignUp').scrollTop(oldH-current+70+scrollTop)//增加安卓聚焦
            }
          
          
        },500)
      },
      creatImg(src){
        var imgBox = $('<div class="previewImg"></div>');
        var img = $('<img src='+ src+' />')
        var del = $('<div class="del"></div>');
            img.css({height:'60px',width:'60px'})
            imgBox.css({position:'relative'})
            imgBox.append(img);
            imgBox.append(del);
            $('.ImgList').append(imgBox);
            this.bindClick(del)
        },
        bindClick(src){
            let _this = this;
            $(src).on('click',function(){
                $(this).parents('.previewImg').remove()
                _this.formLabelAlign.Carlicense = [];
                _this.$refs.ValidateForm.validateField('Carlicense',() => {})
            })
        },
        submit(){
            // this.$refs.ValidateForm.validate(valid => {
            // })
                // this.$alert(`<img class="scussIcon" src="${submitScuess}" /><p class="title">提交成功</p><p>正在审核中，请耐心等待。<br>审核结果我们会用短信发送到注册手机，<br>请关注短信。</p>`, '', {
                //     showConfirmButton:false,
                //     dangerouslyUseHTMLString: true,
                //     type: '',
                //     center: true
                // })
            this.$router.push({path:'/DealerLogin'})
        },
        getSecCode(){
              this.$refs.ValidateForm.validateField('phone',(errorMessage) => {
                  if(!errorMessage){
                      this.codeDisable = true;
                      this.code= "后再获取验证码";
                      this.timeGo()
                  }
              })
        },
        timeGo(){
            let _this = this;
            this.timeObj = setInterval(function(){
                if(_this.timeCount <=1){
                    clearInterval(_this.timeObj)
                    _this.timeCount = 15;
                    _this.timeObj = null;
                     _this.codeDisable = false;
                    _this.code= "获取验证码";
                }else{
                    _this.timeCount--
                }
            },1000)
        }
    }
}
</script>
<style lang="less">
.el-upload{
    width:100%;
}
.phoneGap{
    margin-bottom: 0;
}

.applySignUp {
  color: #333;
  box-sizing: border-box;
  padding-top: 50px;
  h2 {
    font-size: 22px;
    text-align: center;
    color: #000;
    @media screen and(max-width:340px) {
      font-size: 20px;
    }
  }
  .formArea{
      padding:0 15px;
      .getCode{
          width:100%;
          margin-top:5px;
          display: -webkit-box; 
          display: -webkit-flex; 
          display: -ms-flexbox; 
          display: flex;
          div{
            -webkit-box-flex: 1; 
            -webkit-flex: 1; 
            -ms-flex: 1; 
            flex: 1;
          }
          button{
              font-size: 12px;
              padding:11px 10px;
              border:0;
              background: #8f8f8f;
          }
      }
  }
  .previewImg{
      position: relative;
      width:60px;
      height: 60px;
      img{
          border:1px solid #eee;
      }
  }
  .del{
      position: absolute;
      width:16px;
      height: 16px;
      right: -8px;
      top:-8px;
      background: url(../../assets/delImg.png) no-repeat left center;
      background-size: 100% auto;
      cursor: pointer;
  }
  p{
      font-size: 14px;
      color:#333;
      @media screen and (max-width:340px){
          font-size: 13px;
      }
  }
  .gap{
      margin-top: 10px;
  }
  button.submit{
      width:100%;
      margin-top:40px;
  }
}
</style>

