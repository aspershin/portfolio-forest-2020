<template lang="pug">
  #app
    .wrapper
      .welcome-main
        .welcome-header
          auth-button(
            :authButtonHref="hrefToLogin"
          )
        .welcome-container
          .welcome-content
            .welcome-content__up
              main-title
              socials
            .welcome-content__down
              .welcome-content__button
                welcome-login-button(
                  title="Мои работы"
                )
              .welcome-content__button
                welcome-login-button(
                  title="Обо мне"
                )
              .welcome-content__button
                welcome-login-button(
                  title="Блог"
                )
        .welcome-footer
          .welcome-footer__div &copy Александр Васильев
          .welcome-footer__div Создано с любовью в Loftschool
          .welcome-footer__div 2020
</template>

<script>
import mainTitle from './components/mainTitle'
import authButton from './components/authButton'
import socials from './components/socials'
import welcomeLoginButton from './components/welcomeLoginButton'

export default {
  components: {
    mainTitle: mainTitle,
    authButton: authButton,
    socials: socials,
    welcomeLoginButton: welcomeLoginButton
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hrefToLogin: './login.html'
    }
  }
}
</script>

<style src="./styles/common/main.scss" lang="scss" scoped>

</style>
