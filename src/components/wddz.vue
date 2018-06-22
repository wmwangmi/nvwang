<template>
<div class="tongbg">
  <div class="noaddr">
    <img src="../assets/addr.png" />
    <div class="wen">您还没有收货地址奥</div>
  </div>
  <div class="wddzbot">
    <a @click="getwxaddr">
      <img src="../assets/weixicon.jpg" />使用微信地址
    </a>
    <a @click="gettjaddr">
      <img src="../assets/weixicon2.jpg" />添加收货地址
    </a>
  </div>
  <div class="sanjild">
    <div class="caikuang"></div>
    <div class="ulk" ref="guntongk">
      <ul class="shublock" ref='guntong'>
        <li v-for="val,key,ind in pca" :style="setitemdeg(ind)" :index='ind'>{{key}}</li>
      </ul>
    </div>
    <ul class="shublock" ref='shi'>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
    <ul class="shublock" ref='qu'>
      <li>7</li>
      <li>8</li>
      <li>9</li>
    </ul>
  </div>
</div>
</template>

<script>
import pca from '../../static/addr/pca.json'
export default {
  name: 'wddz',
  data () {
    return {
      pca:pca,
      sheng:[1,2,3,4,5,6,7,8,9,0],
      upd:{startY:0,endY:0,startT:0,endT:0,transY:0,enddeg:0}
    }
  },
  mounted: function () {
    this.$refs.guntongk.addEventListener('touchstart',this.toustar)
    this.$refs.guntongk.addEventListener('touchmove',this.toumove)
    this.$refs.guntongk.addEventListener('touchend',this.touend)
  },
  methods:{
    getwxaddr: function (){
      
    },
    gettjaddr: function (){
      
    },
    setDeg: function (deg,type,time=1000){
      deg=deg+this.upd.enddeg;
      if(deg>(Object.keys(this.pca).length-1)*10){//计算省的个数及总度数
        deg=(Object.keys(this.pca).length-1)*10;
        this.upd.enddeg=deg;
      }else if(deg < 0){
        deg=0;
        this.upd.enddeg=deg;
      }
      let aind,sval;
      if(type=='end'){
        //获取省的序列
        aind=deg/10;
        sval=Object.keys(this.pca)[aind];//获取省的名字
        console.log(Object.keys(this.pca)[aind]);
        this.$refs.guntong.style.webkitTransition=`transform ${time}ms cubic-bezier(0.19,1,.2,1)`
        this.$refs.guntong.style.webkitTransform=`rotate3d(1,0,0,${deg}deg)`
      }
      this.$refs.guntong.style.webkitTransition=''
      this.$refs.guntong.style.webkitTransform=`rotate3d(1,0,0,${deg}deg)`
    },
    setitemdeg: function (index){
      return {
        transform:`rotate3d(1,0,0,${(-index*10)%360}deg) translate3d(0,0,200px)`
      }
    },
    toustar: function (event){
      let fger=event.changedTouches[0];
      this.upd.startY=fger.pageY;
      this.upd.startT=event.timestamp || Date.now();
      event.preventDefault();
//    console.log(fger);
    },
    toumove: function (event){
      let fger=event.changedTouches[0];
      this.upd.lastY=fger.pageY;
      this.upd.lastT=event.timestamp || Date.now();
      let move=this.upd.lastY-this.upd.startY;
      this.setSty(move);
      event.preventDefault();
    },
    touend: function (event){
      let fger=event.changedTouches[0];
      this.upd.lastY=fger.pageY;
      this.upd.lastT=event.timestamp || Date.now();
      let move=this.upd.lastY-this.upd.startY;
      let time=this.upd.lastT-this.upd.startT;
      let v=move/time;
      let a=1.8;
      if(time<=300){
        move=v*a*time;
        time=1000+a*time
        this.setSty(move,'end',time);
      }else{
        this.setSty(move,'end');
      }
//    alert(JSON.stringify(Object.keys(this.pca).length));
      event.preventDefault();
    },
    setSty: function (move,type,time){
      let shei=34;
      let sdeg=10;
      let perdeg=sdeg/shei;
      let getmove=move;
      let updeg=-perdeg*Math.round(getmove/shei)*shei;
      let updeg2=-perdeg*getmove;
      let updegani=Math.round(updeg2/sdeg)*sdeg;
      if(type=='end'){
        this.setDeg(updegani,type,time);
        this.upd.enddeg+=updeg;
      }else{
        this.setDeg(updeg2);
      }
//    console.log(updeg);
      
    }
  },
  components:{
  }
}
</script>

<style>
.noaddr{
  width:100%;
  height:auto;
  overflow:hidden;
  position: fixed;
  left:50%;
  top:30%;
  transform: translate(-50%,-50%);
  text-align: center;
}
.noaddr img{
  width:40%;
  height:auto;
}
.noaddr .wen{
  width:100%;
  height:auto;
  font-size:1rem;
  color:#888;
  text-align: center;
  margin:5px auto;
}
.wddzbot{
  width:100%;
  height:3rem;
  line-height:3rem;
  text-align: center;
  display: flex;
  position: fixed;
  left:0;
  bottom:0;
}
.wddzbot a{
  display: inline-block;
  flex: 1;
  text-align: center;
  color:#fff;
}
.wddzbot a:nth-child(1){
  background:#08c303;
}
.wddzbot a:nth-child(2){
  background:#ef3250;
}
.wddzbot a img{
  width:2rem;
  height:auto;
  vertical-align: middle;
  margin-right:5px;
}
.wddzbot a:nth-child(2) img{
  width:1.5rem;
}
.sanjild{
  width:100%;
  height:12rem;
  overflow:hidden;
  position: fixed;
  z-index: 1;
  left:0;
  bottom:0;
  background:#fff;
  display: flex;
  justify-content: center;
}
.ulk{
  width:100%;
  height:100%;
  overflow:visible;
  align-self: center;
  display: flex;
}
.sanjild .shublock{
  width:100%;
  height:34px;
  align-self: center;
  padding:0;
  margin:0;
  list-style: none;
  transform-style: preserve-3d;
}
.sanjild .shublock li{
  width:100%;
  height:34px;
  line-height:34px;
  position:absolute;
  left:0;top:0;
  font-size:1rem;
  transform: rotate3d(1,0,0,20deg) translate3d(0,0,0);
  backface-visibility: hidden;
}
.sanjild .caikuang{
  width:100%;
  height:100%;
  line-height:34px;
  position: absolute;
  left:0;
  top:0;
  z-index:-1;
}
.sanjild .caikuang::after{
  content:'';
  width:100%;
  height:34px;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  border-top:1px solid #EDEDED;
  border-bottom:1px solid #EDEDED;
  z-index:1;
}
</style>