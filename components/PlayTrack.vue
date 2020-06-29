<template>
  <div class="play-track">
    <img
      :src="track.album.image.url"
      alt="Track image"
      class="play-track__image"
    />

    <div class="play-track__track">
      <span>{{ track.name }}</span>
    </div>
    <div class="play-track__artist">
      <span>{{ track.artist.name }}</span>
    </div>

    <round-button class="play-track__play">
      <i class="material-icons">play_arrow</i>
    </round-button>
  </div>
</template>

<script>
export default {
  components: {
    RoundButton: () => import('~/components/base/RoundButton')
  },
  props: {
    track: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.play-track {
  height: 60px;
  display: grid;
  grid-template-columns: 34px 1fr 34px;
  grid-template-rows: 60% 1fr;
  grid-template-areas: 'image track play' 'image artist play';
  gap: 4px 8px;
  align-items: center;

  &__image {
    grid-area: image;
    height: 100%;
  }

  &__track {
    grid-area: track;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__artist {
    grid-area: artist;
    align-self: end;
    font-size: small;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__play {
    width: 34px;
    height: 34px;
    grid-area: play;
    justify-self: end;
  }
}
</style>
