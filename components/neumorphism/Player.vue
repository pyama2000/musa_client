<template>
  <div v-if="object !== null" class="player">
    <div class="player__image">
      <img :src="object.track.image" alt="Album image" />
    </div>
    <div class="player__track-name">
      {{ object.track.name }}
    </div>
    <div class="player__buttons">
      <icon-button @click.native="skipPrevious" icon-name="skip_previous" />
      <icon-button @click.native="pauseResume" :icon-name="getPauseResume" />
      <icon-button @click.native="skipNext" icon-name="skip_next" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    IconButton: () => import('~/components/neumorphism/IconButton')
  },
  props: {
    object: {
      type: Object,
      required: true,
      default: null
    }
  },
  computed: {
    getPauseResume() {
      return this.object.isPlaying ? 'pause' : 'play_arrow'
    }
  },
  methods: {
    pauseResume() {
      const url = this.object.isPlaying ? 'pause' : 'resume'

      this.$axios.put(`/player/${url}`).then(({ data }) => {
        this.object.isPlaying = !this.object.isPlaying
      })
    },
    skipNext() {
      this.$axios.post('/player/next').then(({ data }) => {
        this.object.track = data.track
      })
    },
    skipPrevious() {
      this.$axios.post('/player/previous').then(({ data }) => {
        this.object.track = data.track
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
  }
}
</style>
