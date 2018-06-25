<template>
<div class="tongbg">
  <div class="noaddr">
    <img src="../assets/addr.png" />
    <div class="wen">您还没有收货地址奥</div>
  </div>
  <div class="addrk" v-show="addrkshow">
    <div class="inpuk">
      <div>
        <div class="left">收货人姓名</div>
        <div class="right"><input placeholder="请输入真实姓名"/></div>
      </div>
      <div>
        <div class="left">手机号码</div>
        <div class="right"><input placeholder="请输入收货人手机号"/></div>
      </div>
      <div>
        <div class="left">选择地址</div>
        <div class="right addarrow" @click="showaddr"><input readonly="readonly" v-model="choseaddr" placeholder="请选择收货人所在地址"/></div>
      </div>
      <div>
        <div class="left">详细地址</div>
        <div class="right"><textarea placeholder="请输入详细收货地址"></textarea></div>
      </div>
      <div>
        <div class="but" @click="addrkshowfn2">取消</div>
        <div class="but">保存</div>
      </div>
    </div>
  </div>
  <div class="wddzbot">
    <a @click="getwxaddr">
      <img src="../assets/weixicon.jpg" />使用微信地址
    </a>
    <a @click="addrkshowfn">
      <img src="../assets/weixicon2.jpg" />添加收货地址
    </a>
  </div>
  <div class="sanjild" v-show="showld">
    <div class="gbi" @click="qddz">确定</div>
    <div class="caikuang"></div>
    <div class="ulk" ref="guntongk">
      <div class="topjb"></div>
      <ul class="shublock" ref='guntong'>
        <li v-for="val1,key1,ind1 in pca" :style="setitemdeg(ind1)" :index='ind1'>{{key1}}</li>
      </ul>
      <div class="botjb"></div>
    </div>
    <div class="ulk" ref="guntongk2">
      <div class="topjb"></div>
      <ul class="shublock" ref='guntong2'>
        <li v-for="val2,key2,ind2 in pca[key1]" :style="setitemdeg(ind2)" :index='ind2'>{{key2}}</li>
      </ul>
      <div class="botjb"></div>
    </div>
    <div class="ulk" ref="guntongk3">
      <div class="topjb"></div>
      <ul class="shublock" ref='guntong3'>
        <li v-for="val3,ind3 in pca[key1][key2]" :style="setitemdeg(ind3)" :index='ind3'>{{val3}}</li>
      </ul>
      <div class="botjb"></div>
    </div>
  </div>
</div>
</template>

