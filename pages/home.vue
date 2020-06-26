<template>
  <div class="home">
    <player :object="currentPlayingTrack" />

    <playlist-card-container :playlists="playlists" />

    <link-button-container />
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
    Player: () => import('~/components/neumorphism/Player'),
    LinkButtonContainer: () =>
      import('~/components/neumorphism/LinkButtonContainer'),
    PlaylistCardContainer: () =>
      import('~/components/neumorphism/PlaylistCardContainer')
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
    await $axios.get('/playlists').then(({ data }) => {
      playlists = data.followed_playlists
    })

    return {
      currentPlayingTrack,
      playlists
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #eef0f4;
}
</style>
