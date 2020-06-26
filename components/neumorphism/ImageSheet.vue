<template>
  <div class="image-sheet">
    <img :src="src" :alt="alt" class="image-sheet__image" />
  </div>
</template>

<script>
export default {
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
.image-sheet {
  display: flex;
  width: 100%;
  background: #eef0f4;
  border-radius: 15%;
  box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;

  &__image {
    width: 80%;
    height: auto;
    margin: auto;
  }
}
</style>
