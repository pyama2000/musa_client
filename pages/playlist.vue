<template>
  <div class="page-playlist">
    <h3>USER</h3>
    <div class="page-playlist__playlists-user">
      <div
        v-for="(userPlaylist, i) in userPlaylists"
        :key="i"
        class="page-playlist__playlists-user__item"
      >
        <base-playlist-card
          :id="userPlaylist.id"
          :image-url="userPlaylist.image_url"
          :name="userPlaylist.name"
        />
      </div>
    </div>
    <div class="page-playlist__playlists-followed">
      <h3>FOLLOWED</h3>
      <div
        v-for="(followedPlaylist, i) in followedPlaylists"
        :key="i"
        class="page-playlist__playlists-followed__item"
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
  data() {
    return {
      userPlaylists: null,
      followedPlaylists: null
    }
  },
  beforeMount() {
    this.$axios
      .get('/playlists', {
        params: {
          user_id: this.$store.getters['user/userID']
        }
      })
      .then((response) => {
        this.userPlaylists = response.data.user_playlists
        this.followedPlaylists = response.data.followed_playlists

        if (window.matchMedia('(max-width: 767px)').matches) {
          this.userPlaylists = this.userPlaylists.slice(0, 3)
          this.followedPlaylists = this.followedPlaylists.slice(0, 3)
        }
      })
  }
}
</script>

<style lang="sass">
.page-playlist__playlists-user
  display: grid
  grid-gap: 16px
  // grid-template-columns: repeat(auto-fill,minmax(164px,1fr))
  grid-template-columns: repeat(auto-fill,minmax(94px,1fr))
  // grid-auto-rows: 1000px
  // grid-template-rows: auto 1fr
  overflow: hidden
</style>
