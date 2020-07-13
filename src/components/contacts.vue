<template lang="pug">
  .contacts
    .contacts__title-conatainer
      .about-info__title Контакты
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
    .contacts__list
      .contacts__item(
        v-for="contactsLink in contactsLinks"
      )
        .contacts__img
          svg.contacts__pic
            use(
              :xlink:href="contactsLink.img"
            )
        .contacts__name
          a(
            :href="contactsLink.url"
          ).contacts__link {{contactsLink.name}}
</template>

<script>
export default {
  data() {
    return {
      contactsLinks: [
        {
          name: 'pershin',
          url: "skype:live:.cid.a2595bc97f4e1519",
          img: "./src/assets/img/icons/sprite.svg#skype"
        },
        {
          name: 'aspershi@gmail.com',
          url: "mailto:aspershi@gmail.com",
          img: "./src/assets/img/icons/sprite.svg#envelope"
        },
        {
          name: '+7(926)857-62-75',
          url: "tel:+79268576275",
          img: "./src/assets/img/icons/sprite.svg#phone"
        },
        {
          name: 'Москва, Фрунзенская наб., д. 34',
          url: "#",
          img: "./src/assets/img/icons/sprite.svg#map_marker"
        }
      ]
    }
  }
}
</script>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>