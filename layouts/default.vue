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
  height: -webkit-fill-available;
  background: #eef0f4;
}

.page {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.link-button-container {
  margin-top: auto;
}
</style>
