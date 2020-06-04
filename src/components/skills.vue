<template lang="pug">
  .skills
    skills-list(
      v-for="skillsGroup in skillsGroups"
      :key="skillsGroup"
      :skillsGroup="skillsGroup"
      :skills="skills"
    )
</template>

<script>

import skillsList from '../components/skillsList'

export default {
  components: {
    skillsList: skillsList
  },
  data() {
    return {
      skills: [],
      skillsGroups: ['Frontend', 'Backend', 'WorkFlow']
    }
  },
  mounted() {
    fetch('../../src/data.json').then(data => {
      return data.json()
    }).then(responce => {
      this.skills = responce;
    })
  }
}
</script>

<style src="../styles/common/main.scss" lang="scss" scoped>

</style>