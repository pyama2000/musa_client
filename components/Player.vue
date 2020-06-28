<template>
  <div class="player">
    <image-card
      :src="object.track.image"
      alt="Album image"
      class="player__image"
    />
    <div class="player__track-name">
      <span>{{ object.track.name }}</span>
    </div>
    <div class="player__buttons">
      <round-button
        @click.native="skipPrevious"
        class="player__buttons__button"
      >
        <i class="material-icons">skip_previous</i>
      </round-button>

      <round-button @click.native="pauseResume" class="player__buttons__button">
        <i class="material-icons">{{ getPauseResume }}</i>
      </round-button>

      <round-button @click.native="skipNext" class="player__buttons__button">
        <i class="material-icons">skip_next</i>
      </round-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ImageCard: () => import('~/components/base/ImageCard'),
    RoundButton: () => import('~/components/base/RoundButton')
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

    &__button {
      width: 42px;
      height: 42px;
    }
  }
}
</style>
