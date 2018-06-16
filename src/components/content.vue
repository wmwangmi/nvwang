<template>
  <div class='bgdiv'>
    <banner :imgurl='imgs'></banner>
    <div class="tonglan">
      <div class="title">
        <div class="tt">
                                 时尚女装时尚女装时尚女装时尚女装时尚女装
        </div>
        <div class="tt hui">
                      销量：190
        <i class="icon-heart-empty"><img src="../assets/xin.png" /></i>
        </div>
      </div>
      <div class="title">
        <div class="price">
          <div class="left">
            $100 <span>$190</span>
          </div>
          <div class="right">免运费</div>
        </div>
      </div>
    </div>
    <div class="tonglan">
      <div class="title">
        <div class="tt">
                               规格：<span class="hui">颜色 、尺码</span>
            <i class="icon-angle-right"></i>
        </div>
      </div>
      <div class="title">
        <div class="price">
          <div class="center">
           <i class="icon-ok-circle"><img src="../assets/duigou.png" /></i>正品保障
          </div>
          <div class="center">
           <i class="icon-ok-circle"><img src="../assets/duigou.png" /></i>发货 & 售后
          </div>
          <div class="center">
            <i class="icon-ok-circle"><img src="../assets/duigou.png" /></i>七天退后
          </div>
        </div>
      </div>
      <div class="title">
        <div class="tt">
         <i class="jiang"><img src="../assets/jiang.png" /></i>该产品由雅莹供货及提供发货
        </div>
      </div>
    </div>
    <div class="tonglan">
      <div class="title">
        <div class="price">
          <div class="center conc sty">商品详情</div>
          <div class="center conc">给你推荐</div>
        </div>
      </div>
    </div>
    <div class="conimgdiv"></div>
    <list-block></list-block>
    <bott-nav :selnavfir="fir"></bott-nav>
    <div class="gwk" v-if="showgwk">
      <div class="gwkson">
        <div class="cha"></div>
        <div class="top">
          <div class="imgdiv">
            <img src="../assets/bigtu.jpg" />
          </div>
          <div class="wendiv">
            <div>$<big>200</big></div>
            <div>颜色/尺寸</div>
          </div>
        </div>
        <div class="tlgwk">
          <div class="ltop">颜色</div>
          <div class="ltop">
            <div class="sekuai sty">图片色 </div>
          </div>
        </div>
        <div class="tlgwk">
          <div class="ltop">尺寸</div>
          <div class="ltop">
            <div class="sekuai sty">s</div>
          </div>
        </div>
        <div class="tlgwk">
          <div class="ltop">
            <div class="shuwen">购买数量</div>
            <div class="shul">
              <div class="l">-</div>
              <div class="c">123</div>
              <div class="r">+</div>
            </div>
          </div>
        </div>
        <div class="gwkbutfa">
          <div class="gwkbut">加入购物车</div>
          <div class="gwkbut">立即购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '../tpl/banner.vue'
import listBlock from '../tpl/listblock.vue'
import bottNav from '../tpl/bottnav.vue'
export default {
  name: 'contenter',
  data () {
    return {
      imgs: ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3178468913,2213277503&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2625068960,3362247134&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3835488178,1644880090&fm=27&gp=0.jpg'],
      showgwk:false,
      fir:false
    }
  },
  mounted: function () {
  },
  components:{
    banner,
    listBlock,
    bottNav
  }
}
</script>

