<template>
  <div class="playlist-card">
    <image-sheet
      :src="playlist.image_url"
      alt="Playlist image"
      class="playlist-card__image"
    />
    <div class="playlist-card__title">
      {{ playlist.name }}
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ImageSheet: () => import('~/components/neumorphism/ImageSheet')
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
  display: grid;
  grid-template-rows: 88px 1fr;
  gap: 24px;
  width: 120px;
  height: 180px;
  padding: 24px 16px;
  background: #eef0f4;
  border-radius: 15px;
  box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;

  &__title {
    width: 100%;
    margin-top: auto;
    font-size: xx-small;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
