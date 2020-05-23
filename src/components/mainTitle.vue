<template lang="pug">
  .main-title
    .main-title__image
      .main-title__image-wrap(
        :style=`"background-image: url(./src/assets/img/content/Keanu_Reeves.jpg)"`
      )
        img(
          :src="srcImgTitle"
        ).main-title__image-pic
    .main-title__name Александр Васильев
    .main-title__description Личный сайт веб-разработчика

</template>

<script>

export default {
  props: {
    srcImgTitle: {
      type: String,
      default: './src/assets/img/content/Keanu_Reeves.jpg'
    }
  },
  data() {
    return {
      srcImgTitleWrap: './src/assets/img/content/Keanu_Reeves.jpg'
    }
  }
}
</script>

<style src="../styles/common/main.scss" lang="scss" scoped>

</style>