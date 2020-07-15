<template>
  <div class="slider">
    <section-main
      :playlist-name="playlist.name"
      :playlist-uri="playlist.uri"
      class="slider__item"
    />

    <section-features :playlist-uri="playlist.uri" class="slider__item" />

    <section-detail
      :playlist-description="playlist.description"
      class="slider__item"
    />
  </div>
</template>

<script>
export default {
  components: {
    SectionMain: () => import('./SectionMain'),
    SectionFeatures: () => import('./SectionFeatures'),
    SectionDetail: () => import('./SectionDetail')
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
.slider {
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
</style>
