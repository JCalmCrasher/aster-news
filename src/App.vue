<template class="box-border">
  <the-sidebar />
  <div class="sm:ml-[321px]">
    <header>
      <TopSearch />
      <div>
        <TheTopStory />
      </div>
    </header>
    <main>
      <div class="h-[380px] lg:w-[771px] lg:h-auto">
        <ArticleFeatureCard />
      </div>
      <div class="flex flex-col lg:w-[771px] gap-5 mt-5 lg:flex-row" :key="task.id" v-for="task in newsList">
        <ArticleSingleCard :title="task.title" :content="task.description"
          :image="task.urlToImage" :publisher="task.author" :time="task.publishedAt" :url="task.url"/>
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
export default {
  components: { TheSidebar, ArticleFeatureCard, ArticleSingleCard, TheTopStory, TopSearch },

  data() {
    return {
      newsList: []
    }
  },
  methods: {
    async getNews() {
      const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=5608ff86dd9f4318a824352dc7121bc5`)
      const finalRes = await res.json()
      this.newsList = finalRes.articles
      // console.log(this.newsList.articles[0].title)
    }
  },
  mounted() {
    this.getNews()
  }

};

// fetch(`https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2023-01-11&' +
//           'sortBy=popularity&' +
//           'apiKey=5608ff86dd9f4318a824352dc7121bc5'`)
//   .then(res => res.json())
//   .then(data => console.log(res))

</script>

<style lang="css">

</style>
