<template>
  <section class="section__detail">
    <div class="section__detail__description">
      <span>{{ playlistDescription }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    playlistDescription: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.section__detail {
  font-weight: bold;
  overflow: hidden;

  & > span {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
}
</style>
