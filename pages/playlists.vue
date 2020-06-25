<template>
  <div class="page-playlists">
    <h3>USER</h3>
    <div class="page-playlists__playlists-user">
      <div
        v-for="(userPlaylist, i) in userPlaylists"
        :key="i"
        class="page-playlists__playlists-user__item"
      >
        <base-playlist-card
          :id="userPlaylist.id"
          :image-url="userPlaylist.image_url"
          :name="userPlaylist.name"
        />
      </div>
    </div>
    <div class="page-playlists__playlists-followed">
      <h3>FOLLOWED</h3>
      <div
        v-for="(followedPlaylist, i) in followedPlaylists"
        :key="i"
        class="page-playlists__playlists-followed__item"
      >
        <base-playlist-card
          :id="followedPlaylist.id"
          :description="followedPlaylist.description"
          :image-url="followedPlaylist.image_url"
          :name="followedPlaylist.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BasePlaylistCard from '~/components/BasePlaylistCard'

export default {
  components: {
    BasePlaylistCard
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/playlists')
    return {
      followedPlaylists: data.followed_playlists,
      userPlaylists: data.user_playlists
    }
  }
}
</script>

<style lang="sass">
.page-playlists__playlists-user
  display: grid
  grid-gap: 16px
  // grid-template-columns: repeat(auto-fill,minmax(164px,1fr))
  grid-template-columns: repeat(auto-fill,minmax(94px,1fr))
  // grid-auto-rows: 1000px
  // grid-template-rows: auto 1fr
  overflow: hidden
</style>
