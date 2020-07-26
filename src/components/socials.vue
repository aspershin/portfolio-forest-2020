<template lang="pug">
  .socials
    .socials__list
      .socials__item(
        v-for="link in links"
        :link="link"
      )
        a(
          :href="link.urlLink"
        ).socials__item-link
          svg.socials__item-pic
            use(
              :xlink:href="link.imgLink"
            )
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          urlLink: "https://vk.com/aspershing",
          imgLink: "./src/assets/img/icons/sprite.svg#vk"
        },
        {
          urlLink: "https://github.com/aspershin",
          imgLink: "./src/assets/img/icons/sprite.svg#github"
        },
        {
          urlLink: "https://www.linkedin.com/in/андрей-першин-47b8061b2/",
          imgLink: "./src/assets/img/icons/sprite.svg#in"
        }
      ]
    }
  },
}
</script>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>