<template>
  <div class="page-playlist">
    <div class="page-playlist__card-group">
      <div
        v-for="(playlist, i) in playlists"
        :key="i"
        class="page-playlist__card-group__item"
      >
        <base-playlist-card
          :id="playlist.id"
          :description="playlist.description"
          :image-url="playlist.image_url"
          :name="playlist.name"
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
      playlists: null
    }
  },
  created() {
    this.$axios
      .get('/playlists', {
        params: {
          user_id: this.$store.getters['user/userID']
        }
      })
      .then((response) => {
        this.playlists = response.data.playlists
      })
  }
}
</script>

<style lang="sass">
.page-playlist__card-group
  &__item
    margin: 8px 0
    &:first-child
      margin-top: 0
    &:last-child
      margin-bottom: 0
</style>
