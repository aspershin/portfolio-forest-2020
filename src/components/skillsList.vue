<template lang="pug">
  .skills-list
    .skill-title {{skillsGroup}}
    .skills-item-table
      skills-item(
        v-for="skill in skills"
        v-if="checkSkillGroup(skillsGroup) === skill.type"
        :key="skill.id"
        :skill="skill"
      )
</template>

<script>

import skillsItem from '../components/skillsItem'
export default {
  props: {
    skillsGroup: String,
    skills: Array
  },
  components: {
    skillsItem: skillsItem
  },
  methods: {
    checkSkillGroup(skillsGroupName) {
      switch (skillsGroupName) {
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

<style src="../styles/common/main.scss" lang="scss" scoped>

</style>