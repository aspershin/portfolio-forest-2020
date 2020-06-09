<template lang="pug">
  .hamburger(
    @click="hamburgerActive"
  )
   .hamburger-link
    .hamburger-stripe
    .hamburger-stripe
    .hamburger-stripe
</template>

<script>
import hamburgerWrapVue from './hamburgerWrap.vue';
import { bus } from '../main'
  
export default {
  methods: {
    hamburgerActive: function() {
      console.log('hello world');
      bus.$emit('search-value', this.value);
    }
  }
}
</script>

<style src="../styles/common/main.scss" lang="scss" scoped>

</style>