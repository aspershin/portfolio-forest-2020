<template lang="pug">
  #about
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
      section.about-triangles
      section.about-main
        .about-main__description
          .about-main__description-wrap
            .about-main__description-title Обо мне
              .login-content__up-svg
                svg
                  line(
                    x1="0"
                    y1="0"
                    x2="90"
                    y2="0"
                    stroke-width="10"
                    stroke="#373e42"
                  )
            .about-main__description-main
              about-info
        .about-main__skills
          .about-main__skills-wrap
            about-skills
      section.about-map#map
        .about-map__contacts
          contacts
      footer.about-footer
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