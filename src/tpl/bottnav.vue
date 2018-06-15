<template>
  <div>
    <!--<div class="botnav">
      <div class="navb">
        <img src="../assets/navb1.png" />
        <span>首页</span>
      </div>
      <div class="navb">
        <img src="../assets/navb1.png" />
        <span>购物车</span>
      </div>
      <div class="navb">
        <img src="../assets/navb1.png" />
        <span>我的</span>
      </div>
    </div>-->
    <div class="botnav">
      <div class="navb">
        <img class="s" src="../assets/navb1.png" />
        <span>首页</span>
      </div>
      <div class="navb s">
        <img class="s" src="../assets/navb1.png" />
        <span>购物车</span>
      </div>
      <div class="gwbu">
               加入购物车
      </div>
      <div class="gwbu">
               立即购买
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'bottnav',
  data () {
    return {
    }
  },
  mounted: function () {
    
  }
}
</script>

<style scoped="scoped">
.botnav{
  width:100%;
  height:3rem;
  background:#fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: fixed;
  bottom:0;
  left:0;
}
.botnav .navb{
  flex:1;
  text-align: center;
}
.botnav .navb.s{
  border-left:1px solid #ededed;
}
.botnav .navb img{
  width:15%;
  height:auto;
}
.botnav .navb img.s{
  width:30%;
  height:auto;
}
.botnav .navb span{
  display: inline-block;
  width: 100%;
  height:1.5rem;
  line-height:1.5rem;
  margin:0;
  padding:0;
}
.botnav .gwbu{
  flex:2;
  background:#f38495;
  color:#fff;
  text-align: center;
  line-height:3rem;
}
.gwbu:nth-child(2){
  background:#f03150;
}
</style>