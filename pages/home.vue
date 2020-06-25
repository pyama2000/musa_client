<template>
  <div class="home">
    <player :object="currentPlayingTrack" />
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
    Player: () => import('~/components/neumorphism/Player')
  },
  async asyncData({ $axios }) {
    const { data, status } = await $axios.get('/player/current')

    if (status !== 200) {
      return { currentPlayingTrack: null }
    }

    return {
      currentPlayingTrack: {
        isPlaying: data.is_playing,
        track: {
          id: data.track.id,
          image: data.track.image,
          name: data.track.name
        }
      }
    }
  }
}
</script>
