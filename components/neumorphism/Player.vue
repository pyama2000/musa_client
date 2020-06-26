<template>
  <div v-if="object !== null" class="player">
    <image-sheet
      :src="object.track.image"
      alt="Album image"
      class="player__image"
    />
    <div class="player__track-name">
      <span>{{ object.track.name }}</span>
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
    IconButton: () => import('~/components/neumorphism/IconButton'),
    ImageSheet: () => import('~/components/neumorphism/ImageSheet')
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
  gap: 0 24px;
  grid-template-areas: 'image track-name' 'image buttons';
  height: 120px;
  align-items: center;
  background: #eef0f4;

  &__image {
    grid-area: image;
    width: 120px;
    height: 120px;
  }

  &__track-name {
    grid-area: track-name;
    display: flex;
    align-self: center;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;

    & > span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }

  &__buttons {
    grid-area: buttons;
    display: flex;
    justify-content: space-between;
  }
}
</style>
