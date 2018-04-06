<template>
  <div class="container">
    <span>G</span>
    <nav class="nav">
      <router-link class="nav__link" to="/">Home</router-link>
      <router-link class="nav__link" to="/profile">About Me</router-link>
    </nav>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: blue;
  }

  .nav {
    &__link {
      color: red;
    }
  }
</style>
