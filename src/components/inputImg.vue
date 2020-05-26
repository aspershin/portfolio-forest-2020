<template lang="pug">
    img(
      :src="imgInputSrc"
    ).auth-input__img-pic
  
</template>

<script>
export default {
  props: {
    imgInputSrc: {
      type: String
    }
  }
}
</script>

<style src="../styles/common/main.scss" lang="scss" scoped>

</style>