<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for='item in imgurl'><img :src="item"></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'contenter',
  data () {
    return {
    }
  },
  props: {
    imgurl: Array
  },
  mounted: function () {
    setTimeout(function () {
      new Swiper ('.swiper-container', {
        direction: 'horizontal',
        autoplay: 2000,
        loop: true,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }, 100)
  }
}
</script>

<style>
.swiper-container,.swiper-slide {
  width: 100%;
  height: auto;
  overflow:hidden;
}
.swiper-slide img{
  width:100%;
  height:auto;
}
.swiper-pagination{
  width:100%;
  height:2rem;
  line-height:2rem;
  position:absolute;
  bottom:0;
  left:0;
}
</style>