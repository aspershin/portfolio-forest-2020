<template lang="pug">
  .welcomeLoginButton
    a(
      href="#"
      @mouseover="mouseoverButton"
    ).welcomeLoginButton__link
      .welcomeLoginButton__link-div {{title}}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Кнопка'
    }
  },
  methods: {
    mouseoverButton() {
      this.$emit('')
    }
  }
}
</script>

<style src="../styles/common/main.scss" lang="scss" scoped>

</style>