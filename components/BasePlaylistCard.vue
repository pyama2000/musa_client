<template>
  <div class="component__playlist-card">
    <v-card class="mx-auto">
      <v-img :src="imageUrl" />
      <v-card-title>{{ name }}</v-card-title>
      <v-card-text v-if="description !== ''">{{ description }}</v-card-text>

      <v-card-actions>
        <v-btn
          text
          class="component__playlist-card__button"
          color="teal accent-4"
          >SHOW</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true
    },
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
  &__button
    margin-left: auto
</style>
