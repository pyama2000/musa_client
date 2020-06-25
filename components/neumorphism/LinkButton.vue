<template>
  <div :class="[active]">
    <nuxt-link :to="page">{{ page }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      require: true,
      default: null
    }
  },
  computed: {
    active() {
      return this.$route.name === this.page
        ? 'link-button--active'
        : 'link-button'
    }
  }
}
</script>

<style lang="scss" scoped>
.link-button {
  display: flex;
  justify-content: center;
  width: 120px;
  padding: 12px 0;
  color: #61677c;
  font-weight: bold;
  background: #ffffff;
  border-radius: 50px;
  box-shadow: 9.31px 9.31px 15px #d6d6d6, -9.31px -9.31px 15px #ffffff;

  &--active {
    @extend .link-button;
    pointer-events: none;
    box-shadow: inset 9.31px 9.31px 15px #d6d6d6,
      inset -9.31px -9.31px 15px #ffffff;
  }
}
</style>
