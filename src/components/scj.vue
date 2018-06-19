<template>
  <div class="tongbg">
    <div class="listb">
      <div class="listson">
        <div class="left">
          <img src="../../dist/static/img/listimg.9f3bcf1.png">
        </div>
        <div class="right">
          <div class="top">【看完119】连衣裙显瘦连衣裙显瘦连衣裙显瘦连衣裙显瘦</div>
          <div class="pricediv">
            <div class="left">￥100</div>
            <div class="right">删除</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scj',
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
.pricediv{
  width:100%;
  height:auto;
  padding-left:.5rem;
  box-sizing: border-box;
  text-align: left;
  color:#ef3250;
  font-size:1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size:1rem;
  margin-top:.5rem;
}
.pricediv .left{
  flex:1;
}
.pricediv .right{
  flex:1;
  max-width:25%;
  height:2rem;
  line-height:2rem;
  border:1px solid #ef3250;
  color:#ef3250;
  text-align: center;
  overflow:visible;
  border-radius:5px;
  position: relative;
  z-index: 0;
}
.pricediv .right::before,.pricediv .right::after{
  position: absolute;
  width:5px;
  height:5px;
  background:#fff;
  content: '';
  z-index: 1;
}
.pricediv .right::before{
  top:-5px;
  left:20px;
}
.pricediv .right::after{
  bottom:-2px;
  right:20px;
}
</style>