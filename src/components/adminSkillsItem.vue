<template lang="pug">
  tr
    td {{skill.name}}
    td
      input(
        type="text"
        :value="skill.percents"
      )
    td
      button(
        type="button"
        @click="removeExistetSkill(skill.id)"
      ) Удалить
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props: {
    skill: Object
  },
  methods: {
    ...mapMutations(['removeSkill']),
    removeExistetSkill(skillId) {
      this.removeSkill(skillId);
    }
  }
}
</script>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>