<template class="box-border">
  <the-sidebar @user-selected-option="sideBar" />
  <div class="sm:ml-[321px]">
    <header>
      <TopSearch @user-search="userSearch" @user-search-sm="userSearch" />
      <div>
        <TheTopStory @top-story-button='topStory' />
      </div>
    </header>
    <main>
      <div v-if="hideFeaturedCard" class="grid grid-cols-1 h-[380px] lg:w-[771px] lg:h-auto gap-5">
        <div v-if="singleIsLoading">
          <SingleSkeleton />
        </div>
        <div v-else>
          <ArticleFeatureCard :title=this.singleNews.title :url="this.singleNews.link"
            :content="this.singleNews.content" :publisher="this.singleNews.source_id"
            :time="this.getDate(this.singleNews.pubDate)"
            :image="this.singleNews.image_url" />
        </div>
      </div>
      <div>
        <div v-if="isLoading" class="grid grid-cols-1 gap-5 mt-5 lg:w-[771px] lg:grid-cols-2">
          <Skeleton v-for="i in 6" />
        </div>
        <div v-else class="grid grid-cols-1 gap-5 mt-5 lg:w-[771px] lg:grid-cols-2">
          <ArticleSingleCard :title="task.title" :content="task.description" :key="task.id" v-for="task in newsList"
            :image="task.image_url" :publisher="task.source_id"
            :time="this.getDate(task.pubDate)" :url="task.link" />
        </div>
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
import Skeleton from "./components/skeleton.vue";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import SingleSkeleton from "./components/single-skeleton.vue";

export default {
  components: { TheSidebar, ArticleFeatureCard, ArticleSingleCard, TheTopStory, TopSearch, Skeleton, SingleSkeleton },

  data() {
    return {
      newsList: [],
      singleNews: [],
      defaultImg: 'src/img/instagram.png',
      isLoading: false,
      singleIsLoading: false,
      hideFeaturedCard: true,
    }
  },
  methods: {

    async getSingleNews() {
      this.singleIsLoading = true
      const res = await fetch('https://newsdata.io/api/1/news?apikey=pub_17613bded592050c4e04f55e567d888723390&country=us')
      const finalRes = await res.json()
      this.singleNews = finalRes.results[0]
      this.singleIsLoading = false
      this.hideFeaturedCard = true
    },
    async getNews() {
      this.isLoading = true
      const res = await fetch('https://newsdata.io/api/1/news?apikey=pub_17613bded592050c4e04f55e567d888723390&country=ng')
      const finalRes = await res.json()
      this.newsList = finalRes.results
      this.isLoading = false
      this.hideFeaturedCard = false
    },
    async userSearch(da) {
      this.isLoading = true
      this.hideFeaturedCard = false
      const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_17613bded592050c4e04f55e567d888723390&&q=` + da + `&language=en`)
      const finalRes = await res.json()
      this.newsList = finalRes.results
      this.isLoading = false
    },
    getDate(theDate) {
      if (theDate) {
        let newDate = formatDistanceToNow(new Date(theDate), { addSuffix: true })
        return newDate
      }
    },
    async topStory(story) {
      this.isLoading = true
      const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_17613bded592050c4e04f55e567d888723390&&q=` + story + `&language=en`)
      const finalRes = await res.json()
      this.newsList = finalRes.results
      this.isLoading = false
      if (story=='All') {
        this.hideFeaturedCard = true
      }else{
        this.hideFeaturedCard = false
      }
    },
    async sideBar(option) {
      this.isLoading = true
      const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_17613bded592050c4e04f55e567d888723390&&q=` + option + `&language=en`)
      const finalRes = await res.json()
      this.newsList = finalRes.results
      this.isLoading = false
      if (option=='Around the World'||option=='Top Stories') {
        this.hideFeaturedCard = true 
      }else{
        this.hideFeaturedCard = false
      }
      console.log(option)
    }
  },
  mounted() {
    this.getNews()
    this.getSingleNews()
  }

};

</script>

<style lang="css">

</style>
<!-- 3508-0178-52850 -->