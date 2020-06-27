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

        <div class="section1__owner-name">
          <i class="material-icons">person</i>
          <span>{{ playlist.owner.name }}</span>
        </div>

        <div class="section1__followers-total">
          <i class="material-icons">favorite</i>
          <span>{{ playlist.followers.total }}</span>
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
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    &__item {
      min-width: 100%;
      scroll-snap-align: start;
    }
  }
}

.section1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 70% 1fr;
  grid-template-areas: 'playlist-name playlist-name' 'owner-name followers-total';
  gap: 1px 1px;
  align-items: center;
  font-weight: bold;

  &__playlist-name {
    grid-area: playlist-name;
    font-size: larger;
    overflow: hidden;
    text-overflow: ellipsis;

    & > span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }

  &__owner-name {
    grid-area: owner-name;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__followers-total {
    grid-area: followers-total;
    display: flex;
    align-items: center;
    margin-left: auto;
    overflow: hidden;
    text-overflow: ellipsis;
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
