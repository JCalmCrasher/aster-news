<template>
  <the-sidebar />
  <main class="sm:ml-[260px]">
    <div class="w-full sm:w-[771px]">
      <ArticleFeatureCard />
    </div>
    <div class="flex flex-row sm:w-[771px] gap-5 mt-5">
      <ArticleSingleCard />
      <ArticleSingleCard />
    </div>
  </main>
</template>

<script>
import TheSidebar from "./components/the-sidebar.vue";
import ArticleFeatureCard from "./components/article-feature-card.vue";
import ArticleSingleCard from "./components/article-single-card.vue";
export default {
  components: { TheSidebar, ArticleFeatureCard, ArticleSingleCard },
};
</script>

<style lang="css"></style>