<script>
import pca from '../../static/addr/pca.json'
export default {
  name: 'wddz',
  data () {
    return {
      showld:0,
      addrkshow:false, 
      choseaddr:'',
      pca:pca,
      key1:'北京市',
      key2:'市辖区',
      key3:'东城区',
      upd:{startY:0,endY:0,startT:0,endT:0,transY:0,enddeg:0},
      upd2:{startY:0,endY:0,startT:0,endT:0,transY:0,enddeg:0},
      upd3:{startY:0,endY:0,startT:0,endT:0,transY:0,enddeg:0}
    }
  },
  mounted: function () {
  },
  watch: {
    key1: function (v,o){
      this.key2=Object.keys(pca[v])[0];
    },
    key2: function (v,o){
      this.key3=this.pca[this.key1][this.key2][0]
    },
    key3: function (v,o){
      
    }
  },
  methods:{
    getwxaddr: function (){
      
    },
    addrkshowfn2: function (){
      this.addrkshow=false;
    },
    addrkshowfn: function (){
      this.addrkshow=true;
    },
    showaddr: function (){
      this.showld=true;
      if(this.showld){
        this.$refs.guntongk.addEventListener('touchstart',this.toustar)
        this.$refs.guntongk.addEventListener('touchmove',this.toumove)
        this.$refs.guntongk.addEventListener('touchend',this.touend)
        this.$refs.guntongk2.addEventListener('touchstart',this.toustar2)
        this.$refs.guntongk2.addEventListener('touchmove',this.toumove2)
        this.$refs.guntongk2.addEventListener('touchend',this.touend2)
        this.$refs.guntongk3.addEventListener('touchstart',this.toustar3)
        this.$refs.guntongk3.addEventListener('touchmove',this.toumove3)
        this.$refs.guntongk3.addEventListener('touchend',this.touend3)
      }else{
        this.$refs.guntongk.removeEventListener('touchstart',this.toustar)
        this.$refs.guntongk.removeEventListener('touchmove',this.toumove)
        this.$refs.guntongk.removeEventListener('touchend',this.touend)
        this.$refs.guntongk2.removeEventListener('touchstart',this.toustar2)
        this.$refs.guntongk2.removeEventListener('touchmove',this.toumove2)
        this.$refs.guntongk2.removeEventListener('touchend',this.touend2)
        this.$refs.guntongk3.removeEventListener('touchstart',this.toustar3)
        this.$refs.guntongk3.removeEventListener('touchmove',this.toumove3)
        this.$refs.guntongk3.removeEventListener('touchend',this.touend3)
      }
    },
    qddz: function (){
      this.showld=false;
      console.log(this.key1,this.key2,this.key3,'==============');
      this.choseaddr=this.key1+','+this.key2+','+this.key3
    },
    setDeg: function (deg,type,time=2000){
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
        aind=parseInt(deg/10);
        sval=Object.keys(this.pca)[aind];//获取省的名字
        this.key1=sval;
//      console.log(Object.keys(this.pca)[aind],aind);
        this.$refs.guntong.style.webkitTransition=`transform ${time}ms cubic-bezier(.19,.1,.2,1)`
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
      this.$refs.guntong2.style.webkitTransform=`rotate3d(1,0,0,0deg)`
      this.$refs.guntong3.style.webkitTransform=`rotate3d(1,0,0,0deg)`
      this.key2=Object.keys(pca[this.key1])[0];
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
        time=1000+a*time*10
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
      
    },
    setDeg2: function (deg,type,time=2000){
      deg=deg+this.upd2.enddeg;
      if(deg>(Object.keys(this.pca[this.key1]).length-1)*10){//计算省的个数及总度数
        deg=(Object.keys(this.pca[this.key1]).length-1)*10;
        this.upd2.enddeg=deg;
      }else if(deg < 0){
        deg=0;
        this.upd2.enddeg=deg;
      }
      let aind,sval;
      if(type=='end'){
        //获取市的序列
        aind=parseInt(deg/10);
        sval=Object.keys(this.pca[this.key1])[aind];//获取市的名字
        this.key2=sval;
//      console.log(sval,aind);
        this.$refs.guntong2.style.webkitTransition=`transform ${time}ms cubic-bezier(.19,.1,.2,1)`
        this.$refs.guntong2.style.webkitTransform=`rotate3d(1,0,0,${deg}deg)`
      }
      this.$refs.guntong2.style.webkitTransition=''
      this.$refs.guntong2.style.webkitTransform=`rotate3d(1,0,0,${deg}deg)`
    },
    setitemdeg2: function (index){
      return {
        transform:`rotate3d(1,0,0,${(-index*10)%360}deg) translate3d(0,0,200px)`
      }
    },
    toustar2: function (event){
      let fger=event.changedTouches[0];
      this.upd2.startY=fger.pageY;
      this.upd2.startT=event.timestamp || Date.now();
      this.$refs.guntong3.style.webkitTransform=`rotate3d(1,0,0,0deg)`
      event.preventDefault();
//    console.log(fger);
    },
    toumove2: function (event){
      let fger=event.changedTouches[0];
      this.upd2.lastY=fger.pageY;
      this.upd2.lastT=event.timestamp || Date.now();
      let move=this.upd2.lastY-this.upd2.startY;
      this.setSty2(move);
      event.preventDefault();
    },
    touend2: function (event){
      let fger=event.changedTouches[0];
      this.upd2.lastY=fger.pageY;
      this.upd2.lastT=event.timestamp || Date.now();
      let move=this.upd2.lastY-this.upd2.startY;
      let time=this.upd2.lastT-this.upd2.startT;
      let v=move/time;
      let a=1.8;
      if(time<=300){
        move=v*a*time;
        time=1000+a*time*10
        this.setSty2(move,'end',time);
      }else{
        this.setSty2(move,'end');
      }
//    alert(JSON.stringify(Object.keys(this.pca).length));
      event.preventDefault();
    },
    setSty2: function (move,type,time){
      let shei=34;
      let sdeg=10;
      let perdeg=sdeg/shei;
      let getmove=move;
      let updeg=-perdeg*Math.round(getmove/shei)*shei;
      let updeg2=-perdeg*getmove;
      let updegani=Math.round(updeg2/sdeg)*sdeg;
      if(type=='end'){
        this.setDeg2(updegani,type,time);
        this.upd2.enddeg+=updeg;
      }else{
        this.setDeg2(updeg2);
      }
//    console.log(updeg);
      
    },
    setDeg3: function (deg,type,time=2000){
      deg=deg+this.upd3.enddeg;
      if(deg>(this.pca[this.key1][this.key2].length-1)*10){//计算省的个数及总度数
        deg=(this.pca[this.key1][this.key2].length-1)*10;
        this.upd3.enddeg=deg;
      }else if(deg < 0){
        deg=0;
        this.upd3.enddeg=deg;
      }
//    console.log(deg);
      let aind,sval;
      if(type=='end'){
        //获取区的序列
        aind=parseInt(deg/10);
        sval=this.pca[this.key1][this.key2][aind];//获取区的名字
        this.key3=sval;
//      console.log(sval,aind);
        this.$refs.guntong3.style.webkitTransition=`transform ${time}ms cubic-bezier(.19,.1,.2,1)`
        this.$refs.guntong3.style.webkitTransform=`rotate3d(1,0,0,${deg}deg)`
      }
      this.$refs.guntong3.style.webkitTransition=''
      this.$refs.guntong3.style.webkitTransform=`rotate3d(1,0,0,${deg}deg)`
    },
    setitemdeg3: function (index){
      return {
        transform:`rotate3d(1,0,0,${(-index*10)%360}deg) translate3d(0,0,200px)`
      }
    },
    toustar3: function (event){
      let fger=event.changedTouches[0];
      this.upd3.startY=fger.pageY;
      this.upd3.startT=event.timestamp || Date.now();
      event.preventDefault();
//    console.log(fger);
    },
    toumove3: function (event){
      let fger=event.changedTouches[0];
      this.upd3.lastY=fger.pageY;
      this.upd3.lastT=event.timestamp || Date.now();
      let move=this.upd3.lastY-this.upd3.startY;
      this.setSty3(move);
      event.preventDefault();
    },
    touend3: function (event){
      let fger=event.changedTouches[0];
      this.upd3.lastY=fger.pageY;
      this.upd3.lastT=event.timestamp || Date.now();
      let move=this.upd3.lastY-this.upd3.startY;
      let time=this.upd3.lastT-this.upd3.startT;
      let v=move/time;
      let a=1.8;
      if(time<=300){
        move=v*a*time;
        time=1000+a*time*10
        this.setSty3(move,'end',time);
      }else{
        this.setSty3(move,'end');
      }
//    alert(JSON.stringify(Object.keys(this.pca).length));
      event.preventDefault();
    },
    setSty3: function (move,type,time){
      let shei=34;
      let sdeg=10;
      let perdeg=sdeg/shei;
      let getmove=move;
      let updeg=-perdeg*Math.round(getmove/shei)*shei;
      let updeg2=-perdeg*getmove;
      let updegani=Math.round(updeg2/sdeg)*sdeg;
      if(type=='end'){
        this.setDeg3(updegani,type,time);
        this.upd3.enddeg+=updeg;
      }else{
        this.setDeg3(updeg2);
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
  overflow:visible;
  position: fixed;
  z-index: 1;
  left:0;
  bottom:0;
  background:#fff;
  display: flex;
  justify-content: center;
}
.sanjild .gbi{
  width:100%;
  height:3rem;
  font-size:1rem;
  line-height:3rem;
  padding:0 1rem;
  background:#fff;
  box-sizing: border-box;
  text-align: right;
  color:#f0445f;
  position: absolute;
  top:-3rem;
  left:0;
}
.ulk{
  width:100%;
  height:100%;
  overflow:hidden;
  align-self: center;
  position: relative;
  display: flex;
}
.ulk .topjb,.ulk .botjb{
  width:100%;
  height:5rem;
  position:absolute;
  top:0;
  left:0;
  z-index:1;
  background-image: linear-gradient(rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}
.ulk .botjb{
  top:auto;
  bottom:0;
  background-image: linear-gradient(rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
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
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
.addrk{
  width:100%;
  height:100vh;
  position:fixed;
  font-size:1.2rem;
  top:0;
  left:0;
  background:rgba(123,123,123,.6);
}
.addrk .inpuk{
  width:90%;
  height:auto;
  overflow:hidden;
  background:#fff;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
.addrk .inpuk .left, .addrk .inpuk .right{
  width:35%;
  height:3rem;
  line-height:3rem;
  text-align: left;
  padding-left:.5rem;
  box-sizing: border-box;
  float: left;
  color:#333;
  border-bottom:1px solid #eee;
}
.addrk .inpuk .right{
  width:65%;
  overflow: hidden;
  position: relative;
}
.addrk .inpuk .right.addarrow::after{
  content: '';
  width:.5rem;
  height:.5rem;
  border-top:2px solid #ef3250;
  border-right:2px solid #ef3250;
  position: absolute;
  right:5%;
  top:50%;
  transform: rotate(45deg) translateY(-50%);
}
.addrk .inpuk .right input,.addrk .inpuk .right textarea{
  width:100%;
  height:100%;
  border:0;
  font-size:1.1rem;
  outline: none;
  color:#666;
  font-family: "微软雅黑";
}
.addrk .inpuk div:nth-child(3) .right input{
  width:90%;
}
.addrk .inpuk .right textarea{
  margin-top:.7rem;
  height:9rem;
}
.addrk .inpuk .right input:input-placeholder{
  color:#eee;
}
.addrk .inpuk .but{
  width:50%;
  height:3rem;
  line-height:3rem;
  background:#d7d7d7;
  color:#fff;
  text-align: center;
  font-size:1.2rem;
  float:left;
}
.addrk .inpuk .but:nth-child(2){
  background:#666;
}
.addrk .inpuk div:nth-child(4) .left{
  border:0;
}
.addrk .inpuk div:nth-child(4) .right{
  height:10rem;
}
</style>