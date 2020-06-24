<template>
  <div class="component__playlist-card">
    <v-card class="mx-auto">
      <v-img :src="imageUrl" />

      <v-card-title class="component__playlist-card__name">
        {{ name }}
      </v-card-title>

      <v-card-actions>
        <v-btn
          :to="`playlist?playlistID=${id}`"
          text
          class="component__playlist-card__action__button"
          color="teal accent-4"
        >
          SHOW
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
.component__playlist-card
  &__name
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
  &__description
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
  &__action
    &__button
      margin-left: auto
</style>
