<template lang="pug">
  #login
    .wrapper
      .welcome-main
        .welcome-header
          auth-button(
            authButtonName="Вернуться"
          )
        .login-container
          .login-content
            form.login-content__up
              .login-content__up-title
                .title-title Авторизуйтесь
                .login-content__up-svg
                  svg
                    line(
                      x1="0"
                      y1="0"
                      x2="90"
                      y2="0"
                      stroke-width="3"
                      stroke="#fff"
                    )
              .login-content__up-input
                .login-input
                  .auth-input__img
                    input-img(
                      :imgInputSrc="inputImgLogin"
                    )
                  auth-input(
                    inputPlaceholder="Логин"
                  )
                .login-input
                  .auth-input__img
                    input-img(
                      :imgInputSrc="inputImgPassword"
                    )
                  auth-input(
                  inputPlaceholder="Пароль"
                )
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
import mainTitle from '../components/mainTitle'
import authButton from '../components/authButton'
import authInput from '../components/authInput'
import welcomeLoginButton from '../components/welcomeLoginButton'
import inputImg from '../components/inputImg'

export default {
  components: {
    mainTitle: mainTitle,
    authButton: authButton,
    authInput: authInput,
    welcomeLoginButton: welcomeLoginButton,
    inputImg: inputImg
  },
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      inputImgLogin: './src/assets/img/icons/login.png',
      inputImgPassword: './src/assets/img/icons/password.png'
    }
  }
}
</script>

<style src="../styles/common/main.scss" lang="scss" scoped>

</style>
