<template>
  <div class="gwbg">
    <div class="gwdiv">
      <div class="gwtt">
        <img src="../assets/gwicon.png" />
                     女王的新款
      </div>
      <div class="gwtlan">
        <div class="left">
          <img src="../assets/logo.png">
        </div>
        <div class="right">
          <div class="top">
            <div class="tt">女王的新款女王的新款女王的新款</div>
            <div class="del">删除</div>
          </div>
          <div class="peizhi">颜色：蓝色   尺码：L</div>
          <div class="sele">
            <div class="price">￥100</div>
            <div class="num">
              <div>-</div>
              <div>1</div>
              <div>+</div>
            </div>
          </div>
        </div>
      </div>
      <div class="gwtlan">
        <div class="left">
          <img src="../assets/logo.png">
        </div>
        <div class="right">
          <div class="top">
            <div class="tt">女王的新款女王的新款女王的新款</div>
            <div class="del">删除</div>
          </div>
          <div class="peizhi">颜色：蓝色   尺码：L</div>
          <div class="sele">
            <div class="price">￥100</div>
            <div class="num">
              <div>-</div>
              <div>1</div>
              <div>+</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div class="gwbotnav">
      <div class="l sel"><img src="../assets/duigou.png">全选</div>
      <div class="c">合计：<span>￥100</span></div>
      <div class="r">结算</div>
    </div>
    <bott-nav :selnavfir="fir"></bott-nav>
  </div>
</template>

<script>
import bottNav from '../tpl/bottnav.vue'
export default {
  name: 'gwc',
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
.gwbg{
  width:100%;
  min-height:100vh;
  background:#f5f5f5;
  overflow: hidden;
}
.gwbg .gwdiv{
  width:100%;
  height:auto;
  overflow: hidden;
  background:#fff;
  box-sizing: border-box;
  padding:0 15px;
  margin-top:2rem;
}
.gwtt{
  width:100%;
  height:4rem;
  line-height:4rem;
  border-bottom:1px solid #eee;
  text-align: left;
  font-size:1.2rem;
}
.gwtt img{
  width:1.2rem;
  height:auto;
  vertical-align: middle;
  margin-right:1rem;
}
.gwtlan{
  width:100%;
  height:auto;
  overflow: hidden;
  padding:.5rem 0;
  border-bottom:1px solid #eee;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
}
.gwtlan .left{
  flex:2;
  font-size:0;
  position: relative;
}
.gwtlan .left::after{
  position:absolute;
  top:0;
  left:0;
  content: '';
  width:25px;
  height:25px;
  background:#ef3250;
  border-bottom-right-radius: 100%;
}
.gwtlan .left::before{
  position:absolute;
  top:0;
  left:5px;
  content: '';
  width:7px;
  height:12px;
  border-right:2px solid #fff;
  border-bottom:2px solid #fff;
  transform: rotate(45deg);
  z-index: 1;
}
.gwtlan .left img{
  width:100%;
  height:100%;
  object-fit: contain;
  object-position: center;
}
.gwtlan .right{
  flex:5;
  padding-left:10px;
  box-sizing: border-box;
  max-width: 70%;
}
.gwtlan .right .top{
  width:100%;
  height:auto;
  overflow:hidden;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  font-size:1.1rem;
}
.gwtlan .right .top .tt{
  flex:4;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color:#333;
  font-size:1rem;
}
.gwtlan .right .top .del{
  flex:1;
  color:#9b9a9a;
  font-size:1rem;
}
.gwtlan .right .peizhi{
  width:100%;
  height:auto;
  overflow:hidden;
  color:#999;
  font-size:1rem;
  text-align: left;
}
.gwtlan .right .sele{
  width:100%;
  height:auto;
  overflow:hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top:1rem;
}
.gwtlan .right .sele .price{
  flex:4;
  color:#ef3250;
  font-size:1.1rem;
  text-align: left;
  align-self: center;
}
.gwtlan .right .sele .num{
  flex:5;
  color:#333;
  font-size:1rem;
  text-align: center;
  height:auto;
  align-self: center;
}
.gwtlan .right .sele .num div{
  width:30%;
  height:2rem;
  line-height:2rem;
  float:left;
  margin-left:1%;
  background:#f5f5f5;
  font-size:1.2rem;
}
.gwtlan .right .sele .num div:nth-child(1),.gwtlan .right .sele .num div:nth-child(2){
  color:#9f9da8;
}
.gwbotnav{
  width:100%;
  height:3rem;
  line-height:3rem;
  border-top:1px solid #eee;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  position: fixed;
  left:0;
  bottom:3rem;
  background:#fff
}
.gwbotnav .l,.gwbotnav .c,.gwbotnav .r{
  flex:1;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  position: relative;
}
.gwbotnav .c span{
  color:#ef3250;
}
.gwbotnav .l::before{
  content: ' ';
  width:1.1rem;
  height:1.1rem;
  border:1px solid #eee;
  border-radius:100%;
  align-self:center;
  margin-right:5px;
}
.gwbotnav .l img{
  display: none;
}
.gwbotnav .l.sel::before{
  display: none;
}
.gwbotnav .l.sel img{
  width:1.2rem;
  height:1.2rem;
  display: block;
  vertical-align: middle;
  align-self: center;
  margin-right:5px;
}
.gwbotnav .r{
  background:#ef3250;
  color:#fff;
}
</style>