<template>
  <div class="page-playlist">
    <the-playlist-detail
      :description="playlist.description"
      :image-url="playlist.images[0].url"
      :name="playlist.name"
      :owner="playlist.owner.display_name"
    />
  </div>
</template>

<script>
import ThePlaylistDetail from '~/components/ThePlaylistDetail'

export default {
  components: {
    ThePlaylistDetail
  },
  data() {
    return {
      playlist: null
    }
  },
  async asyncData({ $axios, store, route }) {
    const playlistData = await $axios.get('/playlist', {
      params: {
        user_id: store.getters['user/userID'],
        playlist_id: route.query.playlistID
      }
    })

    return { playlist: playlistData.data.playlist }
  }
}
</script>
