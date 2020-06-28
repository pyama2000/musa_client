<template>
  <nuxt-link :to="{ path: 'playlist', query: { playlistId: playlist.id } }">
    <bump-card class="playlist-card">
      <img
        :src="playlist.image_url"
        alt="Playlist image"
        class="playlist-card__image"
      />
      <div class="playlist-card__title">
        {{ playlist.name }}
      </div>
    </bump-card>
  </nuxt-link>
</template>

<script>
export default {
  components: {
    BumpCard: () => import('~/components/base/BumpCard')
  },
  props: {
    playlist: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.playlist-card {
  width: 90px;
  min-width: 90px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  transition: all 0.2s ease;

  &__image {
    width: 90%;
    height: auto;
    padding: 0 2px;
  }

  &__title {
    width: 100%;
    margin-top: auto;
    padding: 0 8px;
    color: $color;
    font-size: xx-small;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:active {
    box-shadow: $dent-shadow;
  }
}
</style>
