<template>
  <div class="playlists">
    <playlist-card-container :playlists="userPlaylists" title="My Playlists" />
    <playlist-card-container
      :playlists="followedPlaylists"
      title="Following Playlists"
    />
  </div>
</template>

<script>
export default {
  components: {
    PlaylistCardContainer: () =>
      import('~/components/playlist/PlaylistCardContainer')
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/playlists')

    return {
      followedPlaylists: data.followed_playlists,
      userPlaylists: data.user_playlists
    }
  }
}
</script>

<style lang="scss" scoped>
.playlist-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  height: 160px;
  padding: 16px;
  border-radius: 19px;
  background: #eef0f4;
  box-shadow: 8px 8px 15px #c8cacd, -8px -8px 15px #ffffff;
}

.margin-spacer {
  margin: 16px;
}
</style>
