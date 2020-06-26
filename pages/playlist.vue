<template>
  <div class="playlist">
    <playlist-info :playlist="playlist" />
  </div>
</template>

<script>
export default {
  components: {
    PlaylistInfo: () => import('~/components/neumorphism/PlaylistInfo')
  },
  async asyncData({ $axios, store, route }) {
    const { data } = await $axios.get('/playlist', {
      params: {
        playlist_id: route.query.playlistId
      }
    })

    return {
      playlist: data.playlist
    }
  }
}
</script>
