<template>
  <div :style="{ height: windowSize }" class="layout">
    <nuxt class="page" />

    <link-button-container class="link-button-container" />
  </div>
</template>

<script>
export default {
  components: {
    LinkButtonContainer: () => import('~/components/LinkButtonContainer')
  },
  data() {
    return {
      windowSize: '100vh'
    }
  },
  mounted() {
    this.windowSize = `${window.innerHeight}px`
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  color: $color;
  background: $background;
}

.page {
  display: flex;
  flex-direction: column;
  padding: 16px 0 36px;
  overflow: auto;
}

.link-button-container {
  margin-top: auto;
  margin-bottom: 16px;
  padding: 0 16px;
}
</style>
