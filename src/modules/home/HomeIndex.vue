<template>
  <div class="home">
    <navigation-view class="navigation"/>
    <div class="content">
      <h1>This is the main page</h1>
    </div>
    <footer-view class="footer"/>
  </div>
</template>

<script>
import NavigationView from '@/components/layouts/NavigationView'
import FooterView from '@/components/layouts/FooterView'
export default {
  components: {
    NavigationView,
    FooterView
  }
}
</script>

<style scoped lang="scss">
  .home{
    display: grid;
    grid-template-rows: min-content 1fr min-content;
  }

  .content{
    height: 40rem;
  }
</style>
