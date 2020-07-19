<template>
  <div :style="{ height: windowSize }" class="login-layout">
    <nuxt />
  </div>
</template>

<script>
export default {
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
.login-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color;
  background: $background;
}
</style>
