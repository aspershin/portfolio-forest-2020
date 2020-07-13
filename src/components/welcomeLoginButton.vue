<template lang="pug">
  .welcomeLoginButton
    a(
      :href="hrefAuthButton"
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
    },
    hrefAuthButton: {
      type: String,
      default: '#'
    }
  },
  methods: {
    mouseoverButton() {
      this.$emit('')
    }
  }
}
</script>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>