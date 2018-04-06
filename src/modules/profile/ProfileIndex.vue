<template>
 <div>
   <h1>Hello I'm {{name}}</h1>
 </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      name: 'profile/NAME'
    })
  }
}
</script>

<style scoped lang="scss">
</style>
