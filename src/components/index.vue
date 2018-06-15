<template>
  <div class="indcontain">
    <div class="inputcon"><input class="topinput" placeholder="搜索想要的商品" /></div>
    <banner :imgurl='imgs'></banner>
    <div class="navls">
      <div class="nav">
        <div class="top">
          <img src="../assets/nav1.png" />
        </div>
        <div class="bot">优雅甜美</div>
      </div>
      <div class="nav">
        <div class="top">
          <img src="../assets/nav2.png" />
        </div>
        <div class="bot">运动休闲</div>
      </div>
      <div class="nav">
        <div class="top">
          <img src="../assets/nav3.png" />
        </div>
        <div class="bot">民族麻棉</div>
      </div>
      <div class="nav">
        <div class="top">
          <img src="../assets/nav4.png" />
        </div>
        <div class="bot">精选配饰</div>
      </div>
    </div>
    <div class="indlsnav">
      <div class="navs te">为你推荐</div>
      <div class="navs">最新商品</div>
      <div class="navs">最热商品</div>
    </div>
    <list-block></list-block>
    <bott-nav></bott-nav>
    
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
      imgs: ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3178468913,2213277503&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2625068960,3362247134&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3835488178,1644880090&fm=27&gp=0.jpg']
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
.indcontain{
  width:100%;
  height:auto;
  overflow:hidden;
  background:#fff;
  padding-top:2rem;
}
.inputcon{
  width:80%;
  height:auto;
  overflow:hidden;
  margin:auto;
  position: relative;
  margin-bottom:1rem;
}
.topinput{
  background:#f0f3fa;
  width:100%;
  height:3rem;
  padding-left:3rem;
  line-height:3rem;
  color:#95999c;
  border:0;
  font-size:1.2rem;
  outline: none;
}
.inputcon::after{
  content: url(../assets/search.png);
  position: absolute;
  left:1%;
  top:50%;
  transform: translateY(-50%) scale(.6);
}
.swiper-wrapper{
  width:100%;
  height:500px;
}
.navls{
  width:100%;
  height:auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  text-align: center;
}
.navls .nav{
  flex:1;
  margin:5px 10px;
}
.navls .nav .top,.navls .nav .top img{
  width:100%;
  height:auto;
}
.navls .nav .bot{
  width:100%;
  height:2rem;
  line-height:2rem;
}
.indlsnav{
  width:100%;
  height:auto;
  display:flex;
  flex-flow: row nowrap;
  justify-content: center;
  text-align: center;
  font-size:20px;
  margin:10px auto;
}
.indlsnav .navs{
  flex: 1;
  padding:10px 0;
  margin:auto 5px;
}
.indlsnav .navs.te{
  color:#fb295a;
  border-bottom:2px solid #fb295a;
}

</style>
