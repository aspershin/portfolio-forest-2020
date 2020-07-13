<template lang="pug">
  .login-robot
    label.login-robot__title Вы точно не робот?
    .login-robot__radio-wrap
      .login-robot__radio
        input(
          type="radio"
          name="robot-radio"
          id="robot-radio-yes"
        ).login-robot__input.visually-hidden
        label(for="robot-radio-yes").login-robot__label Да
      .login-robot__radio
        input(
          type="radio"
          name="robot-radio"
          id="robot-radio-no"
        ).login-robot__input.visually-hidden
        label(for="robot-radio-no").login-robot__label Нет
</template>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>