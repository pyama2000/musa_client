<template>
  <div class="home">
    <player :object="currentPlayingTrack" />

    <playlist-card-container :playlists="playlists" />
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
