<template>
  <div class="for_movie">
    <div class="content">
      <div class="swiper">
        <div class="pic-content pic1"><img draggable="false" src="../assets/message/volcano.gif" alt=""></div>
        <div class="pic-content pic2"><img draggable="false" src="../assets/message/volcano.gif" alt=""></div>
        <div class="pic-content pic3"><img draggable="false" src="../assets/message/volcano.gif" alt=""></div>
        <div class="pic-content pic4"><img draggable="false" src="../assets/message/volcano.gif" alt=""></div>
        <div class="pic-content pic5"><img draggable="false" src="../assets/message/volcano.gif" alt=""></div>
        <div class="pic-content pic6"><img draggable="false" src="../assets/message/volcano.gif" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showimg:0,
    }
  },
  methods : {
    shuffling(){
      let rotateY = 0;
      let swiper = document.getElementsByClassName('swiper')[0]
      let content = document.getElementsByClassName('content')[0]
      let watchtimer
      let isdown = false
      let startX = 0
      let nowX = 0
      let timeX = new Date()
      let cleartimer
      function increase(){
        swiper.style.transform = `rotateY(${rotateY}deg)`
        if(rotateY != 360){
          rotateY += 0.2
        }else{
          rotateY = 0
        }
      }
      function increasecycle(){
        watchtimer = setTimeout(() => {
          increase();
          increasecycle()
        },20)
      }
      content.addEventListener('mouseover',function(){
        clearTimeout(watchtimer)
        clearTimeout(cleartimer)
      })
      content.addEventListener('mouseout',function(){
        cleartimer = setTimeout(() => {
          isdown = false
        },19)
        return increasecycle()
      })
      content.addEventListener('mousedown',function(e){
        isdown = true
        startX = e.clientX
        nowX = e.clientX
      })
      content.addEventListener('mousemove',function(e){
        if(isdown && new Date() - timeX > 20){
          nowX = e.clientX
          rotateY = rotateY + (nowX - startX)
          swiper.style.transform = `rotateY(${rotateY}deg)`
          startX = e.clientX
          timeX = new Date()
        }else{
          return
        }
      })
      content.addEventListener('mouseup',function(){
        isdown = false
      })
      return increasecycle()
    },
  },
  beforeCreate() {

  },
  created() {

  },
  beforeMount() {

  },
  mounted() {
    this.shuffling()
  },
  beforeUpdate() {

  },
  updated() {

  }
}
</script>

<style lang="scss" scope>
.for_movie{
  width: 100%;
  .content{
    width: 100vw;
    height: 200px;
    perspective: 800px;
    border-bottom: 1px black solid;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transform: rotateX(-6deg);
    .swiper{
      width: 150px;
      height: 100px;
      position: relative;
      transform-style: preserve-3d;
      transform: rotateX(0deg);
      transition: all 0.02s linear;
      .pic-content{
        width: 150px;
        height: 100px;
        position: absolute;
        img{
          width: 150px;
          height: 100px;
          -moz-user-select: none;
          -webkit-user-select: none;
          user-select: none;
        }
        img:hover{
          transform: scale(1.1,1.1);
        }
      }
      .pic1{
        transform: rotateY(0deg) translateZ(180px); 
      }
      .pic2{
        transform: rotateY(60deg) translateZ(180px); 
      }
      .pic3{
        transform: rotateY(120deg) translateZ(180px); 
      }
      .pic4{
        transform: rotateY(180deg) translateZ(180px); 
      }
      .pic5{
        transform: rotateY(240deg) translateZ(180px); 
      }
      .pic6{
        transform: rotateY(300deg) translateZ(180px); 
      }
    }
  }
}
</style>