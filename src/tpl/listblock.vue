<template>
  <div class="indexlist">
    <div class="loerf">
      <router-link :to="{ name: go, params: { id: num }}">
        <div class="loer">
          <img src="../assets/listimg.png" />
          <span>夏装新款两件套</span>
          <div class="price">
            <span>￥100</span>
            <s>￥900</s>
          </div>
        </div>
      </router-link>
    </div>
    <div class="loerf">
      <router-link :to="{ name: 'contenter', params: { id: 123 }}">
        <div class="loer">
          <img src="../assets/listimg.png" />
          <span>夏装新款两件套</span>
          <div class="price">
            <span>￥100</span>
            <s>￥900</s>
          </div>
        </div>
      </router-link>
    </div>
    <div class="loerf">
      <router-link :to="{ name: 'contenter', params: { id: 123 }}">
        <div class="loer">
          <img src="../assets/listimg.png" />
          <span>夏装新款两件套</span>
          <div class="price">
            <span>￥100</span>
            <s>￥900</s>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      go:'contenter',
      num:1234
    }
  },
  props: {
    listblokdd: Array
  }
}
</script>

<style>
.indexlist{
  width:100%;
  height:auto;
  margin-bottom:4rem;
  overflow:hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background:#f5f5f5;
}
.indexlist .loerf{
  flex:1;
  max-width:49%;
  min-width:45%;
  overflow: hidden;
  background:#f5f5f5;
  align-self: flex-start;
  box-sizing: border-box;
}
.indexlist .loerf:nth-child(2n-1){
  padding-right:5px;
}
.indexlist .loerf:nth-child(2n){
  padding-left:5px;
}
.indexlist .loer{
  overflow: hidden;
  margin-bottom:10px;
  background:#fff;
  padding-bottom:5px;
}
.indexlist .loer img{
  width:100%;
  height:auto;
}
.indexlist .loer>span{
  width:100%;
  height:2rem;
  line-height: 2rem;
  font-size:1rem;
  display: inline-block;
  text-align: left;
  padding-left:5px;
  box-sizing: border-box;
}
.indexlist .loer .price{
  text-align: left;
  padding-left: 5px;
}
.indexlist .loer .price span:nth-child(1){
  font-size:18px;
  color:#fb295a;
}
.indexlist .loer .price span:nth-child(2){
  font-size:14px;
  color:#a4a4a4;
}
</style>