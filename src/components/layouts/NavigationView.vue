<template>
  <div class="container">
    <img :src="require('@/assets/images/g-logo.png')" alt="g logo" height="42" width="42">
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
    align-items: center;
    background-color: var(--color-primary);
  }

  .logo {
    font-size: 2rem;
  }

  .nav {
    &__link {
      margin: .5rem 1rem;
      color: var(--color-white);
    }
  }
</style>
