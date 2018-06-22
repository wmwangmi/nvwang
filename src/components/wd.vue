<template>
  <div class="wdbg">
    <div class="wdtl">
      <div class="wdtlson">
        <div class="tx">
          <img src="../assets/logo.png">
        </div>
        <div class="name">王秘大老板</div>
      </div>
    </div>
    <div class="wdtl">
      <div class="wdtlson">
        <div class="wddd">我的订单</div>
      </div>
      <div class="wdtlson">
        <router-link :to="{}" class="wdddblock">
          <img src="../assets/fk.png">
          <div class="wen">
            待付款
          </div>
        </router-link>
        <router-link :to="{}" class="wdddblock">
          <img src="../assets/sh.png">
          <div class="wen">
            待发货
          </div>
        </router-link>
        <router-link :to="{}" class="wdddblock">
          <img src="../assets/dd.png">
          <div class="wen">
            全部订单
          </div>
        </router-link>
      </div>
    </div>
    <div class="wdtl">
      <div class="wdtlson">
        <router-link :to="{name:'scj',params:{id:1}}" class="wddd sty"><img src="../assets/wdicon_07.png" />收藏夹</router-link>
        <router-link :to="{}" class="wddd sty"><img src="../assets/wdicon_10.png" />我的足迹</router-link>
        <router-link :to="{}" class="wddd sty"><img src="../assets/wdicon_12.png" />我的红包</router-link>
        <router-link :to="{name:'wdkj',params:{id:1}}" class="wddd sty"><img src="../assets/wdicon_16.png" />我的砍价</router-link>
        <router-link :to="{name:'wddz',params:{id:1}}" class="wddd sty"><img src="../assets/wdicon_19.png" />我的地址</router-link>
      </div>
    </div>
    <bott-nav :selnavfir="fir"></bott-nav>
  </div>
</template>

<script>
import bottNav from '../tpl/bottnav.vue'
export default {
  name: 'wd',
  data () {
    return {
      fir:true
    }
  },
  mounted: function () {
    
  },
  components:{
    bottNav
  }
}
</script>

<style>
  .wdbg{
    background:#f5f5f5;
    width:100%;
    height:auto;
    overflow:hidden;
  }
  .wdtl{
    width:100%;
    height:auto;
    background:#fff;
    overflow:hidden;
    margin-bottom: 1.2rem;
  }
  .wdtlson{
    width:90%;
    height:auto;
    overflow:hidden;
    margin:0 auto;
    display: flex;
    flex-flow: row wrap;
  }
  .wdtlson .tx{
    flex:1;
    border-radius:100%;
  }
  .wdtlson .tx img{
    width:100%;
    height:auto;
  }
  .wdtlson .name{
    flex:5;
    align-self: center;
    text-align: left;
    text-indent:1rem;
  }
  .wddd{
    width:100%;
    height:3rem;
    line-height:3rem;
    border-bottom:1px solid #f5f5f5;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    position: relative;
  }
  .wddd img{
    width:10%;
    height:auto;
    align-self: center;
    margin-right:10px;
  }
  .wddd.sty::after{
    content: '';
    border-right:1px solid #a3a3a3;
    border-bottom:1px solid #a3a3a3;
    width:10px;
    height:10px;
    position: absolute;
    right:5px;
    top:50%;
    transform: translateY(-50%) rotate(-45deg);
  }
  .wdddblock{
    flex:1;
    margin:10px auto;
  }
  .wdddblock img{
    width:30%;
    height:auto;
    margin:0 auto;
  }
  .wdddblock .wen{
    width:100%;
    height:1.5rem;
    line-height: 1.5rem;
    text-align: center;
    color:#333;
  }
</style>