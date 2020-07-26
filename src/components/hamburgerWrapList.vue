<template lang="pug">
  .hamburger-wrap-list
      hamburger-wrap-item(
        v-for="hamburgerWrapItemLink in hamburgerWrapItemLinks"
        :key="hamburgerWrapItemLink.name"
        :hamburgerWrapItemLink="hamburgerWrapItemLink"
      )
</template>

<script>

import hamburgerWrapItem from '../components/hamburgerWrapItem'

export default {
  props: {
    hamburgerWrapItemLink: Object
  },
  components: {
    hamburgerWrapItem: hamburgerWrapItem
  },
  data() {
    return {
      hamburgerWrapItemLinks: [
        {
          name: 'Мои работы',
          url: './works.html'
        },
        {
          name: 'Блог',
          url: '#'
        },
        {
          name: 'Обо мне',
          url: './about.html'
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