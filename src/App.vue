<template>
  <the-sidebar />
  <header class="sm:ml-[260px]">
    <TopSearch/>
    <div>
      <TheTopStory/>
    </div>
  </header>
  <main class="sm:ml-[260px]">
    <div class="w-full h-[380px] sm:w-[771px] sm:h-auto">
      <ArticleFeatureCard />
    </div>
    <div class="flex flex-col sm:w-[771px] gap-5 mt-5 sm:flex-row">
      <ArticleSingleCard />
      <ArticleSingleCard />
    </div>
  </main>
</template>

<script>
import TheSidebar from "./components/the-sidebar.vue";
import ArticleFeatureCard from "./components/article-feature-card.vue";
import ArticleSingleCard from "./components/article-single-card.vue";
import TheTopStory from "./components/the-top-story.vue";
import TopSearch from "./components/top-search.vue";
export default {
  components: { TheSidebar, ArticleFeatureCard, ArticleSingleCard, TheTopStory, TopSearch },
};
</script>

<style lang="css"></style>
