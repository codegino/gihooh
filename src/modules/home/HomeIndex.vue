<template>
  <div class="home">
    <navigation-view></navigation-view>
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
