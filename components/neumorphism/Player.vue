<template>
  <div v-if="object !== null" class="player">
    <div class="player__image">
      <img :src="object.track.image" alt="Album image" />
    </div>
    <div class="player__track-name">
      {{ object.track.name }}
    </div>
    <div class="player__buttons">
      <div class="player__buttons__item">
        <i class="material-icons">skip_previous</i>
      </div>
      <button @click="pauseResume" class="player__buttons__item">
        <i v-if="object.isPlaying" class="material-icons">pause</i>
        <i v-else class="material-icons">play_arrow</i>
      </button>
      <div class="player__buttons__item">
        <i class="material-icons">skip_next</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    object: {
      type: Object,
      require: null,
      default: null
    }
  },
  methods: {
    pauseResume() {
      const url = this.object.isPlaying ? 'pause' : 'resume'

      this.$axios.put(`/player/${url}`).then(({ data }) => {
        this.object.isPlaying = !this.object.isPlaying
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.player {
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: 1.5fr 0.5fr;
  gap: 24px;
  grid-template-areas: 'image track-name' 'buttons buttons';
  align-items: center;
  padding: 0 8px;
  background: #eef0f4;

  &__image {
    grid-area: image;
    display: flex;
    width: 120px;
    height: 120px;
    background: #eef0f4;
    border-radius: 15%;
    box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;

    & > img {
      width: 80%;
      height: 80%;
      margin: auto;
    }
  }

  &__track-name {
    grid-area: track-name;
    display: flex;
    align-items: center;
    height: 100%;
    font-weight: bold;
  }

  &__buttons {
    grid-area: buttons;
    display: flex;
    justify-content: space-around;

    &__item {
      padding: 12px;
      background: #eef0f4;
      border-radius: 100%;
      box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;
    }
  }
}
</style>
