<template>
  <nuxt-link
    :to="{ name: 'playlist', query: { playlistId: playlist.id } }"
    class="playlist-card"
  >
    <img
      :src="playlist.image_url"
      alt="Playlist image"
      class="playlist-card__image"
    />
    <div class="playlist-card__title">
      {{ playlist.name }}
    </div>
  </nuxt-link>
</template>

<script>
export default {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  min-width: 90px;
  height: 120px;
  padding: 8px 0;
  border-radius: 15px;
  box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;

  &__image {
    width: 90%;
    height: auto;
    padding: 0 2px;
  }

  &__title {
    width: 100%;
    margin-top: auto;
    padding: 0 8px;
    font-size: xx-small;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
