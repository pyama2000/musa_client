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
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  background: #eef0f4;
}

.page {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 0 36px;
}

.link-button-container {
  margin-top: auto;
  margin-bottom: 16px;
}
</style>
