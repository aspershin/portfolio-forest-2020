<template lang="pug">
  .admin-tabs
    ul.admin__list
      li.admin__item(
        v-for="tab in tabs"
      )
        router-link(
          :to="tab.href"
        ).admin__link {{tab.name}}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {name: 'Таб 1', href: '/'},
        {name: 'Таб 2', href: '/pages'}
        // {name: 'Таб 3', href: ''}
      ]
    }
  }
}
</script>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>