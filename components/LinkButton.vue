<template>
  <nuxt-link :to="page" :class="active">
    <i class="material-icons">{{ iconName }}</i>
  </nuxt-link>
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
  width: 100px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color;
  background: $background;
  border-radius: 0.55rem;
  box-shadow: $bump-shadow;

  &:active {
    box-shadow: $dent-shadow;
  }

  &--active {
    @extend .link-button;
    pointer-events: none;
    box-shadow: $dent-shadow;
  }
}
</style>
