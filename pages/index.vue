<template>
  <div class="index">
    <v-card class="mx-auto index__card">
      <v-card-title>
        <logo />
      </v-card-title>

      <v-card-text class="headline font-weight-light">
        Musa is user friendly interface for playing music with Spotify
      </v-card-text>

      <v-card-actions>
        <v-btn :href="url" class="index__card__btn" color="teal accent-4" text>
          LOGIN WITH SPOTIFY
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'empty',
  components: {
    Logo
  },
  data() {
    return {
      url: null
    }
  },
  async mounted() {
    await this.$axios.get('/auth').then(({ data }) => {
      this.url = data.url
    })
  }
}
</script>

<style lang="sass">
.index
  margin: auto
  &__card
    max-width: 90%
    &__btn
      margin-left: auto

.logo
  margin: 16px 16px 16px 0
</style>
