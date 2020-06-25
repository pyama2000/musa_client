<template>
  <div :class="[active]">
    <nuxt-link :to="page">
      <i class="material-icons">{{ iconName }}</i>
    </nuxt-link>
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
    },
    iconName() {
      let iconName = ''

      if (this.page === 'home') {
        iconName = 'home'
      } else if (this.page === 'playlists') {
        iconName = 'library_music'
      } else if (this.page === 'search') {
        iconName = 'search'
      }

      return iconName
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
  background: #eef0f4;
  border-radius: 50px;
  box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;

  &--active {
    @extend .link-button;
    pointer-events: none;
    box-shadow: inset 9.91px 9.91px 15px #d9dade,
      inset -9.91px -9.91px 15px #ffffff;
  }
}
</style>
