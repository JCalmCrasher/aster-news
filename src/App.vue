<template class="box-border">
  <the-sidebar @user-selected-option="sideBar"/>
  <div class="sm:ml-[321px]">
    <header>
      <TopSearch @user-search="userSearch" @user-search-sm="userSearch" />
      <div>
        <TheTopStory @top-story-button='topStory' />
      </div>
    </header>
    <main>
      <div class="h-[380px] lg:w-[771px] lg:h-auto">
        <ArticleFeatureCard />
      </div>
      <div class="grid grid-cols-1 gap-5 mt-5 lg:w-[771px] lg:grid-cols-2">
        <!--  :key="task.id" v-for="task in newsList" -->
        <ArticleSingleCard :title="task.title" :content="task.description" :key="task.id" v-for="task in newsList"
          :image="[task.image_url ? task.image_url : 'src/img/default.jpg']" :publisher="task.source_id"
          :time="this.getDate(task.pubDate)" :url="task.link" />
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
      // console.log(import.meta.env.MODE) https://newsapi.org/v2/top-headlines?country=ng&sortBy=publishedAt&apiKey=5608ff86dd9f4318a824352dc7121bc5` ZreybJPTEOHeGbfxvHK9nz5304Bwdf_GdZ3P8zTefXc curl -Xcurl -XGET 'https://api.newscatcherapi.com/v2/search?q=Tesla' ''  https://newsdata.io/api/1/news?apikey=pub_17613bded592050c4e04f55e567d888723390
      const res = await fetch('https://newsdata.io/api/1/news?apikey=pub_17613bded592050c4e04f55e567d888723390&country=ng')
      const finalRes = await res.json()
      this.newsList = finalRes.results
      // console.log(this.newsList[0])
    },
    async userSearch(da) {
      const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_17613bded592050c4e04f55e567d888723390&&q=` + da + `&language=en`)
      const finalRes = await res.json()
      this.newsList = finalRes.results
    },
    getDate(df) {
      const newDate = formatDistanceToNow(new Date(df), { addSuffix: true })
      return newDate
    },
    async topStory(story) {
      const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_17613bded592050c4e04f55e567d888723390&&q=` + story + `&language=en`)
      const finalRes = await res.json()
      this.newsList = finalRes.results
    },
    async sideBar(option) {
      const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_17613bded592050c4e04f55e567d888723390&&q=` + option + `&language=en`)
      const finalRes = await res.json()
      this.newsList = finalRes.results
    }
  },
  mounted() {
    this.getNews()
  }

};

</script>

<style lang="css">

</style>
