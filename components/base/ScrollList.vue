<template>
  <bump-card class="scroll-list">
    <slot></slot>
  </bump-card>
</template>

<script>
export default {
  components: {
    BumpCard: () => import('~/components/base/BumpCard')
  }
}
</script>

<style lang="scss" scoped>
.scroll-list {
  display: flex;
  flex-direction: column;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
