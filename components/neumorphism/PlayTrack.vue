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
    <div class="play-track__play">
      <icon-button icon-name="play_arrow" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    IconButton: () => import('~/components/neumorphism/IconButton')
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
  grid-template-columns: 60px 1fr 50px;
  grid-template-rows: 60% 1fr;
  grid-template-areas: 'image track play' 'image artist play';
  gap: 4px 8px;
  align-items: center;

  &__image {
    grid-area: image;
    height: 100%;
    justify-self: center;
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
    grid-area: play;
    justify-self: end;
  }
}
</style>
