<template>
  <div class="news_movies">
    <h3>最新视频</h3>
    <div class="category">
      <ul>
        <li v-for="(Item,Index) in language" :key="Index" @click="chooselang(Item)" :style="{'color':chooseYu == Item ? 'red' : '','font-size':chooseYu == Item ? '24px' : '','cursor':'pointer'}">{{Item}}</li>
      </ul>
      <div class="news_video">
        <div class="video_detile" v-for="(aItem,aIndex) in videoData" :key="aIndex">
          <img @click="toseevideo" :src="aItem.icon" alt="">
          <span>专注于学习</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      chooseYu:"C语言",
      videoData:[{
        icon:require('../../../assets/message/manmove.gif')
      },{
        icon:require('../../../assets/message/manmove.gif')
      },{
        icon:require('../../../assets/message/manmove.gif')
      },{
        icon:require('../../../assets/message/manmove.gif')
      },{
        icon:require('../../../assets/message/manmove.gif')
      }],
      language:['C语言','Java','Python','Js','Node','GoLang']
    }
  },
  methods : {
    chooselang(Item){
      this.chooseYu = Item
    },
    toseevideo(){
      this.$router.push({
        path:'/seevideo/index'
      })
    },
  }
}
</script>

<style lang="scss" scope>
  .news_movies{
    width: 100%;
    padding-bottom: 50px;
    border-bottom: 2px solid rgb(161, 121, 10);
    margin-bottom: 50px;
    h3{
      width: 100%;
      text-align: center;
      margin: 20px auto;
    }
    .category{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      ul{
        list-style: none;
        width: 80%;
        margin: 50px auto 20px;
        display: flex;
        justify-content: space-around;
        li{
          width: 100px;
          text-align: center;
          display: inline-block;
        }
      }
      .news_video{
        width: 80%;
        display: flex;
        justify-content: space-around;
        .video_detile{
          width: 15%;
          img{
            width: 100%;
          }
          span{
            display: inline-block;
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }
</style>