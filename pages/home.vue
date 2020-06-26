<template>
  <div class="home">
    <div class="home__card">
      <player :object="currentPlayingTrack" />

      <div class="playlists__container">
        <div v-for="(playlist, i) in playlists" :key="i">
          <playlist-card :playlist="playlist" />
        </div>
      </div>

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
    LinkButtonList: () => import('~/components/neumorphism/LinkButtonList'),
    PlaylistCard: () => import('~/components/neumorphism/PlaylistCard')
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
.home__card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #eef0f4;
}

.playlists__container {
  display: flex;
  margin: 24px 16px;
  padding: 24px;
  background: #eef0f4;
  border-radius: 15px;
  box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  & > * {
    margin: 0 8px;
  }
}
</style>
