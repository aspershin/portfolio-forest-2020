<template lang="pug">
  .hamburger-wrap-item
    a(
      :href="hamburgerWrapItemLink.url"
    ).hamburger-wrap-link {{hamburgerWrapItemLink.name}}
      
</template>

<script>
export default {
  props: {
    hamburgerWrapItemLinks: Array,
    hamburgerWrapItemLink: Object
  }
}
</script>

<style src="../styles/common/main.scss" lang="scss" scoped>

</style>