<template>
  <div class="playlist-card-container">
    <playlist-card
      v-for="(playlist, i) in playlists"
      :key="i"
      :playlist="playlist"
    />
  </div>
</template>

<script>
export default {
  components: {
    PlaylistCard: () => import('~/components/neumorphism/PlaylistCard')
  },
  props: {
    playlists: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.playlist-card-container {
  display: flex;
  padding: 24px;
  background: #eef0f4;
  border-radius: 15px;
  box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  & > .playlist-card {
    margin: 0 8px;
  }

  & > .playlist-card:first-child {
    margin-left: 0;
  }

  & > .playlist-card:last-child {
    margin-right: 0;
  }
}
</style>
