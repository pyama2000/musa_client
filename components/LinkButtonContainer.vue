<template>
  <div class="flex-container">
    <div v-for="(page, i) in pages" :key="i">
      <link-button :page="page" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    LinkButton: () => import('~/components/LinkButton')
  },
  data() {
    return {
      pages: ['playlists', 'home', 'search']
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
}
</style>
