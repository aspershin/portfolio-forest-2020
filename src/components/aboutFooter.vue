<template lang="pug">
  .footer__container
    .footer__up
      .footer__up-container
        .footer__up-div
          .footer__up-div__text.footer__up-div__text--left
            p Этот сайт я сделал в рамках обучения <br>в Школе онлайн образования <strong>LoftSchool</strong>. 
        .footer__up-div
          .footer__up-div__nav
            footer-navigation
          .footer__up-div__socials
            socials
        .footer__up-div
          .footer__up-div__text.footer__up-div__text--right
            p Всегда пишите код так, будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете.
            p — Martin Golding
    .footer__down
      .footer__down-div &copy Александр Васильев
      .footer__down-div Создано с любовью в Loftschool
      .footer__down-div 2020
</template>

<script>

import footerNavigation from '../components/footerNavigation'
import socials from '../components/socials'

export default {
  components: {
    footerNavigation: footerNavigation,
    socials: socials
  }
}
</script>

<style src="../styles/common/main.scss" lang="scss" scoped>

</style>