<template>
  <div class="playlist-info">
    <image-sheet
      :src="playlist.image.url"
      alt="Playlist image"
      class="playlist-info__image"
    />

    <div class="playlist-info__slider">
      <section class="playlist-info__slider__item section1">
        <div class="section1__playlist-name">
          <span>{{ playlist.name }}</span>
        </div>

        <div class="section1__buttons">
          <flat-icon-button
            icon-name="play_arrow"
            class="section1__buttons__button"
          />
          <flat-icon-button
            icon-name="shuffle"
            class="section1__buttons__button"
          />
        </div>
      </section>

      <section class="playlist-info__slider__item section2">
        <div class="section2__description">
          <span>{{ playlist.description }}</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    FlatIconButton: () => import('~/components/FlatIconButton'),
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
.playlist-info {
  height: 120px;
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-areas: 'image slider';
  gap: 24px;
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
      scroll-snap-align: start;
    }
  }
}

.section1 {
  display: flex;
  flex-direction: column;
  font-weight: bold;

  &__playlist-name {
    flex-basis: 70%;
    width: 100%;
    height: 100%;
    overflow: hidden;

    & > span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }

  &__buttons {
    flex-basis: 30%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &__button {
      max-width: 90px;
    }
  }
}

.section2 {
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
