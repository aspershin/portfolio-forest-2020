<template lang="pug">
  .item
    .item-name {{skill.name}}
    .item-skill
      svg(width="110" height="110" class="g-circles").skill-svg
        circle(r="45" cx="55" cy="55" stroke="#dfdcd5"
        fill="none")
        circle(
          r="45"
          cx="55"
          cy="55"
          stroke="#74a163"
          transform="rotate(-90 55 55)"
          stroke-dasharray="283"
          :stroke-dashoffset="(283 - (283 * skill.percents) / 100)"
        ).sector
</template>

<script>
export default {
  props: {
    skill: Object
  }
}
</script>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>