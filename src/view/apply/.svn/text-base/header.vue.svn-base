<template>
  <div class="applyHead">
     <ul>
         <li :class="{active:(navActive==='/applySignUp')}" @click="routerLink($event,'/applySignUp')"><span>我要报名</span></li>
         <li :class="{active:(navActive==='/applySignIn')}" @click="routerLink($event,'/applySignIn')"><span>我的报名</span></li>
     </ul>
  </div>
</template>
<script>
export default {
  name: "applyHead",
  data() {
    return {

    };
  },
  computed:{
     navActive(){
        return this.$route.path
     }
  },
  methods:{
      routerLink(event,path){
        event.preventDefault();
        event.stopPropagation();
        this.$router.push({path:path})
      }
  }

};
</script>
<style lang="less">
    .applyHead{
        position: absolute;
        width:100%;
        top:0;
        left:0;
        z-index: 10;
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                height: 50px;
                line-height: 50px;
                width:50%;
                text-align: center;
                background: #f5f5f5;
                color:#333;
                cursor: pointer;
                &.active{
                    background: #00adef;
                    color:#fff;
                }
            }
        }
        
    }
</style>

