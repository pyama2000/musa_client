<template>
  <div class="component__track-detail">
    <span class="component__track-detail__album">
      {{ album }}
    </span>

    <span class="component__track-detail__name">
      {{ name }}
    </span>

    <div class="component__track-detail__artists">
      <span
        v-for="(artist, i) in artists"
        :key="i"
        class="component__track-detail__artists__artist-name"
      >
        {{ artist.name }}
      </span>
    </div>

    <div class="component__track-detail__added-at">
      <v-icon class="component__track-detail__added-at__icon">
        mdi-clock-outline
      </v-icon>

      <span class="component__track-detail__added-at__date">
        {{ addedDate }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addedAt: {
      type: String,
      required: true,
      default: ''
    },
    album: {
      type: String,
      required: true,
      default: ''
    },
    artists: {
      type: Array,
      required: true,
      default: () => []
    },
    name: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {
      addedDate: this.addedAt.substr(0, 10)
    }
  }
}
</script>

<style lang="sass">
.component__track-detail
  padding: 16px
  display: flex
  flex-direction: column
  box-shadow: 2px 2px 6px rgba(0,0,0,.4)
  &__added-at
    display: flex
    flex-direction: row
    align-items: center
    justify-content: flex-end
    opacity: 0.5
    &__icon
      padding: 0 4px
      font-size: 16px !important
    &__date
      font-size: 14px
  &__album
    margin-bottom: 8px
    font-size: 1.2em
    opacity: 0.5
  &__artists
    margin: 8px 0
    display: flex
    flex-direction: row
    justify-content: space-between
    &__artist-name
      width: 100%
      padding: 0 8px
      font-size: 1.2em
      text-align: center
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
  &__name
    font-size: 1.8em
    font-weight: 800
    line-height: 1.2em
</style>
