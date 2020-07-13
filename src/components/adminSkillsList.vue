<template lang="pug">
  .skills-list
    .skills-title {{skillType}}
    table
      admin-skills-item(
        v-for="skill in skills"
        v-if="convertSkillStringToNum(skillType) === skill.type"
        :key="skill.id"
        :skill="skill"
      )
    br
    hr
    admin-skill-input(
      :type="convertSkillStringToNum(skillType)"
    )
</template>

<script>

import adminSkillsItem from '../components/adminSkillsItem'
import adminSkillInput from '../components/adminSkillInput'

export default {
  components: {
    adminSkillsItem, adminSkillInput
  },
  props: {
    skillType: String,
    skills: Array
  },
  methods: {
    convertSkillStringToNum(skillGroupName) {
      switch (skillGroupName) {
        case 'Frontend':
          return 1;
        case 'Backend':
          return 2;
        case 'WorkFlow':
          return 3;
      }
    }
  }
}
</script>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>