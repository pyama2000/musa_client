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
          <base-button @click.native="start" class="section1__buttons__button">
            <i class="material-icons">play_arrow</i>
          </base-button>

          <base-button
            @click.native="shuffle"
            class="section1__buttons__button"
          >
            <i class="material-icons">shuffle</i>
          </base-button>
        </div>
      </section>

      <section class="playlist-info__slider__item section2">
        <div class="section2__buttons">
          <base-button
            v-for="(f, i) in features"
            :key="i"
            :style="{ color: fontColor(f) }"
            @click.native="feature(f)"
            class="section2__buttons__button"
          >
            <span>{{ f }}</span>
          </base-button>
        </div>
      </section>

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
    BaseButton: () => import('~/components/neumorphism/BaseButton'),
    ImageSheet: () => import('~/components/neumorphism/ImageSheet')
  },
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      features: ['marge', 'snapshot', 'queue', 'delete']
    }
  },
  computed: {
    fontColor() {
      return function(feature) {
        if (feature === 'delete') {
          return '#e53a40'
        } else {
          return '#50545c'
        }
      }
    }
  },
  methods: {
    start() {},
    shuffle() {},
    feature(f) {}
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
    justify-content: space-between;
    align-items: center;

    &__button {
      max-width: 90px;
    }
  }
}

.section2 {
  width: 100%;
  height: 100%;

  &__buttons {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &__button {
      max-width: 90px;
      max-height: 36px;
      font-size: x-small;
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
