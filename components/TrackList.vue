<template>
  <bump-card class="track-list">
    <play-track
      v-for="(track, i) in tracks"
      :key="i"
      :track="track"
      class="track-list__item"
    />
  </bump-card>
</template>

<script>
export default {
  components: {
    BumpCard: () => import('~/components/base/BumpCard'),
    PlayTrack: () => import('~/components/PlayTrack')
  },
  props: {
    tracks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.track-list {
  display: flex;
  flex-direction: column;
  overflow: scroll;

  &__item {
    padding: 12px;
    border: 0.5px solid #d1d9e6;
  }

  &__item:first-child {
    margin-top: 0;
  }

  &__item:last-child {
    margin-bottom: 0;
  }
}
</style>
