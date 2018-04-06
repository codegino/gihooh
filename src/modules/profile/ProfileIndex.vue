<template>
 <div class="profile">
   <navigation-view></navigation-view>
   <div class="content">
     <h1>Hello I'm {{name}}</h1>
   </div>
 </div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavigationView from '@/components/layouts/NavigationView'
export default {
  computed: {
    ...mapGetters({
      name: 'profile/NAME'
    })
  },
  components: {
    NavigationView
  }
}
</script>

<style scoped lang="scss">
 .content {
   background-color: var(--color-gray-light-1);
   display: flex;
   justify-content: center;
   height: 90vh;
 }
</style>
