<template>
  <div class="try_flex">
    <for_movie></for_movie>
    <latest_news></latest_news>
    <news_movies></news_movies>
  </div>
</template>

<script>
import for_movie from "../../components/for_movie"
import news_movies from "./components/news_movies"
import latest_news from "./components/latest_news"
export default {
  components:{
    for_movie,
    news_movies,
    latest_news,
  }
}
</script>

<style lang="scss" scope>
.try_flex{
}

</style>