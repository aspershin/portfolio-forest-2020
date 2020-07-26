<template lang="pug">
  #works
    hamburger-wrap
    .about-wrapper
      header.about-header
        .about-header__up
          .about-header__up-left
            socials
          .about-header__up-right
            hamburger
        .about-header__mid
          main-title
        .about-header__down
          arrow-down
      section.about-triangles.works-triangles
        .works-triangles__wrapper
          .works-triangles__text Мои работы
          .works-slider__line
            svg
              line(
                x1="0"
                y1="0"
                x2="90"
                y2="0"
                stroke-width="3"
                stroke="#566358"
              )
      section.works-slider
        .works-slider__container
          .works-slider__left
            .works-slider__left-div
              .works-slider__left-items#works-slider__left-items
                .works-slider__description
                  .works-slider__title Сайт-Портфолио веб-разработчика
                  .works-slider__line.works-slider__line-right
                    svg
                      line(
                        x1="0"
                        y1="0"
                        x2="90"
                        y2="0"
                        stroke-width="3"
                        stroke="#566358"
                      )
                  .works-slider__desc HTML, CSS, JavaScript, Vue.js
                  a(href="#").works-slider__link
                    .works-slider__link-wrap
                      .works-slider__link-image
                      .works-slider__link-text Посмотреть сайт
                .works-slider__description
                  .works-slider__title Сайт авиакомпании AIRPLANET
                  .works-slider__line
                    svg
                      line(
                        x1="0"
                        y1="0"
                        x2="90"
                        y2="0"
                        stroke-width="3"
                        stroke="#566358"
                      )
                  .works-slider__desc Комфорт, сервис, низкие цены!
                  a(href="#").works-slider__link
                    .works-slider__link-wrap
                      .works-slider__link-image
                      .works-slider__link-text Посмотреть сайт
                .works-slider__description
                  .works-slider__title Сайт фитнес-центра Афродита
                  .works-slider__line
                    svg
                      line(
                        x1="0"
                        y1="0"
                        x2="90"
                        y2="0"
                        stroke-width="3"
                        stroke="#566358"
                      )
                  .works-slider__desc Быстрее, выше, сильнее!
                  a(href="#").works-slider__link
                    .works-slider__link-wrap
                      .works-slider__link-image
                      .works-slider__link-text Посмотреть сайт
                .works-slider__description
                  .works-slider__title Сайт Бургерной
                  .works-slider__line
                    svg
                      line(
                        x1="0"
                        y1="0"
                        x2="90"
                        y2="0"
                        stroke-width="3"
                        stroke="#566358"
                      )
                  .works-slider__desc Самые вкусные бургеры в городе!
                  a(href="#").works-slider__link
                    .works-slider__link-wrap
                      .works-slider__link-image
                      .works-slider__link-text Посмотреть сайт
          .works-slider__right
            .works-slider__div
              .works-slider__items#works-slider__items
                .works-slider__item
                  img(
                    src="./src/assets/img/works/work-1.jpg"
                  ).works-slider__img
                .works-slider__item
                  img(
                    src="./src/assets/img/works/work-2.jpg"
                  ).works-slider__img
                .works-slider__item
                  img(
                    src="./src/assets/img/works/work-3.jpg"
                  ).works-slider__img
                .works-slider__item
                  img(
                    src="./src/assets/img/works/work-4.jpg"
                  ).works-slider__img
              .works-slider__arrows
                a(href="#").slider-arrow-left#slider-arrow-left
                  svg.slider-arrow-pic
                    use(
                      xlink:href="./src/assets/img/icons/sprite.svg#left"
                    )
                a(href="#").slider-arrow-right#slider-arrow-right
                  svg.slider-arrow-pic
                    use(
                      xlink:href="./src/assets/img/icons/sprite.svg#right"
                    )  
      footer.works-footer
        about-footer
</template>

<script>
import socials from './src/components/socials'
import hamburger from './src/components/hamburger'
import mainTitle from './src/components/mainTitle'
import arrowDown from './src/components/arrowDown'
import aboutInfo from './src/components/aboutInfo'
import aboutSkills from './src/components/aboutSkills'
import aboutFooter from './src/components/aboutFooter'
import contacts from './src/components/contacts'
import hamburgerWrap from './src/components/hamburgerWrap'

export default {
  components: {
    socials: socials,
    hamburger: hamburger,
    mainTitle: mainTitle,
    arrowDown: arrowDown,
    aboutInfo: aboutInfo,
    aboutSkills: aboutSkills,
    aboutFooter: aboutFooter,
    contacts: contacts,
    hamburgerWrap: hamburgerWrap
  }

}
</script>

<style src="./src/assets/styles/common/main.scss" lang="scss" scoped>

</style>