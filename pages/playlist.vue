<template>
  <div class="page-playlist">
    <the-playlist-detail
      :description="playlist.description"
      :imageUrl="playlist.images[0].url"
      :name="playlist.name"
      :owner="playlist.owner.id"
    />
    {{ playlist }}
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
  created() {
    this.$axios
      .get('/playlist', {
        params: {
          user_id: this.$store.getters['user/userID'],
          playlist_id: this.$route.query.playlistID
        }
      })
      .then((response) => {
        console.log(response.data.playlist)
        this.playlist = response.data.playlist
      })
  }
}
</script>
