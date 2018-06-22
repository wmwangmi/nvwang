<template>
  <div>
    <div class="botnav" v-if="selnavfir">
      <div class="navb">
        <router-link :to="{ name: 'index', params: { id: 123 }}">
          <img src="../assets/navb1.png" />
          <span>首页</span>
        </router-link>
      </div>
      <div class="navb">
        <router-link :to="{ name: 'gwc', params: { id: 123 }}">
          <img src="../assets/navb1.png" /><div class="fubiao">1</div>
          <span>购物车</span>
        </router-link>
      </div>
      <div class="navb">
        <router-link :to="{ name: 'wd', params: { id: 123 }}">
          <img src="../assets/navb1.png" />
          <span>我的</span>
        </router-link>
      </div>
    </div>
    <div class="botnav" v-if="!selnavfir">
      <div class="navb">
        <router-link :to="{ name: 'gwc', params: { id: 123 }}">
          <img class="s" src="../assets/navb1.png" />
          <span>首页</span>
        </router-link>
      </div>
      <div class="navb s">
        <router-link :to="{ name: 'gwc', params: { id: 123 }}">
          <img class="s" src="../assets/navb1.png" />
          <span>购物车</span>
        </router-link>
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
  props: {
    selnavfir: Boolean
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
  padding-top:2px;
  position: relative;
}
.botnav .navb .fubiao{
  width:10px;
  height:10px;
  background:#ef3250;
  border-radius:100%;
  text-align: center;
  line-height:10px;
  padding:3px;
  color:#fff;
  position: absolute;
  left:59%;
  top:15%;
  transform: translate(-50%,-50%);
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
.botnav .gwbu:nth-child(4){
  background:#ef3250;
}
</style>