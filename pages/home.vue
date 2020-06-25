<template>
  <div class="home">
    <div class="home__card">
      <player :object="currentPlayingTrack" />

      <link-button-list class="link-button-list" />
    </div>
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
    LinkButtonList: () => import('~/components/neumorphism/LinkButtonList')
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

<style lang="scss" scoped>
.link-button-list {
  margin: 24px 0;
}
</style>
