<template>
  <section class="section__main">
    <div class="section__main__playlist-name">
      <span>{{ playlistName }}</span>
    </div>

    <div class="section__main__buttons">
      <square-button
        @click.native="play"
        class="section__main__buttons__button"
      >
        <i class="material-icons">play_arrow</i>
      </square-button>

      <square-button
        @click.native="shuffle"
        class="section__main__buttons__button"
      >
        <i class="material-icons">shuffle</i>
      </square-button>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    SquareButton: () => import('~/components/base/SquareButton')
  },
  props: {
    playlistName: {
      type: String,
      required: true
    },
    playlistId: {
      type: String,
      required: true
    }
  },
  methods: {
    play() {},
    shuffle() {}
  }
}
</script>

<style lang="scss" scoped>
.section__main {
  display: flex;
  flex-direction: column;
  font-weight: bold;

  &__playlist-name {
    flex-basis: 70%;
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
      width: 90px;
      height: 100%;
    }
  }
}
</style>
