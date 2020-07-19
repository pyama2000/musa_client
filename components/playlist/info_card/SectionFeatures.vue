<template>
  <section class="section__features">
    <div class="section__features__buttons">
      <square-button
        v-for="(feature, i) in features"
        :key="i"
        :style="{ color: fontColor(feature) }"
        @click.native="action(feature)"
        class="section__features__buttons__button"
      >
        <span>{{ feature }}</span>
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
  computed: {
    features() {
      return ['marge', 'snapshot', 'queue', 'delete']
    },
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
    action(feature) {}
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
