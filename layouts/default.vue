<template>
  <div class="layout">
    <nuxt class="page" />

    <link-button-container class="link-button-container" />
  </div>
</template>

<script>
export default {
  components: {
    LinkButtonContainer: () =>
      import('~/components/neumorphism/LinkButtonContainer')
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #eef0f4;
}

.page {
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
  padding: 16px;
}
</style>
