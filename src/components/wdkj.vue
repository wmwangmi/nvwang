<template>
  <div class="tongbg">
    <div class="tt">
      <div class="sty">我发起的</div>
      <div>我帮砍的</div>
    </div>
    <div class="listb">
      <div class="listson">
        <div class="left">
          <img src="../../dist/static/img/listimg.9f3bcf1.png">
        </div>
        <div class="right">
          <div class="top">【看完119】连衣裙显瘦连衣裙显瘦连衣裙显瘦连衣裙显瘦</div>
          <div class="stopbool">已结束</div>
          <div class="jgdetail">
            当前价格：<span>￥100</span><span>原价：￥169</span>
          </div>
        </div>
      </div>
      <div class="listson">
        <div class="left">
          <img src="../../dist/static/img/listimg.9f3bcf1.png">
        </div>
        <div class="right">
          <div class="top">【看完119】连衣裙显瘦连衣裙显瘦连衣裙显瘦连衣裙显瘦</div>
          <div class="stopbool">已结束</div>
          <div class="jgdetail">
            当前价格：<span>￥100</span><span>原价：￥169</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wdkj',
  data () {
    return {
    }
  },
  mounted: function () {
    
  },
  components:{
  }
}
</script>

<style scoped="scoped">
.tt{
  width:100%;
  height:3rem;
  line-height:3rem;
  background:#fff;
  display: flex;
  justify-content: center;
  margin-bottom:1rem;
}
.tt div{
  flex:1;
  text-align: center;
}
.tt div.sty{
  border-bottom:2px solid #ec1f51;
}
.listb{
  width:100%;
  height:auto;
  overflow: hidden;
}
.listson{
  width:100%;
  height:auto;
  padding:.5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  line-height: 0;
  border-bottom:1px solid #eee;
  background:#fff;
}
.listson .left{
  flex:1;
  max-width: 20%;
}
.listson .left img{
  width:100%;
  height:auto;
}
.listson .right{
  flex:3;
  height:auto;
  font-size:1rem;
  line-height:1.5rem;
  overflow: hidden;
  max-width: 80%;
  box-sizing: border-box;
}
.listson .right .top{
  width:100%;
  height:1.5rem;
  color:#333;
  text-align: left;
  padding-left:.5rem;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
}
.stopbool{
  width:100%;
  height:1.5rem;
  line-height:1.5rem;
  text-align: right;
  color:#ec0039;
}
.jgdetail{
  width:100%;
  height:1.5rem;
  line-height:1.5rem;
  padding-left:.5rem;
  box-sizing: border-box;
  text-align: left;
  color:#333;
  font-size:1rem;
}
.jgdetail span:nth-child(1){
  color:#ec0039;
}
.jgdetail span:nth-child(2){
  color:#cecece;
  text-decoration: line-through;
  padding-left:.2rem;
}
</style>