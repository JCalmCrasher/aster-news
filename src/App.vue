<template class="box-border">
  <the-sidebar />
  <div class="sm:ml-[321px]">
    <header>
      <TopSearch @user-Search="userSearch" @user-search-sm="userSearch" />
      <div>
        <TheTopStory />
      </div>
    </header>
    <main>
      <div class="h-[380px] lg:w-[771px] lg:h-auto">
        <ArticleFeatureCard />
      </div>
      <div class="grid grid-cols-1 gap-5 mt-5 lg:w-[771px] lg:grid-cols-2">
        <!--  :key="task.id" v-for="task in newsList" -->
        <ArticleSingleCard :title="task.title" :content="task.description" :key="task.id" v-for="task in newsList"
          :image="[task.urlToImage ? task.urlToImage : 'src/img/instagram.png']" :publisher="task.author"
          :time="this.getDate(task.publishedAt)" :url="task.url" />
      </div>
    </main>
  </div>
</template>

<script>
import TheSidebar from "./components/the-sidebar.vue";
import ArticleFeatureCard from "./components/article-feature-card.vue";
import ArticleSingleCard from "./components/article-single-card.vue";
import TheTopStory from "./components/the-top-story.vue";
import TopSearch from "./components/top-search.vue";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
export default {
  components: { TheSidebar, ArticleFeatureCard, ArticleSingleCard, TheTopStory, TopSearch },

  data() {
    return {
      newsList: [],
      defaultImg: 'src/img/instagram.png'
    }
  },
  methods: {
    async getNews() {
      // console.log(import.meta.env.MODE)
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=ng&sortBy=publishedAt&apiKey=5608ff86dd9f4318a824352dc7121bc5`)
      const finalRes = await res.json()
      this.newsList = finalRes.articles
    },
    async userSearch(da) {
      const res = await fetch(`https://newsapi.org/v2/everything?q=` + da + `&sortBy=publishedAt&apiKey=5608ff86dd9f4318a824352dc7121bc5`)
      const finalRes = await res.json()
      this.newsList = finalRes.articles
      // console.log(this.newsList.articles[0].title)
    },
    getDate(df){
      const newDate =formatDistanceToNow(new Date(df), { addSuffix: true })
      return newDate
    }

  },
  mounted() {
    this.getNews()
  }

};

</script>

<style lang="css">

</style>
