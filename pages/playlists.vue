<template>
  <div class="playlists">
    <div class="playlists__containers">
      <playlist-card-container
        :playlists="userPlaylists"
        title="My Playlists"
        class="playlists__containers__item"
      />

      <playlist-card-container
        :playlists="followedPlaylists"
        title="Following Playlists"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    PlaylistCardContainer: () =>
      import('~/components/playlist/PlaylistCardContainer')
  },
  data() {
    return {
      followedPlaylists: [],
      userPlaylists: []
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/playlists', {
      params: {
        limit: 20
      }
    })

    return {
      followedPlaylists: data.followed_playlists,
      userPlaylists: data.user_playlists
    }
  },
  async mounted() {
    const { data } = await this.$axios.get('/playlists')

    this.followedPlaylists = data.followed_playlists
    this.userPlaylists = data.user_playlists
  }
}
</script>

<style lang="scss" scoped>
.playlists {
  &__containers {
    & > &__item {
      margin-bottom: 16px;
    }

    & > &__item:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
