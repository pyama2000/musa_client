<template>
  <div class="playlist">
    <info-card :playlist="playlist" />
    <div class="buttons"></div>
    <div class="margin-spacer" />
    <track-list :tracks="tracks" />
  </div>
</template>

<script>
export default {
  components: {
    InfoCard: () => import('~/components/playlist/InfoCard'),
    TrackList: () => import('~/components/TrackList')
  },
  async asyncData({ $axios, store, route }) {
    const playlistId = route.query.playlistId

    let playlist = null
    await $axios
      .get('/playlist', {
        params: {
          playlist_id: playlistId
        }
      })
      .then(({ data }) => {
        playlist = data.playlist
      })

    let tracks = null
    await $axios
      .get('/playlist/tracks', {
        params: {
          playlist_id: playlistId
        }
      })
      .then(({ data }) => {
        tracks = data.tracks
      })

    return {
      playlist,
      tracks
    }
  }
}
</script>

<style lang="scss" scoped>
.track-list {
  margin: 0 16px;
}

.margin-spacer {
  margin: 18px;
}
</style>
