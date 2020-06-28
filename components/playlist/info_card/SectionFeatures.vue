<template>
  <section class="section__features">
    <div class="section__features__buttons">
      <square-button
        v-for="(f, i) in features"
        :key="i"
        :style="{ color: fontColor(f) }"
        @click.native="feature(f)"
        class="section__features__buttons__button"
      >
        <span>{{ f }}</span>
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
    playlistUri: {
      type: String,
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
          return '#31344b'
        }
      }
    }
  },
  methods: {
    feature(f) {}
  }
}
</script>

<style lang="scss" scoped>
.section__features {
  width: 100%;
  height: 100%;

  &__buttons {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    &__button {
      width: 90px;
      height: 28px;
      font-size: x-small;
    }
  }
}
</style>
