<template>
  <div class="playlist-info">
    <image-sheet
      :src="playlist.image.url"
      alt="Playlist image"
      class="playlist-info__image"
    />

    <div class="playlist-info__slider">
      <section-main
        :playlist-name="playlist.name"
        :playlist-id="playlist.id"
        class="playlist-info__slider__item"
      />

      <section-features
        :playlist-uri="playlist.uri"
        class="playlist-info__slider__item"
      />

      <section class="playlist-info__slider__item section3">
        <div class="section3__description">
          <span>{{ playlist.description }}</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SectionMain: () => import('~/components/playlist/info_card/SectionMain'),
    SectionFeatures: () =>
      import('~/components/playlist/info_card/SectionFeatures'),
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
    height: 100%;
    display: flex;
    padding: 16px 0 8px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    &__item {
      min-width: 100%;
      padding-left: 18px;
      padding-right: 8px;
      scroll-snap-align: start;
    }
  }
}

.section3 {
  width: 100%;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
