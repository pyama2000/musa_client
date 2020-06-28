<template>
  <dent-card class="image-card">
    <img :src="src" :alt="alt" class="image-card__image" />
  </dent-card>
</template>

<script>
export default {
  components: {
    DentCard: () => import('~/components/base/DentCard')
  },
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.image-card {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__image {
    width: 80%;
  }
}
</style>
