<template lang="pug">
  .admin#admin
    .admin__header
      admin-header
    .admin__tabs
      admin-tabs
    .admin__content
      router-view
      //- admin-content
    
</template>

<script>

import adminHeader from './src/components/adminHeader'
import adminTabs from './src/components/adminTabs'
import adminContent from './src/components/adminContent'

export default {
  components: {
    adminHeader, adminTabs, adminContent
  }

}
</script>

<style src="./src/assets/styles/common/main.scss" lang="scss" scoped>

</style>