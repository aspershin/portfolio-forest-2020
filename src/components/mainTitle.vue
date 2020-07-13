<template lang="pug">
  .main-title
    .main-title__image
      .main-title__image-wrap(
        :style="srcImgTitleWrap"
      )
        img(
          :src="srcImgTitle"
        ).main-title__image-pic
    .main-title__name Андрeй Першин
    .main-title__description Личный сайт веб-разработчика

</template>

<script>

export default {
  props: {
    srcImgTitle: {
      type: String,
      default: './src/assets/img/content/me.jpg'
    }
  },
  data() {
    return {
      srcImgTitleWrap: 'background-image: url(./src/assets/img/content/me.jpg)'
    }
  }
}
</script>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>