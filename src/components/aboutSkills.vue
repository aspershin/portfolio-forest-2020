<template lang="pug">
  .about-skills
    .about-skills__title Чем я могу быть вам полезен
    .login-content__up-svg.about-skills__svg
      svg
        line(
          x1="0"
          y1="0"
          x2="90"
          y2="0"
          stroke-width="10"
          stroke="#566358"
        )
    .about-skills__text
      p Больше всего меня привлекает <strong>Frontend</strong> разработка, но я также знаком и могу решать не сложные задачи на <strong>Backend</strong> . Но давайте по порядку.
    .about-skills__list
      skills
</template>

<script>

import skills from '../components/skills'

export default {
  components: {
    skills: skills
  }
}
</script>

<style src="../styles/common/main.scss" lang="scss" scoped>

</style>