<template>
  <div class="home">
    <navigation-view class="navigation"/>
    <div class="content">
      <h1 class="content__title">This is the main page</h1>
      <article-item></article-item>
      <article-item></article-item>
    </div>
    <footer-view class="footer"/>
  </div>
</template>

<script>
import NavigationView from '@/components/layouts/NavigationView'
import FooterView from '@/components/layouts/FooterView'
import ArticleItem from '@/modules/home/_components/ArticleItem'
export default {
  components: {
    NavigationView,
    FooterView,
    ArticleItem
  }
}
</script>

<style scoped lang="scss">
  .home{
    display: grid;
    grid-template-rows: min-content 1fr min-content;
  }

  .content{
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    justify-content: center;

    &__title {
      text-align: center;
      margin-top: 1rem;
    }
  }
</style>
