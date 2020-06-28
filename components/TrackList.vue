<template>
  <div class="track-list">
    <play-track
      v-for="(track, i) in tracks"
      :key="i"
      :track="track"
      class="track-list__item"
    />
  </div>
</template>

<script>
export default {
  components: {
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
  padding: 24px;
  background: #eef0f4;
  border-radius: 15px;
  box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;
  overflow: scroll;

  &__item {
    margin: 8px 0;
  }

  &__item:first-child {
    margin-top: 0;
  }

  &__item:last-child {
    margin-bottom: 0;
  }
}
</style>
