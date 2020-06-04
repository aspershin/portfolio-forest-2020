<template lang="pug">
  .arrow-down
    a(
      href="#"
    ).arrow-down__link
      svg.arrow-down__img
        use(
          :xlink:href="arrowDownLinks"
        )
  
</template>

<script>
export default {
  data() {
    return {
      arrowDownLinks: "./src/assets/img/icons/sprite.svg#arrow_down"
    }
  }
}
</script>

<style src="../styles/common/main.scss" lang="scss" scoped>

</style>