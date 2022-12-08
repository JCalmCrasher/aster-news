<template>
  <the-sidebar />
  <div class="sm:ml-[321px]">
    <header>
      <TopSearch/>
      <div>
        <TheTopStory/>
      </div>
    </header>
    <main >
      <div class="h-[380px] lg:w-[771px] lg:h-auto">
        <ArticleFeatureCard />
      </div>
      <div class="flex flex-col sm:w-[771px] gap-5 mt-5 lg:flex-row">
        <ArticleSingleCard />
        <ArticleSingleCard />
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
};
</script>

<style lang="css"></style>
