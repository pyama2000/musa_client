<template>
  <div class="page-playlist">
    <the-playlist-detail
      :description="playlist.description"
      :image-url="playlist.images[0].url"
      :name="playlist.name"
      :owner="playlist.owner.display_name"
    />

    <v-divider class="page-playlist__divider" />

    <div class="page-playlist__tracks">
      <base-track-card
        v-for="(data, i) in tracks"
        :key="i"
        :added-at="data.added_at"
        :album="data.track.album.name"
        :artists="data.track.artists"
        :name="data.track.name"
        class="page-playlist__tracks__track"
      />
    </div>
  </div>
</template>

<script>
import BaseTrackCard from '~/components/BaseTrackCard'
import ThePlaylistDetail from '~/components/ThePlaylistDetail'

export default {
  components: {
    BaseTrackCard,
    ThePlaylistDetail
  },
  data() {
    return {
      playlist: null,
      tracks: null
    }
  },
  async asyncData({ $axios, store, route }) {
    const playlistData = await $axios.get('/playlist', {
      params: {
        user_id: store.getters['user/userID'],
        playlist_id: route.query.playlistID
      }
    })

    const trackData = await $axios.get('/tracks', {
      params: {
        user_id: store.getters['user/userID'],
        playlist_id: route.query.playlistID
      }
    })

    return {
      playlist: playlistData.data.playlist,
      tracks: trackData.data.tracks
    }
  }
}
</script>

<style lang="sass">
.page-playlist
  &__divider
    margin: 32px 0
  &__tracks
    &__track
      margin: 8px 0
      &:first-child
        margin-top: 0
      &:last-child
        margin-bottom: 0
</style>
