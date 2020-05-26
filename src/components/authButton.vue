<template lang="pug">
  div
    a(
      :href="authButtonHref"
    ).auth-link
      .auth-button {{authButtonName}}
</template>

<script>
export default {
  props: {
    authButtonName: {
      type: String,
      default: 'Авторизоваться'
    },
    authButtonHref: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style src="../styles/common/main.scss" lang="scss" scoped>

</style>