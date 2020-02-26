<template>
  <div class="component-playlist-detail">
    <img class="component-playlist-detail__img" :src="imageUrl" />
    <div class="component-playlist-detail__information">
      <span class="component-playlist-detail__information__name">
        {{ name }}
      </span>
      <span class="component-playlist-detail__information__owner">
        Created by {{ owner }}
      </span>
      <span class="component-playlist-detail__information__description">
        {{ description }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
      default: ''
    },
    imageUrl: {
      type: String,
      required: true,
      default: ''
    },
    name: {
      type: String,
      required: true,
      default: ''
    },
    owner: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="sass">
.component-playlist-detail
  display: flex
  flex-direction: column
  &__img
    margin: auto
    width: 50%
  &__information
    display: flex
    flex-direction: column
    &__name
      padding-top: 16px
      font-size: 2.0em
      font-weight: 800
      text-align: center
    &__owner
      padding: 8px 0
      text-align: center
    &__description
      font-size: 1.2em
      text-align: center
      opacity: 0.5
</style>
