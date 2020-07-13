<template lang="pug">
  <div class="hamburger-wrap" :class="{active: isActive}">
    .hamburger-wrap__header
      .hamburger-wrap__header-wrap
        .hamburger-wrap__cross(
          @click="hamburgerClose"
        )
    .hamburger-wrap__title
      hamburger-wrap-list
  </div>
</template>

<script>

import hamburgerWrapList from '../components/hamburgerWrapList'
import { bus } from '../../main'

export default {
  components: {
    hamburgerWrapList: hamburgerWrapList
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    turnIsActive() {
      bus.isActive=true;
    },
    hamburgerClose() {
      this.isActive=false;
    }
  },
  created() {
    bus.$on('search-value', (value) => {
      this.isActive=true;
    });
  }
}
</script>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>