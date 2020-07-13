<template lang="pug">
  input(
    type="input"
    :placeholder="inputPlaceholder"
  ).auth-input__input
</template>

<script>
import inputImg from '../components/inputImg'

export default {
  components: {
    inputImg: inputImg
  },
  props: {
    inputImg: {
      type: String
    },
    inputPlaceholder: {
      type: String
    },
  }
}
</script>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>