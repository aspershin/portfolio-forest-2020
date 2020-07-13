<template lang="pug">
  .content-section
    h2 Страница "Обо мне"
    admin-skills-list(
      v-for="skillType in skillsTypes"
      :skillType="skillType"
      :key="skillType"
      :skills="skills"
    )

</template>

<script>

import {mapActions, mapGetters} from 'vuex';
import adminSkillsList from '../components/adminSkillsList';

export default {
  components: {
    adminSkillsList
  },
  data() {
    return {
      skillsTypes: ['Frontend', 'Backend', 'WorkFlow']
    }
  },
  computed: {
    ...mapGetters(['skills'])
  },
  methods: {
    ...mapActions(['fetchSkills'])
  },
  mounted() {
    this.fetchSkills();
  }
}
</script>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>