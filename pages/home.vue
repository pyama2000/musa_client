<template>
  <div class="home">
    <player v-if="currentPlayingTrack !== null" :object="currentPlayingTrack" />

    <playlist-card-container
      :playlists="playlists"
      title="Featured Playlists"
    />
  </div>
</template>

<script>
export default {
  async middleware({ redirect, query, $axios }) {
    const code = query.code
    if (code) {
      await $axios.post('/auth', { code })
      redirect('/home')
    }
  },
  components: {
    Player: () => import('~/components/Player'),
    PlaylistCardContainer: () =>
      import('~/components/playlist/PlaylistCardContainer')
  },
  async asyncData({ $axios }) {
    let currentPlayingTrack = null
    await $axios.get('/player/current').then(({ data, status }) => {
      if (status !== 200) return

      currentPlayingTrack = {
        isPlaying: data.is_playing,
        track: {
          id: data.track.id,
          image: data.track.image,
          name: data.track.name
        }
      }
    })

    let playlists = null
    await $axios.get('/featured').then(({ data }) => {
      playlists = data.playlists
    })

    return {
      currentPlayingTrack,
      playlists
    }
  }
}
</script>

<style lang="scss" scoped>
.player {
  margin-bottom: 16px;
  padding: 0 16px;
}
</style>
