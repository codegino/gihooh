<template>
  <div class="home">
    <navigation-view></navigation-view>
    <div class="content">
      <h1>This is the main page</h1>
    </div>
  </div>
</template>

<script>
import NavigationView from '@/components/layouts/NavigationView'
export default {
  components: {
    NavigationView
  }
}
</script>

<style scoped lang="scss">
  .hello {
    .container {
      background-color: red;
    }
  }
</style>
