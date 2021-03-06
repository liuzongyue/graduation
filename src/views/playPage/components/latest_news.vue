<template>
  <div class="latest_news">
    <div class="pic_news">
      <div class="pic_list">
        <ul>
          <li v-for="(aItem,aIndex) in pic_Data" :key="aIndex" v-show="chance == aIndex">
            <img :src="aItem.pic_icon" alt="">
          </li>
        </ul>
        <ul>
          <li class="mouse" v-for="(aItem,aIndex) in pic_Data" :key="aIndex" lazy :style="{'font-size':chance == aIndex ? '18px' : '','color':chance == aIndex ? '#fff' : '','background':chance == aIndex ? 'rgba(14,112,236,0.3)' : ''}" @click="changepic(aIndex)">
            <span class="pic_desc">{{aItem.pic_desc}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chance:0,
      pic_Data:[{
        pic_icon:require('../../../assets/message/register.jpg'),
        pic_desc:"童稚只是外表，上了球场，我（curry）就是老大"
      },{
        pic_icon:require('./../../../assets/message/dinosaurmone.gif'),
        pic_desc:"童稚只是外表，上了球场，我（curry）就是老大"
      },{
        pic_icon:require('./../../../assets/message/home_movie.gif'),
        pic_desc:"童稚只是外表，上了球场，我（curry）就是老大"
      },{
        pic_icon:require('./../../../assets/message/manmove.gif'),
        pic_desc:"童稚只是外表，上了球场，我（curry）就是老大"
      },{
        pic_icon:require('./../../../assets/message/volcano.gif'),
        pic_desc:"童稚只是外表，上了球场，我（curry）就是老大"
      },]
    }
  },
  methods :{
    changepic(val){
      this.chance = val
    },
    changeChance(){
      let that = this
      let cycletimer
      function piccycle(){
        if(that.chance != 4){
          that.chance++
        }else{
          that.chance = 0
        }
      }
      function tocycle(){
        cycletimer = setTimeout(() => {
          piccycle(),
          tocycle()
        },2000)
      }
      let domouse = document.getElementsByClassName('mouse')
      for(let i of domouse){
        i.addEventListener('mousedown',function(){
          clearTimeout(cycletimer)
          setTimeout(() => {
            return tocycle()
          },5000)
        })
      }
      return tocycle()
    }
  },
  mounted() {
    this.changeChance()
  }

}
</script>

<style lang="scss" scope>
  .latest_news{
    width: 100%;
    display: flex;
    justify-content: center;
    .pic_news{
      width: 1400px;
      height: 400px;
      .pic_list{
        position: relative;
        &>ul:nth-child(1){
          list-style: none;
          width: 1400px;
          height: 400px;
          padding: 0;
          li{
            width: 1400px;
            height: 400px;
            img{
              width: 1400px;
              height: 400px;
            }
          }
        }
        &>ul:nth-child(2){
          position: absolute;
          top: 0%;
          left: 60%;
          list-style: none;
          width: 400px;
          height: 400px;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: space-around;
          background: rgba(0, 0, 0, 0.55);
          li{
            width: 100%;
            height: 20%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            span{
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>