<template lang="pug">
  .about-info
    .about-info__image
      .about-info__image-wrap(
        :style="aboutInfoImgWrap"
      )
        img(
          :src="aboutInfoImg"
        ).about-info__image-pic
    .about-info__title Кто я
      .login-content__up-svg
        svg
          line(
            x1="0"
            y1="0"
            x2="90"
            y2="0"
            stroke-width="10"
            stroke="#566358"
          )
    .about-info__text
      p Я начинающий веб разработчик из Москвы. Я учусь разрабатывать современные сайты и приложения. Мне нравится делать интересные и современные проекты. Данный сайт написан на фреймворке <strong><a href="https://vuejs.org/" target="_blank" title="https://vuejs.org/">Vue.js</a></strong>.
      p  Этот сайт я сделал в рамках обучения в Школе онлайн образования <strong>LoftSchool</strong>. Чуть позже я освежу в нём свой контент. А пока посмотрите, как тут всё классно и красиво!
        
</template>

<script>
export default {
  data() {
    return {
      aboutInfoImgWrap: 'background-image: url(./src/assets/img/content/infoImage.jpg)',
      aboutInfoImg: './src/assets/img/content/infoImage.jpg'
    }
  }
}
</script>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>