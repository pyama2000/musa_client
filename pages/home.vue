<template>
  <div class="home"></div>
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
  async asyncData({ $axios }) {
    const { data, status } = await $axios.get('/player/current')

    if (status !== 200) {
      return { current: null }
    }

    return {
      current: {
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
