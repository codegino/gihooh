<template>
  <div class="hello">
    <div class="container">
      Hello from {{name}}!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: 'Carlo Gino Catapang'
    }
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