<style>
.bgdiv{
  width:100%;
  height:auto;
}
.tonglan{
  width:100%;
  height:auto;
  margin-bottom:1.5rem;
  overflow:hidden;
  background:#fff;
  padding:0 10px;
  box-sizing: border-box;
  border-top:1px solid #ebebeb;
  border-bottom:1px solid #ebebeb;
}
.tonglan:nth-child(1){
  border-top:0;
}
.title{
  font-size:1.2rem;
  color:#3c3c3c;
  border-bottom:1px solid #ebebeb;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.title .tt{
  width:100%;
  height:3rem;
  line-height:3rem;
  text-align: left;
  position: relative;
}
.title .tt.hui{
  color:#6c6c6c;
  position:relative;
}
.title .tt .hui{
  color:#6c6c6c;
}
.title .price{
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  height:3rem;
  line-height:3rem;
  text-align: left;
}
.title .price .left,.title .price .right,.title .price .center{
  flex:1;
  font-size:1.2rem;
}
.title .price .center{
  color:#464646;
}
.title .price .center .icon-ok-circle{
  color:#ec3450;
  margin-right:5px;
}
.title .price .center .icon-ok-circle img{
  width:1rem;
  height:auto;
}
.title .price .right{
  text-align: right;
  color:#888;
  font-size:.8rem;
}
.title .price .left{
  color:#e7284a;
}
.title .price .left span{
  color:#9c9c9c;
  font-size:.5rem;
  text-decoration: line-through;
}
.title:last-child{
  border-bottom:0;
}
.icon-heart img,.icon-heart-empty img{
  width:100%;
  height:auto;
}
.icon-heart, .icon-heart-empty, .icon-angle-right{
  width:1.2rem;
  height:auto;
  line-height:0;
  position:absolute;
  right:.2rem;
  top:50%;
  transform: translateY(-50%);
  color:#ec3450;
}
.icon-angle-right:before{
  color:#9c9c9c;
}
i{
  width:1rem;
  line-height:0;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  margin-right:5px;
}
i.jiang img{
  width:1rem;
  height:auto;
}
.price .center.conc{
  text-align: center;
  max-width:30%;
}
.price .center.conc.sty{
  border-bottom:2px solid #e7284a;
  color:#e7284a;
}
.conimgdiv{
  width:100%;
  height:auto;
  overflow: hidden;
}
.gwk{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  z-index: 1;
  background:rgba(0,0,0,0.6);
}
.gwkson{
  width:100%;
  height:auto;
  padding:0 20px;
  box-sizing: border-box;
  overflow: visible;
  background:#fff;
  position: fixed;
  bottom:0;
  left:0;
}
.gwkson .top{
  width:100%;
  height:auto;
  padding-bottom:1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  border-bottom:1px solid #eee;
}
.gwkson .top .imgdiv{
  width:5rem;
  height:auto;
  overflow:hidden;
  flex:2;
  margin-top:-60px;
}
.gwkson .top .imgdiv img{
  width:100%;
  height:auto;
  border:1px solid #eee;
  border-radius: 10px;
}
.gwkson .top .wendiv{
  flex:3;
  text-indent:1rem;
  text-align: left;
}
.gwkson .top .wendiv div:nth-child(1){
  color:#ef3250;
  font-size:1.5rem;
  line-height:3rem;
}
.gwkson .top .wendiv div:nth-child(2){
  color:#333;
  font-size:1rem;
}
.tlgwk{
  width:100%;
  height:auto;
  border-bottom:1px solid #eee;
}
.tlgwk .ltop{
  width:100%;
  height:3rem;
  font-size:1rem;
  color:#333;
  line-height:3rem;
  text-align: left;
  display: flex;
}
.tlgwk .ltop .shuwen{
  flex:2
}
.tlgwk .ltop .shul{
  flex:1;
  border:1px solid #b6b6b6;
  border-radius:2px;
  max-width:35%;
  height:2rem;
  line-height:2rem;
  color:#333;
  align-self: center;
}
.tlgwk .ltop .shul .l,.tlgwk .ltop .shul .r{
  width:25%;
  height:100%;
  text-align: center;
  float:left;
  box-sizing: border-box;
}
.tlgwk .ltop .shul .l{
  border-right:1px solid #b6b6b6;
}
.tlgwk .ltop .shul .r{
  border-left:1px solid #b6b6b6;
}
.tlgwk .ltop .shul .c{
  width:50%;
  height:100%;
  float:left;
  text-align: center;
  box-sizing: border-box;
}
.tlgwk .ltop:nth-child(2){
  line-height: initial;
}
.tlgwk:last-child{
  border-bottom:0;
}
.tlgwk .ltop .sekuai,.tlgwk .ltop .sekuai.sty{
  color:#333;
  background:#f3f2f8;
  height:2rem;
  line-height:2rem;
  padding:0 10px;
  border-radius:5px;
  font-size:.8rem;
  display: inline-block;
}
.tlgwk .ltop .sekuai.sty{
  color:#fff;
  background:#ef3250;
}
.cha{
  width:2rem;
  height:2rem;
  position: absolute;
  top:1rem;
  right:1rem;
}
.cha::before,.cha::after{
  content: ' ';
  width:2rem;
  height:2rem;
  border-top:2px solid #ccc;
  left:0;
  top:0;
  position: absolute;
  transform: rotate(45deg);
}
.cha::after{
  transform: rotate(-45deg);
  left:23px;
}
.gwkbut{
  width:50%;
  height:3rem;
  line-height:3rem;
  float:left;
  background:#f38495;
  text-align: center;
  color:#fff;
}
.gwkbutfa{
  width:100vw;
  margin-left:-20px;
}
.gwkbut:nth-child(2){
  background:#f03150;
}
</style>
