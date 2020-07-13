<template lang="pug">
  .footer-navigation
    ul.footer-navigation__list
      li.footer-navigation__item(
        v-for="navLink in navLinks"
      )
        a(
          :href="navLink.url"
        ).footer-navigation__link {{navLink.name}}
  
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          name: 'Мои работы',
          url: './works.html'
        },
        {
          name: 'Обо мне',
          url: './about.html'
        },
        {
          name: 'Блог',
          url: './block.html'
        },
        {
          name: 'Авторизация',
          url: './login.html'
        }
      ]
    }
  }
}
</script>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>