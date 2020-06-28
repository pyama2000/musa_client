<template>
  <div class="playlist-info">
    <image-sheet
      :src="playlist.image.url"
      alt="Playlist image"
      class="playlist-info__image"
    />

    <slider :playlist="playlist" class="playlist-info__slider" />
  </div>
</template>

<script>
export default {
  components: {
    Slider: () => import('~/components/playlist/info_card/Slider'),
    ImageSheet: () => import('~/components/ImageSheet')
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
.playlist-info {
  height: 120px;
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-areas: 'image slider';
  gap: 0;
  align-items: center;
  padding: 0 16px;
  color: #50545c;

  &__image {
    grid-area: image;
    width: 120px !important;
    height: 120px;
  }

  &__slider {
    grid-area: slider;
  }
}
</style>
